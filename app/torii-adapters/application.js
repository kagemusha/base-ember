import Ember from 'ember';
import config from 'base-ember/config/environment';
const CURRENT_USER_URL = `${config.APP.SERVER}/users/me`;
const LOGOUT_URL = `${config.APP.SERVER}/users/sign_out`;

export default Ember.Object.extend({
  userService: Ember.inject.service(),
  currentUser: Ember.computed.alias("userService.currentUser"),

  pushUserToStore(userData) {
    let store = this.get('store');
    store.pushPayload('user', userData);
    // if this is json-api will be userData.data.id - may want to make this adapter aware
    let userId = userData.user.id;
    const user = store.peekRecord('user', userId);
    this.set('currentUser', user);
    return user;
  },
  open(response) {
    const user = this.pushUserToStore(response);
    window.localStorage.setItem('authenticationToken', user.get('authenticationToken'));
    return Ember.RSVP.Promise.resolve({ currentUser: user });
  },
  fetch() {
    const self = this;
    return new Ember.RSVP.Promise( (resolve, reject)=> {
      let authenticationToken = window.localStorage.getItem('authenticationToken');
      if (!authenticationToken) {
        reject("No authenticationToken present");
      }

      const success = (response)=> {
        Ember.run(()=> {
          const user = self.pushUserToStore(response);
          window.localStorage.setItem('authenticationToken', user.get('authenticationToken'));
          resolve({ currentUser: user });
        });
      };

      const error = (jqxhr, status, error)=> {
        Ember.run(()=> {
          reject(error);
        });
      };

      Ember.$.ajax({
        type: 'GET',
        url: CURRENT_USER_URL,
        beforeSend: (xhr)=> {
          xhr.setRequestHeader('Authorization', `Bearer ${authenticationToken}`);
        },
        success,
        error,
        dataType: 'json'
      });
    });
  },
  unloadRecords() {
    // unload any user data when logout
    // const store = this.get('store');
  },
  close() {
    return new Ember.RSVP.Promise((resolve, reject)=> {
      let authenticationToken = window.localStorage.getItem('authenticationToken');

      let success = ()=> {
        const store = this.get('store');
        this.unloadRecords();
        store.unloadRecord(this.get('currentUser'));
        this.set('currentUser', null);
        Ember.run(()=> {
          window.localStorage.removeItem('authenticationToken');
          resolve();
        });
      };

      let error = (jqxhr, status, error)=> {
        Ember.run(()=> {
          reject(error);
        });
      };

      Ember.$.ajax({
        type: "DELETE",
        url: LOGOUT_URL,
        beforeSend: (xhr)=> {
          xhr.setRequestHeader('Authorization', `Bearer ${authenticationToken}`);
        },
        success,
        error,
        dataType: 'text'
      });
    });
  }

});
