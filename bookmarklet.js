javascript: (function () {
  window.open("https://www.starcar.de/specials/kostenlos-mieten/", "_self")
  let e = document.getElementsByClassName('togglelist-truck')[1].getElementsByClassName('togglelist-content-item');
  let arr = [];
  for (let i = 0; i < e.length; i++) {
    arr.push(e[i].getElementsByClassName('uppercase'));
  };
  arr.map( e => {
    let from = e[0].innerText.replace(/\s/g, '');
    let to = e[1].innerText.replace(/\s/g, '');
    let link = e[1].innerHTML.match(/.*href="+(.*)+".*/)[1];
    console.log('from: %s, to: %s \nlink: %s', from, to, link);
  });
  return arr;
})()


