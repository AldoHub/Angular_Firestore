import { AngularFirestorePage } from './app.po';

describe('angular-firestore App', () => {
  let page: AngularFirestorePage;

  beforeEach(() => {
    page = new AngularFirestorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
