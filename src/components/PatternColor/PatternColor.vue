<template>
  <div>
    <v-row>
      <v-col md="6" cols="12">
        <v-card rounded elevation="5">
          <v-card-title>Choose background color:</v-card-title>
          <v-color-picker
            show-swatches
            hide-canvas
            hide-sliders
            :value="backgroundColor"
            @update:color="$emit('update:backgroundColor', $event.hex)"
            dot-size="25"
            swatches-max-height="200"
          ></v-color-picker>
        </v-card>
      </v-col>
      <v-col sm="6" cols="12">
        <v-card rounded elevation="5">
          <v-card-title>Choose pattern color:</v-card-title>
          <v-color-picker
            :value="patternColor"
            hide-canvas
            hide-sliders
            show-swatches
            @update:color="$emit('update:patternColor', $event.hex)"
            dot-size="25"
            swatches-max-height="200"
          ></v-color-picker>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    patternColor: String,
    backgroundColor: String,
  },
};
</script>

<style lang="scss"></style>
