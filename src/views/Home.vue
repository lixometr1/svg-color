<template>
  <div>
    <v-container>
      <pattern-color
        :patternColor.sync="patternColor"
        :backgroundColor.sync="backgroundColor"
      />
      <v-divider class="my-10" />
      <v-row>
        <v-col sm="6" cols="12">
          <v-card
            rounded
            elevation="5"
            class="pattern-chooser"
            :loading="isLoading"
          >
            <v-card-title>Choose pattern: </v-card-title>
            <v-card-text>
              <pattern-chooser :items="imagePatterns" v-model="activePattern" />
              <v-pagination
                class="mt-4"
                v-model="page"
                :length="totalPages"
                circle
              ></v-pagination>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="6" cols="12" class="position-relative">
          <!-- <pattern-preview :value="activePatternData" v-if="activePattern" /> -->
          <pattern-canvas
            :svg="activePatternData.content"
            v-if="activePattern"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="showTooltip">
      {{ tooltipText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="showTooltip = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import PatternColor from "../components/PatternColor/PatternColor.vue";
import PatternChooser from "../components/PatternChooser/PatternChooser.vue";
import patternsData from "@/helpers/patterns-data";
// import PatternPreview from "../components/PatternPreview/PatternPreview.vue";
import PatternCanvas from "../components/PatternCanvas/PatternCanvas.vue";
// import svgToBase64 from "@/helpers/svg-to-base64";
export default {
  name: "Home",

  components: { PatternColor, PatternChooser, PatternCanvas },
  data: () => ({
    patterns: patternsData,
    fetchedPatterns: [],
    activePattern: undefined,
    patternColor: "#000",
    backgroundColor: "#fff",
    page: 1,
    perPage: 15,
    isLoading: false,
    showTooltip: false,
    tooltipText: "",
  }),
  computed: {
    totalPages() {
      return Math.ceil(this.patterns.length / this.perPage);
    },
    activePatternData() {
      return (
        this.fetchedPatterns.find((item) => item.id === this.activePattern) ||
        {}
      );
    },
    pagedPatterns() {
      const start = this.perPage * (this.page - 1);
      return this.patterns.slice(
        start,
        this.perPage * (this.page - 1) + this.perPage
      );
    },
    imagePatterns() {
      return this.fetchedPatterns.map((pattern) => {
        // const url = svgToBase64(pattern.content);
        return pattern;
        // url,
      });
    },
  },
  created() {
    this.fetchPatterns();
  },
  methods: {
    changeColor() {
      this.fetchedPatterns.forEach((pattern) => {
        pattern.content = pattern.defaultContent
          .replace(/#000000/gm, this.patternColor)
          .replace(/#ffffff/gm, this.backgroundColor);
      });
    },

    async fetchPatterns() {
      const startTime = new Date().getTime();
      this.isLoading = true;
      const fetchers = this.pagedPatterns.map(async (pattern) => {
        const content = await fetch(pattern.url).then((r) => r.text());
        return {
          ...pattern,
          content,
          defaultContent: content,
        };
      });
      const data = await Promise.all(fetchers);
      this.fetchedPatterns = data;
      this.isLoading = false;
      const endTime = new Date().getTime();
      this.tooltipText =
        "Images were loaded in " + (endTime - startTime) + "ms";
      this.showTooltip = true;
    },
  },
  watch: {
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
