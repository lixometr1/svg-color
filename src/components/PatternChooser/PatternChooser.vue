<template>
  <v-item-group :value="value" @change="$emit('input', $event)">
    <v-row>
      <v-col cols="4" sm="3" v-for="(item, idx) in items" :key="idx">
        <v-item v-slot="{ active, toggle }" :value="item.id">
          <v-card
            :elevation="active ? 20 : 2"
            @click="toggle"
            v-html="item.content"
          >
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
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
  data: () => ({
    values: [],
  }),
};
</script>

<style lang="scss">
.pattern-chooser {
  &-content {
  }
}
</style>
