import Vue from "vue";
import Progress from "./Progress";

new Vue({
  el: "#app",
  data() {
    return {
      progress: 0
    };
  },
  mounted() {
    this.t = setInterval(() => {
      this.progress += 0.01;
      if (this.progress >= 1) {
        clearInterval(this.t);
      }
    }, 100);
  },
  render(h) {
    return h(Progress, {
      domProps: {
        style:
          "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 1.4rem; width: 1.4rem;"
      },
      props: {
        size: 70,
        radius: 35,
        color: "#E3E3E3",
        rimWidth: 6,
        progress: this.progress
      }
    });
  }
});
