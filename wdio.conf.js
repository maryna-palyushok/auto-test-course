require("ts-node").register({ files: true });

const wdioConfig = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    path: 'wb/hub',
    //path: '/',
    
    specs: [
       // './test/specs/**/*.ts'
        // './test/specs/**/registration.ts'
        // './test/specs/**/homework1.ts'
        // './test/specs/**/mocha_hooks.ts'
        // './test/specs/**/homework2.ts'
        './test/specs/**/checkout.ts'

    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
       
        maxInstances: 5,
        //
        browserName: 'chrome',
        
    }],
    
   
    logLevel: 'info',
   
    baseUrl: 'http://demo.litecart.net',
    
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    
    services: ['chromedriver'],
   
    framework: 'mocha',
   
    reporters: ['spec'],
 
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    beforeSession: function (config, capabilities) {
        if (process.env.DEBUG == "1") {
            // Giving debugger some time to connect...
            return new Promise(resolve => setTimeout(resolve, 10000));
        }
    },
    
}

   
if (process.env.DEBUG == "1") {
    console.log("###### Running in debug mode! ######");
    wdioConfig.maxInstances = 1
    wdioConfig['execArgv'] = ["--inspect=127.0.0.1:5858"];
    wdioConfig.mochaOpts.timeout = 360000;
}

exports.config = wdioConfig;

