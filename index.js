const express = require("express");
const app = express();
app.get("/", async (req, res) => {
  res.status(200).send("Xin chào bạn");
});
// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Hello from Node.js application");
  console.log("Learn Docker CI/CD for Node.js Application");
  console.log("Press CTRL+C to stop server");
});
