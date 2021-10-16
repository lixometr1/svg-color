<template>
  <div class="pattern-chooser" :loading="isLoading">
    <v-card-title>Choose pattern: </v-card-title>
    <v-card-text>
      <category-filter
        :value="activeCategories"
        :items="categories"
        label="Pattern categories"
        @input="$emit('update:activeCategories', $event)"
      />
      <pattern-items
        :items="items"
        :value="value"
        @input="$emit('input', $event)"
      />
      <v-pagination
        class="mt-6"
        :value="page"
        @input="$emit('update:page', $event)"
        :length="totalPages"
        circle
        v-if="totalPages > 0"
      ></v-pagination>
    </v-card-text>
  </div>
</template>

<script>
import CategoryFilter from "../CategoryFilter/CategoryFilter.vue";
import PatternItems from "../PatternItems/PatternItems.vue";

export default {
  components: { PatternItems, CategoryFilter },
  props: {
    value: String,
    categories: {
      type: Array,
      default: () => [],
    },
    activeCategories: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    isLoading: Boolean,
    totalPages: Number,
    page: Number,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
