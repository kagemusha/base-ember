import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import page from './pages/index';
// import { setAuthToken } from './helpers';

module('Acceptance | index', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', (assert)=> {
  page.visit();

  andThen(()=> {
    assert.equal(currentPath(), 'index');
  });
});

test('log in correctly', (assert)=> {
  page.visit();

  andThen(()=> {
    assert.equal(currentPath(), 'index');
  });
});

