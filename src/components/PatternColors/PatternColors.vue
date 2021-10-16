<template>
  <div>
    <v-card>
      <v-row>
        <v-col sm="6" cols="12">
          <!-- <v-card rounded elevation="5"> -->
          <pattern-color
            :value="patternColor"
            @input="$emit('update:patternColor', $event)"
          />
          <!-- </v-card> -->
        </v-col>
        <v-col md="6" cols="12">
          <!-- <v-card rounded elevation="5"> -->
          <background-color
            :value="backgroundColor"
            @input="$emit('update:backgroundColor', $event)"
          />
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-card>
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
