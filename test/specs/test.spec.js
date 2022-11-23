import HomePage from '../pageobjects/home.page';
var fs = require('fs');

//By using Dev Tools Tracking
describe('Segment Validation after Home page is loaded', async () => {
    it('Test Case 1 ', async () => {

        await browser.startTracing()
        // await HomePage.load();
        await browser.url('http://json.org')
        await browser.endTracing()
        
        await fs.writeFile('tracelog.json', JSON.stringify(browser.getTraceLogs()), function(err){
        if(err) throw err;
        })

    });


});
