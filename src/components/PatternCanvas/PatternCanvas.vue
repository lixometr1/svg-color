<template>
  <v-card class="pattern-canvas">
    <v-card-title>Save as image:</v-card-title>

    <v-card-text>
      <div class="pattern-canvas-images">
        <img :src="image" alt="" :style="{ maxWidth: '400px' }" />
        <img :src="image" alt="" :style="{ maxWidth: '400px' }" />
        <img :src="image" alt="" :style="{ maxWidth: '400px' }" />
        <img :src="image" alt="" :style="{ maxWidth: '400px' }" />
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="save" size="lg">Save as svg</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    svg: String,
  },
  computed: {
    image() {
      if (!this.imageBuffer) return;
      const b64Start = "data:image/svg+xml;base64,";

      const image64 = b64Start + this.imageBuffer;
      return image64;
    },
    imageBuffer() {
      if (!this.svg) return;
      // make it base64
      const buf = Buffer.from(this.svg);
      const svg64 = buf.toString("base64");
      return svg64;
    },
  },
  methods: {
    save() {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.setAttribute("type", "hidden");
      link.href = "data:text/plain;base64," + this.imageBuffer;
      link.download = "preview.svg";
      link.click();
      document.body.removeChild(link);
    },
    draw() {
      var img = new Image();
      var canvas = this.$refs.canv;

      // set it as the source of the img element
      img.src = this.image;
      canvas.getContext("2d").drawImage(img, 50, 50, 300, 300);
    },
  },
  watch: {
    // svg() {
    //   this.draw();
    // },
  },
};
</script>

<style lang="scss">
.pattern-canvas {
  position: sticky;
  top: 30px;
  &-images {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 50%;
    }
  }
}
</style>
