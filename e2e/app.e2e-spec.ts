import { CemcnjPage } from './app.po';

describe('cemcnj App', function() {
  let page: CemcnjPage;

  beforeEach(() => {
    page = new CemcnjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
