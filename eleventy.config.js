export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy(".nojekyll");
    
    return {
        pathPrefix: "/remix/",
        dir: {
            output: "docs"
        }
    };
};