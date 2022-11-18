var browserstack = require('browserstack-local');

exports.config = {
    updateJob: false,
    specs: [
        './test/specs/sign.in.spec.js'
    ],
    exclude: [],

    capabilities: [
        {
            'device': 'iPhone 12',
            'os_version': '14.8',
            'browserName': 'ios',
            'realMobile': 'true'
        },
    ],

    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,

    before: function () {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },

    // Code to start browserstack local before start of test
    onPrepare: function (config, capabilities) {
        console.log("Connecting local");
        return new Promise((resolve, reject) => {
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start({ 'key': exports.config.key }, function (error) {           
          }).then((state) => {
            assert(state.action === 'DONE', 's change state');
          })
          .catch((error) => {
            assert.isNotOk(error,'Promise error');
          });
        });
    },

    // Code to mark the status of test on BrowserStack based on the assertion status
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(passed) {
            browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
        } else {
            browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
        }
    },

    // Code to stop browserstack local after end of test
    onComplete: function (capabilties, specs) {
        return new Promise(function(resolve, reject){
            exports.bs_local.stop(function() {
                console.log("Binary stopped");
                resolve();
            });
        });
    }
}
