import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';
import { OverviewPage } from './overview.po';

export class SettingsPage extends AppPage {

  linkToFeeds = element(by.id('feedLink'));
  serverUrlInput = element(by.id('apiurl'));
  usernameInput = element(by.id('username'));
  passwordInput = element(by.id('password'));
  testButton = element(by.id('testButton'));

  goBackToFeeds(): OverviewPage {
    this.linkToFeeds.click();
    return new OverviewPage();
  }

  doTestSettings(url: string, user: string, pw: string) {
    this.serverUrlInput.click();
    this.serverUrlInput.sendKeys(url);
    this.usernameInput.click();
    this.usernameInput.sendKeys(user);
    this.passwordInput.click();
    this.passwordInput.sendKeys(pw);
    this.testButton.click();
  }

}
