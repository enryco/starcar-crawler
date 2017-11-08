
describe('Chimp Mocha', function () {
  describe('Page title @watch', function () {
    it('should be set by the Meteor method', function () {
      browser.url('https://www.starcar.de/specials/kostenlos-mieten/');
      expect(browser.getTitle()).to.equal('Kostenlos mieten');
    });
  });

  describe('Get Page Content', function () {
    it('should get a list of stations @watch', function () {
      let results = browser.execute(function () {
        const search = 'berlin' // searching for offerings to this destination
        const carType = [
          'togglelist-all',
          'togglelist-car',
          'togglelist-truck'
        ][2] //change number vor cartype
        let e = document
          .getElementsByClassName(carType)[1] // get second result (orderd by destination)
          .getElementsByClassName('togglelist-content-item'); //get items
        let arr = [];
        for (let i = 0; i < e.length; i++) {
          //get DOMs containting city names
          arr.push(e[i].getElementsByClassName('uppercase'));
        };
        let results = []
        arr.map(e => {
          let from = e[0].innerText.replace(/\s/g, '').padEnd(25);
          let to = e[1].innerText.replace(/\s/g, '').padEnd(25);
          let link = e[1].innerHTML.match(/.*href="+(.*)+".*/)[1];
          if (to.toLowerCase().search(search) > -1) return results.push(`\n${from}--> ${to}${link}`)
        });
        return results;
      })

      results.value.map(e => console.log(e))

    });
  });
});
