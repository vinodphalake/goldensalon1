// FLOURISHH - The Beauty Destination
// Minimal Node.js static file server for serverbyt.in Node.js hosting
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.static(PUBLIC_DIR));

// Single-page app fallback: serve index.html for any unmatched route
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`FLOURISHH website running on port ${PORT}`);
});
