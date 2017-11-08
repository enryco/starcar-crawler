
describe('Chimp Mocha', function () {
  describe('Page title', function () {
    it('should be set by the Meteor method', function () {
      browser.url('https://www.starcar.de/specials/kostenlos-mieten/');
      expect(browser.getTitle()).to.equal('Kostenlos mieten');
    });
  });

  describe('Get Page Content', function () {
    it('should get a list of stations @watch', function () {
      let results = browser.execute(function () {
        let e = document.getElementsByClassName('togglelist-truck')[1].getElementsByClassName('togglelist-content-item');
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
        return results;
      })

      results.value.map( e => console.log(e))

    });
  });
});
