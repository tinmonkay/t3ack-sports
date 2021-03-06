module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  // eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("./src/rhythm/");
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
