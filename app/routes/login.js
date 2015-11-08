import Ember from 'ember';
import Unauthenticated from '../mixins/unauthenticated';

export default Ember.Route.extend(Unauthenticated, {
  beforeModel() {
    this.transitionIfAuthenticated();
  },
});
