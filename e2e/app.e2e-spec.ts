import { Estudocaso3Page } from './app.po';

describe('estudocaso3 App', function() {
  let page: Estudocaso3Page;

  beforeEach(() => {
    page = new Estudocaso3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
