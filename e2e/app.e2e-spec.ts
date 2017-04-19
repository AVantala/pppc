import { PppcPage } from './app.po';

describe('pppc App', () => {
  let page: PppcPage;

  beforeEach(() => {
    page = new PppcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
