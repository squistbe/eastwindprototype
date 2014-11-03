Ext.define('EastWind.view.form.LoginForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.loginform',
  controller: 'loginform',
  frame: true,
  title: 'Login',
  bodyPadding: 20,
  defaults: {
    anchor: '100%',
    allowBlank: false,
    msgTarget: 'under',
    xtype: 'textfield'
  },
  items: [{
    fieldLabel: 'Username',
    itemId: 'username',
    blankText: 'Username is required.'
  }, {
    fieldLabel: 'Password',
    itemId: 'password',
    inputType: 'password',
    blankText: 'Password is required.'
  }],
  buttons: [{
    formbind: true,
    text: 'Login',
    listeners: {
      click: 'doLogin'
    }
  }]
});