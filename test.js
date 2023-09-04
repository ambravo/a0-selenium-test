const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test 1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test 1', async function() {
    await driver.get("https://ui-authfest-feb28-group00.glitch.me/")
    await driver.manage().window().setRect({ width: 1544, height: 1118 })
    let qsLoginBtn = await driver.findElement(By.id("qsLoginBtn"));
    await driver.wait(until.elementIsVisible(qsLoginBtn), 2000);
    await driver.findElement(By.id("qsLoginBtn")).click()

    await driver.findElement(By.id("username")).sendKeys("user01@a0.gg")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("ThisIsMyLongPww123..")
    await driver.findElement(By.css(".cd6a2dc65")).click()

  })
})
