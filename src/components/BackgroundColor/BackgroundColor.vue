<template>
  <div>
    <v-card-title>Choose background color:</v-card-title>

    <v-card-text>
      <!-- <color-filter label="Color categories" v-model="activeColorCategories" /> -->
      <color-items
        :items="backgroundColor"
        :value="value"
        @input="$emit('input', $event)"
      />
      <!-- <v-pagination
        class="mt-4"
        v-model="page"
        :length="totalPages"
        circle
        v-if="totalPages > 1"
      ></v-pagination> -->
    </v-card-text>
  </div>
</template>

<script>
import ColorItems from "../ColorItems/ColorItems.vue";
import { fetchBackgroundColors } from "@/api/fetchColors";

export default {
  components: { ColorItems },
  props: {
    value: String,
  },
  data: () => ({
    activeColorCategories: [],
    backgroundColor: [],
  }),
  async created() {
    await this.fetchBackgroundColors();
    if (this.backgroundColor[0]) {
      this.$emit("input", this.backgroundColor[0]?.hex);
    }
  },
  methods: {
    async fetchBackgroundColors() {
      const { data } = await fetchBackgroundColors({
        categories: this.activeColorCategories,
      });
      this.backgroundColor = data;
    },
  },
  watch: {
    activeColorCategories() {
      this.fetchBackgroundColors();
    },
  },
};
</script>

<style lang="scss"></style>
