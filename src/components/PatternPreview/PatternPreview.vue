<template>
  <v-card class="pattern-preview display-flex"   elevation="5">
    <v-card-text>
      <div v-html="value.content" class="pattern-preview-content"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="sass"></style>
