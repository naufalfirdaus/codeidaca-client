const config = {
    domain: "http://localhost:3001/codeid/api",
    localdomain: "http://localhost:3001/codeid/api/bysql",
    urlImage: "http://localhost:3001/codeid/api/talentpage/images",
    domainAuth: "http://localhost:3001/codeid/auth/",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};

export default config;
