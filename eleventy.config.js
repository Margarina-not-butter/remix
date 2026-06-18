export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    
    return {
        pathPrefix: "/remix/",
        dir: {
            output: "docs"
        }
    };
};