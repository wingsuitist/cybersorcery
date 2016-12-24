import { browser, element, by } from 'protractor';

export class CybersorceryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('csy-root h1')).getText();
  }
}
