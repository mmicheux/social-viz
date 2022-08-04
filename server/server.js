const express = require('express');
var request = require('request');


const app = express();
const port = 5001;

app.use(express.json());

app.post("/", (req, res) => {
  const { body: { hashtag } } = req;
  const hasHashtag = hashtag.length > 2;
  console.log(hasHashtag, hashtag);
  const protocol = req.protocol;
  const host = req.hostname;

  const url = `${protocol}://${host}:${port}`;
  const fullUrl = hasHashtag ? url + hashtag : url;

  request(fullUrl, (err, response, body) => {
    res.json(body)
  })
})

app.get("/", (req, res) => {
  res.json({
    "hashtag": "home",
    "tweets": [
      { "id": 1, "title": "Molly's Tweet" },
      { "id": 2, "title": "Amy's Tweet" },
      { "id": 3, "title": "Caitlyn's Tweet" }]
  });
});

app.get('/kitten', (req, res) => {
  res.json({
    "hashtag": 'kitten',
    "tweets": [
      { "id": 1, "title": "kittens are sweet" },
      { "id": 2, "title": "tiny little baby cat" },
      { "id": 3, "title": "cuuuuutieeeeeee" }]
  });
})

app.get('/puppy', (req, res) => {
  res.json({
    "hashtag": 'puppy',
    "tweets": [
      { "id": 1, "title": "big ole paws" },
      { "id": 2, "title": "puppy energy" },
      { "id": 3, "title": "yay pups!" }]
  });
})

app.listen(port, () => { console.log('server started on port: ', port) })