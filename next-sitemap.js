let policy = {
    userAgent: "*"
};

if (process.env.NODE_ENV !== "production") {
    polict.disallow = "/";
}

module.exports = {
    siteUrl: "https://peer-anfon.co.il",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [policy]
    },
    outDir: "./public"
}