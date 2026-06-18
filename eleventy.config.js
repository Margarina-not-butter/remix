export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    
    return {
        dir: {
            output: "docs"
        }
    };
};