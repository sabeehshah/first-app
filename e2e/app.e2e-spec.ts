import { PlayersPage } from './app.po';

describe('players App', () => {
  let page: PlayersPage;

  beforeEach(() => {
    page = new PlayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
