import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'base-ember/tests/helpers/start-app';
import page from './pages/login';

module('Acceptance | login', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
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

