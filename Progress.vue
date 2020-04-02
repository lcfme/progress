<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :width="size"
  >
    <circle
      :cx="cX"
      :cy="cY"
      :r="radius - rimWidth / 2"
      fill="none"
      :stroke-width="rimWidth"
      :stroke="color"
    />

    <path :fill="color" :d="d" />
  </svg>
</template>

<script>
export default {
  beforeCreate() {
    globalThis.vm = this;
  },
  props: {
    size: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "#000000"
    },
    radius: {
      type: Number,
      required: true
    },
    rimWidth: {
      type: Number,
      required: false,
      default: 0
    },
    progress: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    cX() {
      return this.size / 2;
    },
    cY() {
      return this.cX;
    },
    d() {
      if (this.angle <= Math.PI) {
        return `M ${this.cX}, ${this.cY}, L ${this.beginXY.x}, ${this.beginXY.y}, A ${this.radius}, ${this.radius}, 0, 0, 1, ${this.endXY.x}, ${this.endXY.y}, Z`;
      }
      return `M ${this.cX}, ${this.cY}, L ${this.beginXY.x}, ${
        this.beginXY.y
      }, A ${this.radius}, ${this.radius}, 0, 0, 1, ${this.cX}, ${this.cY +
        this.radius}, A ${this.radius}, ${this.radius}, 0, 0, 1, ${
        this.endXY.x
      }, ${this.endXY.y}, Z`;
    },
    angle() {
      let progress = this.progress;
      if (progress < 0) {
        progress = 0;
      } else if (progress > 1) {
        progress = 1;
      }
      return 2 * Math.PI * progress;
    },
    beginXY() {
      return {
        x: this.cX,
        y: this.cY - this.radius
      };
    },
    endXY() {
      return {
        x: this.cX + this.radius * Math.sin(this.angle),
        y: this.cY - this.radius * Math.cos(this.angle)
      };
    }
  }
};
</script>

<style></style>
