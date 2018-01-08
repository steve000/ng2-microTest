import { browser, by, element } from 'protractor'; /* 量角器 底层是 WebDriverJS */

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
