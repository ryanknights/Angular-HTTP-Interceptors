import { AngularHTTPInterceptorsPage } from './app.po';

describe('angular-http-interceptors App', () => {
  let page: AngularHTTPInterceptorsPage;

  beforeEach(() => {
    page = new AngularHTTPInterceptorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
