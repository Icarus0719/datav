function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}
Vector.prototype = {
  constructor: Vector,
  square: function() {
    return this.x * this.x + this.y * this.y;
  },
  length: function() {
    return Math.sqrt(this.square());
  },
  add: function(q) {
    return new Vector(this.x + q.x, this.y + q.y);
  },
  minus: function(q) {
    return new Vector(this.x - q.x, this.y - q.y);
  },
  multipy: function(scale) {
    return new Vector(this.x * scale, this.y * scale);
  },
  normalize: function(length = 1) {
    return this.multipy(length / this.length());
  },
};
Vector.fromPoints = function(p1, p2) {
  return new Vector(p2.x - p1.x, p2.y - p1.y);
};
function Random(min, max) {
  return Math.round(min + (max - min) * Math.random());
}
class Force {
  constructor(svg, points, options = {}) {
    this.options = {
      relation: 300, // 两点之间的自然长度
      decay: 0.985, //速度衰减系数
      ...options,
    };
    this.svg = svg;
    this.points = points;
    this.lastFrameTIme = +new Date();
    this._creatPoints(this.points);
    this.path = this._createPath();
    this._update();
  }
  _creatPoints(points) {
    points.forEach((point) => {
      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      const x = Random(-400, 400);
      const y = Random(-400, 400);
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', 10);
      circle.setAttribute('fill', point.color);
      this.svg.appendChild(circle);
      point.circle = circle;
      point.s = new Vector(x, y);
      point.v = new Vector();
      point.a = new Vector();
    });
  }
  _createPath() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke', 'white');
    this.svg.appendChild(path);
    return path;
  }
  _update() {
    // 点位置更新
    const frameTime = +new Date();
    let t = frameTime - this.lastFrameTIme;
    t /= 200;
    this.points.forEach((pa) => {
      // 向量合力
      let f = new Vector();
      // 计算合力
      this.points.forEach((pb) => {
        if (pa === pb) return;
        // 向量间距
        const x = Vector.fromPoints(pa.s, pb.s);
        // 弹性系数
        let delta = x.length() - this.options.relation;
        // 所受力
        f = f.add(x.normalize(delta * 0.05));
      });
      // 加速度
      pa.a = f;
      // 速度
      pa.v = pa.v.add(pa.a.multipy(t)).multipy(this.options.decay);
      // 位移
      pa.s = pa.s.add(pa.v.multipy(t));
      // 设置位移
      pa.circle.setAttribute('cx', pa.s.x);
      pa.circle.setAttribute('cy', pa.s.y);
    });
    // 创建连线
    let linkPath = [];
    this.points.forEach((pa) => {
      let sa = pa.s;
      this.points.forEach((pb) => {
        if (pa === pb) return;
        let sb = pb.s;
        linkPath = linkPath.concat([
          'M',
          Math.round(sa.x),
          Math.round(sa.y),
          'L',
          Math.round(sb.x),
          Math.round(sb.y),
        ]);
      });
    });
    this.path.setAttribute('d', linkPath.join(' '));

    this.lastFrameTIme = frameTime;
    window.requestAnimationFrame(() => this._update());
  }
}
export default Force;
