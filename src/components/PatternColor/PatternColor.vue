<template>
  <div>
    <v-card-title>Choose pattern color:</v-card-title>
    <v-card-text>
      <category-filter
        label="Color categories"
        v-model="activeColorCategories"
        :items="colorCategories"
      />
      <color-items
        :items="patternColors"
        :value="value"
        @input="$emit('input', $event)"
      />
      <v-pagination
        class="mt-6"
        v-model="page"
        :length="totalPages"
        circle
        v-if="totalPages > 1"
      ></v-pagination>
    </v-card-text>
  </div>
</template>

<script>
import CategoryFilter from "../CategoryFilter/CategoryFilter.vue";
import ColorItems from "../ColorItems/ColorItems.vue";
import { fetchPatternColors } from "@/api/fetchColors";
import fetchColorCategories from "@/api/fetchColorCategories";
export default {
  components: { CategoryFilter, ColorItems },
  props: {
    value: String,
  },
  data: () => ({
    page: 1,
    totalPages: 0,
    activeColorCategories: [],
    patternColors: [],
    colorCategories: [],
  }),

  created() {
    this.fetchPatternColors();
    this.fetchColorCategories();
  },
  methods: {
    async fetchColorCategories() {
      const { data } = await fetchColorCategories();
      this.colorCategories = data;
    },
    async fetchPatternColors() {
      const { data } = await fetchPatternColors({
        categories: this.activeColorCategories,
        page: this.page,
      });
      this.patternColors = data.items;
      this.totalPages = data.meta.totalPages;
    },
  },
  watch: {
    activeColorCategories() {
      this.page = 1;
      this.fetchPatternColors();
    },
    page() {
      this.fetchPatternColors();
    },
  },
};
</script>

<style lang="scss"></style>
