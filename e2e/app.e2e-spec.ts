import { AngularTravelListPage } from './app.po';

describe('angular-travel-list App', () => {
  let page: AngularTravelListPage;

  beforeEach(() => {
    page = new AngularTravelListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
