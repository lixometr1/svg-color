<template>
  <div>
    <!-- <v-card rounded elevation="5"> -->
    <background-color
      :value="backgroundColor"
      @input="$emit('update:backgroundColor', $event)"
    />
    <v-divider class="my-3" />
    <!-- </v-card> -->
    <!-- <v-card rounded elevation="5"> -->
    <pattern-color
      :value="patternColor"
      @input="$emit('update:patternColor', $event)"
    />
    <!-- </v-card> -->
  </div>
</template>

<script>
import BackgroundColor from "../BackgroundColor/BackgroundColor.vue";
import PatternColor from "../PatternColor/PatternColor.vue";
export default {
  components: { PatternColor, BackgroundColor },
  props: {
    patternColor: String,
    backgroundColor: String,
  },
};
</script>

<style lang="scss"></style>
