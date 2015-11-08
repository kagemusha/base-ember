import Ember from 'ember';
import Unauthenticated from '../mixins/unauthenticated';

export default Ember.Route.extend(Unauthenticated, {
  userService: Ember.inject.service(),
  isLoggedIn: Ember.computed.readOnly("userService.isLoggedIn"),

  beforeModel() {
    this.transitionIfAuthenticated();
  },
});
