const request = require("supertest");
const app = require("./server");

(async () => {
    try {
        const res = await request(app).get("/");

        if (res.statusCode === 200) {
            console.log("TEST PASSED");
            process.exit(0);
        } else {
            console.log("TEST FAILED");
            process.exit(1);
        }
    } catch (error) {
        console.log("TEST ERROR");
        console.error(error);
        process.exit(1);
    }
})();