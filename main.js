// API Assignment

// 1. Fetch data and cosole log the fetched data.
// It gave a respone Object which we cant really use

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err, "ERROR"));

// 2. Fetch the same data, but this time, return the reponse
// object in JSON and cosole log the fetched data.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err, "ERROR"));

// 3 Map through the fetched data and console log only the title
//  and add the key "TITLE"

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let incomingData = data.map((dataPool) => {
      console.log("Title: ", dataPool.title);
    });
  })
  .catch((err) => console.log(err, "ERROR"));

// 4. To updata the data ,we use our options object,
// while applying the POST method and then stingify to convert
// to JSON object, Finally console.log the updated list

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  body: JSON.stringify({
    body: "aquaman",
    id: 100,
    title: "All i want is you",
    userId: 197,
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err, "ERROR"));
