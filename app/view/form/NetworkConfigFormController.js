Ext.define('EastWind.view.form.NetworkConfigFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.networkconfigform',

  saveNetworkConfig: function () {
    this.getView().updateRecord();
    localStorage.setItem('network-config', Ext.encode(this.getView().getRecord().data));
  },
  onRender: function () {
    var localStorageRecord = localStorage.getItem('network-config'),
        record = this.getView().getRecord();

    if (localStorageRecord && !record) {
      record = Ext.create('EastWind.model.NetworkConfig', Ext.decode(localStorageRecord));
    } else if (!localStorageRecord && !record) {
      record = Ext.create('EastWind.model.NetworkConfig');
    }
    this.getView().loadRecord(record);
  }
});