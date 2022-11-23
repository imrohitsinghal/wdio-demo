import HomePage from '../pageobjects/home.page';
var fs = require('fs');

// By using mock request

describe('Segment Validation after Home page is loaded', async () => {
    it('Test Case 1 ', async () => {

        var output = await browser.mock('**', {
            method : 'post',
            url : 'https://api.segment.io/v1/p',
            // headers: { 'Request URL': 'https://api.segment.io/v1/p' },
            responseHeaders: {  "content-length" : "21" },
        })
        await HomePage.load();
        await console.log(output.calls)
        fs.writeFile('getCalls1.json', JSON.stringify(output.calls), function(err){
        if(err) throw err;
        })
       

    });


    it.only('Test Case 2 ', async () => {

        var output1 = await browser.mock('**/v1/p', {
            method : 'POST',
            
        })
        await HomePage.load();
        await console.log(output1.calls)
        fs.writeFile('getCalls2.json', JSON.stringify(output1.calls), function(err){
        if(err) throw err;
        })
       

    });



});