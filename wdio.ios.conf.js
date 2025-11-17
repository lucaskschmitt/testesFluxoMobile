export const config = {
    // runner: 'local',
    // port: 4723,

    user: '<sauce-user>',
    key: '<sauce-key>',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
          
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        login: [
            './test/specs/login.test.js'
        ],
        product: [
            './test/specs/product.test.js'
        ],
        search: [
            './test/specs/search.test.js'
        ]
    },
    maxInstances: 1,
    capabilities: [
        { 
            "platformName": "iOS",
            "appium:deviceName": "iPhone 15",
            "appium:platformVersion": "17.2",
            "appium:automationName": "XCUITest",
            "appium:app": `${process.cwd()}/LojaEBAC-sim.app`
            
            }
            
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // afterSuite: async function () {
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
        await driver.execute('mobile: terminateApp', { bundleId: 'br.com.lojaebac' })
            
    },
    // beforeSuite: async function() {
    beforeTest: async function () {
            let state = await driver.queryAppState("br.com.lojaebac")
        if(state !== 4) {
            await driver.execute('mobile: launchApp', { bundleId: 'br.com.lojaebac' })
            }
        }
}
