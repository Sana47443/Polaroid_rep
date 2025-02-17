
// The export statement makes these settings available to other files in 11ty

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("site/image");
  eleventyConfig.addPassthroughCopy("styles");

  return {
      dir: {
          input: "site",  
          output: "_site" 
      }
  };
};
