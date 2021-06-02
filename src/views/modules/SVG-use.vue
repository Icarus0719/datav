<template>
  <div style="background: #001122">
    <svg
      width="100%"
      height="100%"
      viewBox="-400 -300 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <polygon
          id="star"
          points="0 -20 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2"
          fill="#FAF300"
        ></polygon>
      </defs>
      <g id="reality">
        <g id="star-group"></g>
        <g id="moon-group">
          <mask id="moon-mask">
            <circle cx="-250" cy="-100" r="50" fill="white"></circle>
            <circle cx="-220" cy="-120" r="50" fill="black"></circle>
          </mask>
          <circle
            cx="-250"
            cy="-100"
            r="50"
            fill="#FA0409"
            mask="url(#moon-mask)"
          ></circle>
        </g>
        <g id="light-tower" transform="translate(200,0)">
          <defs>
            <linearGradient id="tower" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="rgba(4,66,250,0.4)"></stop>
              <stop offset="1" stop-color="rgba(4,66,250,0.8)"></stop>
            </linearGradient>
            <radialGradient id="light" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stop-color="rgba(255,255,255,0.8)"></stop>
              <stop offset="1" stop-color="rgba(255,255,255,0)"></stop>
            </radialGradient>
            <clipPath id="light-clip">
              <polygon points="0 0 -400 -30 -400 30">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="6s"
                  repeatCount="indefinite"
                ></animateTransform>
              </polygon>
              <circle cx="0" cy="0" r="2"></circle>
            </clipPath>
          </defs>
          <polygon points="0 0 5 50 -5 50" fill="url(#tower)"></polygon>
          <ellipse
            cx="0"
            cy="0"
            rx="400"
            ry="300"
            fill="url(#light)"
            clip-path="url(#light-clip)"
          ></ellipse>
        </g>
      </g>
      <g id="reflect" transform="translate(0,50)" mask="url(#fade-mask)">
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="rgba(255,255,255,0.5)"></stop>
            <stop offset="1" stop-color="rgba(255,255,255,0)"></stop>
          </linearGradient>
          <mask id="fade-mask">
            <rect
              x="-400"
              y="0"
              width="800"
              height="300"
              fill="url(#fade)"
            ></rect>
          </mask>
        </defs>
        <use
          xlink:href="#reality"
          transform="scale(1,-1) translate(0 ,-50)"
        ></use>
      </g>
      <line x1="-400" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.3)"></line>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.renderStar();
  },
  methods: {
    renderStar() {
      const starRef = document.getElementById('star');
      const satrGroup = document.getElementById('star-group');
      let starCount = 500;
      let star;
      while (starCount--) {
        star = this.use(starRef);
        star.setAttribute('opacity', this.random(0.3, 1));
        star.setAttribute(
          'transform',
          `translate(${this.random(-400, 400)},${this.random(
            -300,
            50
          )}) scale(${this.random(0.1, 0.6)})`
        );
        satrGroup.appendChild(star);
      }
    },
    random(min, max) {
      return min + (max - min) * Math.random();
    },
    use(origin) {
      let _use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      _use.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        '#' + origin.id
      );
      return _use;
    },
  },
};
</script>