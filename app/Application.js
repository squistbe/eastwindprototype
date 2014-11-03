/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('EastWind.Application', {
  extend: 'Ext.app.Application',
  name: 'EastWind',
  requires: [
    'EastWind.view.form.LoginForm',
    'EastWind.view.form.LoginFormController',
    'EastWind.view.main.Main',
    'EastWind.view.form.NetworkConfigForm',
    'EastWind.view.form.NetworkConfigFormController',
    'EastWind.model.NetworkConfig'
  ],

  stores: [
    // TODO: add global / shared stores here
  ],

  launch: function () {
    Ext.create('EastWind.view.form.LoginForm', {
      renderTo: Ext.getBody(),
      width: 350,
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin: '-150px 0 0 -175px'
      }
    });
  }
});
