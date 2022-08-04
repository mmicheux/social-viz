const express = require('express');
const app = express();
const port = 5001;

app.get("/api", (req, res) => {
  res.json({
    "tweets": [
      { "id": 1, "title": "Molly's Tweet" },
      { "id": 2, "title": "Amy's Tweet" },
      { "id": 3, "title": "Caitlyn's Tweet" }]
  });

});

app.listen(port, () => { console.log('server started on port: ', port) })