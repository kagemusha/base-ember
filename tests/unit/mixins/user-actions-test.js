import Ember from 'ember';
import UserActionsMixin from '../../../mixins/user-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | user actions');

// Replace this with your real tests.
test('it works', function(assert) {
  const UserActionsObject = Ember.Object.extend(UserActionsMixin);
  const subject = UserActionsObject.create();
  assert.ok(subject);
});
