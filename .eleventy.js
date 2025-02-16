
// The export statement makes these settings available to other files in 11ty

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("site/images");
  eleventyConfig.addPassthroughCopy("styles");

  return {
      dir: {
          input: "site",  // ✅ Points Eleventy to the "site" folder
          output: "_site" // ✅ Where Eleventy will generate the final files
      }
  };
};
