module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["tests"],
  
    webdriver: {
      start_process: true,
      port: 9515,
      server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    },
  
    test_settings: {
      default: {
        launch_url: 'https://nightwatchjs.org',
        desiredCapabilities : {
          browserName : 'chrome'
        }
      }
    }
  };
  