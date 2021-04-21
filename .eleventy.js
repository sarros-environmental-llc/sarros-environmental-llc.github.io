module.exports = function (eleventyConfig) {
    const yaml = require("js-yaml");

    // https://www.11ty.dev/docs/data-custom/
    module.exports = eleventyConfig => {
        eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
    };
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy('src/bootstrap/')
    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
}
