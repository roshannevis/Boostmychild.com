import { Boostmychild.ComPage } from './app.po';

describe('boostmychild.com App', () => {
  let page: Boostmychild.ComPage;

  beforeEach(() => {
    page = new Boostmychild.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
