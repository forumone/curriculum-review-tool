import 'mock-local-storage';

import C from "../../js/business.logic/constants";
import ls, { CHECK_FREQUENCY } from '../../crtoolLocalStorage';

const testToken = 'abcd';
const consoleError = console.error;

beforeEach(() => {
  ls.locationSearch = '';
  global.localStorage.clear();
  ls.localStorage = global.localStorage;
  ls.pushState = jest.fn();
  ls.setHref = jest.fn();
  ls.getHref = () => 'http://example.com/page';
  console.error = jest.fn();
});

afterAll(() => {
  console.error = consoleError;
});

it('removeItem() throws error if used before init', async () => {
  expect(ls.removeItem).toThrow('Use before init');
});

it('removeItem() removes an item given its key', async () => {
  ls.localStorage.setItem('curriculumReviewId', testToken);
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db',
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  expect(ls.getItem('value')).toBe('db');
  ls.removeItem('value');
  expect(ls.getItem('value')).toBeNull();
});

it('removeItem() remove non-existent item', async () => {
  ls.localStorage.setItem('curriculumReviewId', testToken);
  const dbReview = {
    id: testToken,
    last_updated: 'something',
    ls_modified_time: new Date().toISOString(),
    value: 'db',
  };
  ls.fetchReviewFromServer = async () => dbReview;

  await ls.init();
  expect(ls.getItem('value2')).toBeNull();
  ls.removeItem('value2');
  expect(ls.getItem('value2')).toBeNull();
});