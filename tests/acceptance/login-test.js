import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'base-ember/tests/helpers/start-app';
import page from './pages/login';

module('Acceptance | login', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('successful login', (assert)=> {
  page.visit();
  page.fillInEmail('test@test.com');
  page.fillInPassword('tester99');
  page.clickButton('Login');
  andThen(()=> {
    debugger
    assert.equal(currentURL(), '/home');
  });
});


