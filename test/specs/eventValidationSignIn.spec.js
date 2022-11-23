// import $ from 'webdriverio/build/commands/browser/$';
import HomePage from '../pageobjects/home.page'
const assert = require('assert');
const request = require('supertest');


//By using Webdriver io interceptor

describe('Segment Validation after Home page is loaded', async () => {
    it('Test Case 1 ', async () => {

        await HomePage.load();
        await browser.setupInterceptor();
        await browser.maximizeWindow()
        await $("a#app-sign-in").click()
        await browser.pause(2000)
        // await browser.expectRequest('GET', 'https://api.segment.io/v1/p', 900);
     
        // const request = await browser.getRequest('POST', 'https://api.segment.io/v1/p');
        
        const request = await browser.getRequests();
        await console.log(request.length)
        await console.log(request)
        // await console.log(JSON.stringify(request))
        await browser.pause(2000)

    });
    it('Test Case 2 ', async () => {

        await HomePage.load();
        await browser.setupInterceptor();
        await browser.maximizeWindow()
        await $("a#app-sign-in").click()
        await browser.pause(2000)
        // await browser.expectRequest('GET', 'https://api.segment.io/v1/p', 900);
     
        // const request = await browser.getRequest('POST', 'https://api.segment.io/v1/p');
        
        const request = await browser.getRequests();
        await console.log(request.length)
        await console.log(request)
        // await console.log(JSON.stringify(request))
        await browser.pause(2000)

    });

   
});