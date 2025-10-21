const fetch = require("node-fetch");

async function testAPI() {
  try {
    console.log("Testing API endpoints...");

    // Test GET /api/posts
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("GET /api/posts status:", response.status);
    const data = await response.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("API test error:", error);
  }
}

testAPI();
