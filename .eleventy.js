module.exports = function (eleventyConfig) {
    const yaml = require("js-yaml");
    eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy('src/bootstrap/')
    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
}
