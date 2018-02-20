const https = require("https");
const url ="https://pokeapi.co/api/v2/pokemon/?limit=5";

let callback = res => {
    res.setEncoding("utf8");
    let body = [];

    res.on("data", data => body.push(data));
    res.on("end", () => console.log(JSON.parse(body)));
}

https.get(url, callback);