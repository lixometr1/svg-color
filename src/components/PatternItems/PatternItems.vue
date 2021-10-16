<template>
  <v-row>
    <v-col cols="6" v-for="(item, idx) in items" :key="idx">
      <v-card
        class="pattern-chooser-item"
        :elevation="value === item.id ? 20 : 2"
        @click="$emit('input', item.id)"
      >
        <div class="pattern-chooser-images">
          <div v-html="item.defaultContent"></div>
          <div v-html="item.defaultContent"></div>
          <div v-html="item.defaultContent"></div>
          <div v-html="item.defaultContent"></div>
        </div>
        <div class="pattern-chooser-name">{{ item.name }}</div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Number,
    patternColor: String,
    backgroundColor: String,
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.pattern-chooser {
  &-item {
    position: relative;
  }
  &-images {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 50%;
    }
    svg {
      width: 100%;
    }
  }
  &-name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4px 4px;
    text-align: center;
    background: white;
    font-size: 14px;
    border-radius: 0 !important;
  }
}
</style>
