let policy = {
    userAgent: "*",
}

if (process.env.environment !== "production") {
    policy.disallow = "/";
}

module.exports = {
    siteUrl: process.env.URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            policy
        ],
    },
    outDir: './out',
};