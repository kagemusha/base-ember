import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  isLoggedIn: Ember.computed.notEmpty('currentUser'),
  login(email, password) {
    let session = this.get('session');
    this.set('loggingIn', true);
    return session.open('application', {
      user: {
        email,
        password,
      }
    });
  },
  logout() {
    if (this.get('loggingOut')) {
      return;
    }
    this.set('loggingOut', true);

    this.get('session').close('application').then(()=> {
      // refine this on future so only leave if on authed routes.
      // (could be studying public set
      this.transitionToRoute('/');
    }).catch(()=> {
      Ember.Logger.log('Logout failed');
    }).finally(()=> {
      this.set('loggingOut', false);
    });
  },
  register(email, password, passwordConfirmation) {
    const session = this.get('session');
    return session.open('registration', {
      user: {
        email,
        password,
        passwordConfirmation,
      }
    });
  }
});
