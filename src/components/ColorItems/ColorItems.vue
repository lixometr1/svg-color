<template>
  <v-row class="color-items pb-3">
    <v-col cols="6" sm="4" md="3" v-for="(item, idx) in items" :key="idx">
      <v-card
        class="color-items__item"
        :elevation="item.hex === value ? 10 : 2"
        @click="$emit('input', item.hex)"
      >
        <div
          class="color-items__item-color"
          :style="{ backgroundColor: item.hex }"
        ></div>
        <div class="color-items__item-name">
          {{ item.name }}
        </div>
     
        <v-checkbox
          :input-value="true"
          readonly
          :ripple="false"
          :value="true"
          class="color-items__item-checkmark"
          v-if="item.hex === value"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: [String, Number],
  },
  data: () => ({
  }),
};
</script>

<style lang="scss">
.color-items {
  max-height: 400px;
  overflow: auto;
  &__item {
    position: relative;
    &-color {
      position: relative;
      width: 100%;
      //   height: 40px;
      padding-bottom: 100%;
      //   border-radius: 4px;
    }
    &-name {
      text-align: center;
      font-size: 12px;
      line-height: 1;
      padding: 5px 3px;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    &-checkmark {
      position: absolute !important;
      top: 0 !important;
      left: auto !important;
      right: 0 !important;
      margin-top: 0px !important;
      margin-right: 0px !important;
    }
  }
}
</style>
