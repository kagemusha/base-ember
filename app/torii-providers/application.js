import Ember from 'ember';
import { emberAjaxRequest } from 'base-ember/util/ajax-request';
import config from 'base-ember/config/environment';

const LOGIN_URL = `${config.APP.SERVER}/users/sign_in`;

export default Ember.Object.extend({

  open: function(credentials) {
    return emberAjaxRequest("POST", LOGIN_URL, credentials);
  }
});
