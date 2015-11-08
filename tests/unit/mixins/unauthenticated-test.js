import Ember from 'ember';
import UnauthenticatedMixin from '../../../mixins/unauthenticated';
import { module, test } from 'qunit';

module('Unit | Mixin | unauthenticated');

// Replace this with your real tests.
test('it works', function(assert) {
  const UnauthenticatedObject = Ember.Object.extend(UnauthenticatedMixin);
  const subject = UnauthenticatedObject.create();
  assert.ok(subject);
});
