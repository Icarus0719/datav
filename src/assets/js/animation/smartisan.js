// 仿坚果手机官网三角函数动画
function lerp(value1, value2, amount) {
  amount = amount < 0 ? 0 : amount
  amount = amount > 1 ? 1 : amount
  return value1 + (value2 - value1) * amount
}

let mouse = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5
}


class SineNuts {
  constructor(listDom) {
    this.padding = 0;
    this.dom = listDom;
    this.nuts = listDom.children;
    this.total = listDom.children.length;
  }
  updateNuts() {
    const minHeight = window.innerHeight * 0.5;
    const perWidth = window.innerWidth / this.total - this.padding;
    for (let i = 0; i < this.total; i += 1) {
      const x = this.padding * (i + 1) + i * perWidth - this.padding * 0.5
      const nutX = x + perWidth * 0.5
      let height = Math.sin((nutX - mouse.x) * Math.PI / window.innerWidth + Math.PI * 0.5) * window.innerHeight * 0.85
      height = Math.max(height, minHeight);
      const curHeight = lerp(0, height, 0.5);
      this.nuts[i].style.height = `${curHeight}px`;
    }
  }
  init() {
    this.dom.addEventListener('mousemove', (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
      this.updateNuts();
    })
  }
}
export default SineNuts