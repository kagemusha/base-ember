import Ember from 'ember';
import UserActionsMixin from '../../../mixins/user-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | user actions');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserActionsObject = Ember.Object.extend(UserActionsMixin);
  var subject = UserActionsObject.create();
  assert.ok(subject);
});
