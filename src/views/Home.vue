<template>
  <div>
    <v-container>
      <v-row class="">
        <v-col md="6" cols="12" class="position-relative">
          <!-- <pattern-preview :value="activePatternData" v-if="activePattern" /> -->
          <pattern-canvas
            :svg="activePatternData.content"
            v-if="activePattern"
          />
        </v-col>

        <v-col md="6" cols="12">
          <v-card>
            <pattern-chooser
              v-model="activePattern"
              :totalPages="totalPages"
              :items="fetchedPatterns"
              :page.sync="page"
              :activeCategories.sync="activePatternCategories"
              :categories="patternCategories"
            />
            <v-divider class="mt-6 mb-4" />

            <pattern-colors
              :patternColor.sync="patternColor"
              :backgroundColor.sync="backgroundColor"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-snackbar v-model="showTooltip">
      {{ tooltipText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="showTooltip = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </div>
</template>

<script>
import PatternColors from "../components/PatternColors/PatternColors.vue";
// import PatternPreview from "../components/PatternPreview/PatternPreview.vue";
import PatternCanvas from "../components/PatternCanvas/PatternCanvas.vue";
// import svgToBase64 from "@/helpers/svg-to-base64";
import fetchPatterns from "@/api/fetchPatterns";
import fetchPatternCategories from "@/api/fetchPatternCategories";
import PatternChooser from "../components/PatternChooser/PatternChooser.vue";
export default {
  name: "Home",

  components: { PatternColors, PatternCanvas, PatternChooser },
  data: () => ({
    fetchedPatterns: [],
    activePatternCategories: [],
    patternCategories: [],
    activePattern: undefined,
    patternColor: "#000",
    backgroundColor: "#fff",
    page: 1,
    isLoading: false,
    showTooltip: false,
    tooltipText: "",
    totalPages: 0,
  }),
  computed: {
    activePatternData() {
      return (
        this.fetchedPatterns.find((item) => item.id === this.activePattern) ||
        {}
      );
    },
  },
  async created() {
    await this.fetchPatterns();
    await this.fetchPatternCategories();
    this.activePattern = this.fetchedPatterns[0]?.id;
    this.changeColor()
  },
  methods: {
    changeColor() {
      this.fetchedPatterns.forEach((pattern) => {
        pattern.content = pattern.defaultContent.replace(
          /#[a-f0-9A-F]{3,6}/gm,
          (val) => {
            const whites = ["#fff", "#ffffff", "#FFF", "#FFFFFF"];
            if (whites.includes(val)) {
              return this.backgroundColor;
            } else {
              return this.patternColor;
            }
          }
        );
      });
    },
    async fetchPatternCategories() {
      const { data } = await fetchPatternCategories();
      this.patternCategories = data;
    },
    async fetchPatternsData(items) {
      const fetchers = items.map(async (pattern) => {
        const content = await fetch(pattern.url).then((r) => r.text());
        return {
          ...pattern,
          content,
          defaultContent: content,
        };
      });
      const data = await Promise.all(fetchers);
      this.fetchedPatterns = data;
    },
    async fetchPatterns() {
      const {
        data: { items, meta },
      } = await fetchPatterns({
        page: this.page,
        categories: this.activePatternCategories,
      });

      this.totalPages = meta.totalPages;

      this.isLoading = true;
      await this.fetchPatternsData(items);
      this.isLoading = false;
    },
  },
  watch: {
    async activePatternCategories() {
      this.activePattern = undefined;
      await this.fetchPatterns();
      this.changeColor();
    },
    async page() {
      this.activePattern = undefined;
      await this.fetchPatterns();
      this.changeColor();
    },
    patternColor() {
      this.changeColor();
    },
    backgroundColor() {
      this.changeColor();
    },
  },
};
</script>
