import { Lab3AngularPage } from './app.po';

describe('lab3-angular App', () => {
  let page: Lab3AngularPage;

  beforeEach(() => {
    page = new Lab3AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
