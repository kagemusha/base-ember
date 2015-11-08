import Ember from 'ember';

const AUTH_ROUTE = 'home';

export default Ember.Mixin.create({
  userService: Ember.inject.service(),
  actions: {
    login(email, password) {
      this.get('userService').login(email, password).then(()=> {
        this.set('loggingIn', false);
        this.set('loginError', '');
        if (this.isController) {
          this.transitionToRoute(AUTH_ROUTE);
        } else {
          this.transitionTo(AUTH_ROUTE);
        }
      }).catch((/*error*/)=> {
        this.set('loginError', "Login failed. Please try again");
      });
    },
    logout() {
      this.get('userService').logout().then(()=>{
        this.transitionTo('login');
      }).catch(()=> {
        Ember.Logger.log('Logout failed');
      }).finally(()=> {
        this.set('loggingOut', false);
      });
    }
  }
});
