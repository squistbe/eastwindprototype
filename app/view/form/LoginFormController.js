Ext.define('EastWind.view.form.LoginFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.loginform',

  doLogin: function (button, event) {
    Ext.create('EastWind.view.form.NetworkConfigForm', {
      renderTo: Ext.getBody(),
      width: 500,
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin: '-175px 0 0 -250px'
      }
    });
    this.getView().destroy();
  }
});