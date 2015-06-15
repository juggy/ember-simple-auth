import Ember from 'ember';
import Configuration from './../configuration';

/**
  This mixin is for the controller that handles the
  [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute).
  It provides the `authenticate` action that will authenticate the session with
  the configured authenticator (see
  [`AuthenticationControllerMixin#authenticator`](#SimpleAuth-AuthenticationControllerMixin-authenticator)).

  @class AuthenticationControllerMixin
  @namespace SimpleAuth
  @module simple-auth/mixins/authentication-controller-mixin
  @extends Ember.Mixin
  @deprecated use [`Session#authenticate`](#SimpleAuth-Session-authenticate) instead
  @public
*/
export default Ember.Mixin.create({
  /**
    The authenticator factory to use as it is registered with Ember's
    container, see
    [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register).

    @property authenticator
    @type String
    @default null
    @public
  */
  authenticator: null,

  actions: {
    /**
      This action will authenticate the session with the configured
      authenticator (see
      [`AuthenticationControllerMixin#authenticator`](#SimpleAuth-AuthenticationControllerMixin-authenticator),
      [`Session#authenticate`](#SimpleAuth-Session-authenticate)).

      @method actions.authenticate
      @param {Object} options Any options the authenticator needs to authenticate the session
      @public
    */
    authenticate(options) {
      Ember.deprecate("The AuthenticationControllerMixin is deprecated. Use the session's authenticate method directly instead.");
      let authenticator = this.get('authenticator');
      Ember.assert('AuthenticationControllerMixin/LoginControllerMixin require the authenticator property to be set on the controller!', !Ember.isEmpty(authenticator));
      return this.get(Configuration.base.sessionPropertyName).authenticate(authenticator, options);
    }
  }
});