import Ember from 'ember';

export default Ember.Route.extend({
  userService: Ember.inject.service(),
  isLoggedIn: Ember.computed.readOnly("userService.isLoggedIn"),

  beforeModel() {
    if (this.get('isLoggedIn')) {
      this.transitionTo('home');
    }
  },
});
