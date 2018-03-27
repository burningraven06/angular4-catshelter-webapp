import { AngularCatAppPage } from './app.po';

describe('angular-cat-app App', () => {
  let page: AngularCatAppPage;

  beforeEach(() => {
    page = new AngularCatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
