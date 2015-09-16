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
    register() {
      let email = this.get('email');
      let pw = this.get('password');
      let pwConfirm = this.get('passwordConfirmation');
      this.get('userService').register(email, pw, pwConfirm);
    }
  }
});
