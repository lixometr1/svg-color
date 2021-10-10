<template>
  <v-item-group
    :value="value"
    @change="$emit('input', $event)"
    class="pattern-chooser"
  >
    <v-row>
      <v-col cols="12" sm="6" v-for="(item, idx) in items" :key="idx">
        <v-item v-slot="{ active, toggle }" :value="item.id">
          <v-card :elevation="active ? 20 : 2" @click="toggle">
            <div class="pattern-chooser-images">
              <div v-html="item.content"></div>
              <div v-html="item.content"></div>
              <div v-html="item.content"></div>
              <div v-html="item.content"></div>
            </div>
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
  data: () => ({}),
};
</script>

<style lang="scss">
.pattern-chooser {
  &-images {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 50%;
    }
  }
}
</style>
