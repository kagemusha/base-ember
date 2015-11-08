import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'base-ember/tests/helpers/start-app';
import page from './pages/login';
import { setAuthToken } from '../helpers/util';

module('Acceptance | login', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
    setAuthToken(false);
  }
});

test('successful login', (assert)=> {
  page.visit();
  page.fillInEmail('test@test.com');
  page.fillInPassword('tester99');
  page.clickButton('Login');
  andThen(()=> {
    assert.equal(currentURL(), '/home');
  });
});

test('successful logout', (assert)=> {
  setAuthToken();
  page.visit();
  andThen(()=> {
    assert.equal(currentURL(), '/home');
  });
  page.clickButton('Logout');
  andThen(()=> {
    assert.equal(currentURL(), '/login');
  });
});
