var util = require('util');
var randomString = require('randomstring');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var chrome = require('selenium-webdriver/chrome');

var driver = new chrome.Driver();

var form = {
  firstName: util.format('%s', randomString.generate(10)),
  lastName: util.format('%s', randomString.generate(10)),
  email: util.format('%s@%s.com', randomString.generate(10), randomString.generate(10)),
  phone: 88888888,
  type: 'Estudiante',
  challenge: 'Hacking Challenge'
}

driver.get('http://www.fcys.uni.edu.ni/mgsi/index.php/pre-inscripcion');
// inputs
driver.findElement(By.id('ff_elem46')).sendKeys(form.firstName);
driver.findElement(By.id('ff_elem49')).sendKeys(form.lastName);
driver.findElement(By.id('ff_elem51')).sendKeys(form.email);
driver.findElement(By.id('ff_elem53')).sendKeys(form.phone);
driver.findElement(By.id('ff_elem63')).sendKeys(form.type);
driver.findElement(By.id('ff_elem54')).sendKeys(form.challenge);
// button
driver.findElement(By.id('ff_elem47')).click();
driver.wait(until.titleIs('Inscripción HackFest'), 1000);
driver.quit();
