import { CybersorceryPage } from './app.po';

describe('cybersorcery App', function() {
  let page: CybersorceryPage;

  beforeEach(() => {
    page = new CybersorceryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('csy works!');
  });
});
