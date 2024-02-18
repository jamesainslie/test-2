it('Logs in with a valid username and password', function (browser) {
    browser.navigateTo('https://practicetestautomation.com/practice-test-login/')
    browser.element.find('h2').getText().assert.equals('Test login')
    browser.waitForElementVisible('#username', 20000)
    browser.element.find('#username').sendKeys('student')
    browser.waitForElementVisible('#password', 20000)
    browser.element.find('#password').sendKeys('Password123')
    browser.waitForElementVisible('#submit', 20000)
    browser.element.find('#submit').click()
    browser.waitForElementVisible('#loop-container > div > article > div.post-header > h1')
    browser.waitForElementVisible("#loop-container > div > article > div.post-content > div > div > div > a")
    ;
    browser.end()
  })
