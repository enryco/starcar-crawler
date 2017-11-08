var request = require("request");
var DOMParser = require('xmldom').DOMParser;


request("https://www.starcar.de/specials/kostenlos-mieten/", function (error, response, body) {
  let parser = new DOMParser()
  parser.^
  let doc = parser.parseFromString(body, "text/xml")

  console.log(doc)

  let e = doc.getElementsByClassName('togglelist-truck')[1].getElementsByClassName('togglelist-content-item');
  let arr = [];
  for (let i = 0; i < e.length; i++) {
    arr.push(e[i].getElementsByClassName('uppercase'));
  };
  let results = arr.map(e => {
    let from = e[0].innerText.replace(/\s/g, '');
    let to = e[1].innerText.replace(/\s/g, '');
    let link = e[1].innerHTML.match(/.*href="+(.*)+".*/)[1];
    return `\nfrom: ${from}, to: ${to}\nlink: ${link}`
    // console.log('from: %s, to: %s \nlink: %s', from, to, link);
  });
  return console.log(results);
});
