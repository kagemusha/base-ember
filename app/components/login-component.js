import Ember from 'ember';

export default Ember.Component.extend({
  userService: Ember.inject.service(),
  email: 't@t.com',
  password: 'tester99',

  actions: {
    login() {
      let email = this.get('email');
      let password = this.get('password');
      this.get('userService').login(email, password).then(()=> {
        this.set('loggingIn', false);
        this.set('loginError', '');
      }).catch((/*error*/)=> {
        this.set('loginError', "Login failed. Please try again");
      });
    },
    logout() {
      this.get('userService').logout();
    }
  }
});
