import Ember from 'ember';

export default Ember.Route.extend({
  userService: Ember.inject.service(),
  email: null,
  password: null,
  passwordConfirmation: null,
  actions: {
    accessDenied: function() {
      this.transitionTo('login');
    },
  }
});
