const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
    baseUrl: "https://www.peer-anfon-group.co.il",
    pagesDirectory: path.resolve(__dirname, '../pages'),
    targetDirectory: path.resolve(__dirname, '../public'),
    ignoredExtensions: ["js", "css", "png", "jpeg", "xml", "icon", "json", "map"],
    ignoredPaths: [
        "404",
        "index",
        "favicon",
    ],
    extraPaths: [
        "/"
    ]
})