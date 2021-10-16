<template>
  <div>
    <v-select
      :value="value"
      @change="$emit('input', $event)"
      chips
      multiple
      :deletable-chips="true"
      item-value="id"
      item-text="name"
      v-bind="$attrs"
    ></v-select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss"></style>
