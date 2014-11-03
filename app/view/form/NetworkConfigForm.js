Ext.define('EastWind.view.form.NetworkConfigForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.networkconfigform',
  controller: 'networkconfigform',
  title: 'Network Configuration',
  frame: true,
  bodyPadding: 20,
  defaultType: 'textfield',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 150,
    msgTarget: 'under',
    allowBlank: false,
    anchor: '100%'
  },
  items: [{
    fieldLabel: 'Device Name',
    name: 'deviceName'
  }, {
    fieldLabel: 'Network Address',
    name: 'networkAddress'
  }, {
    fieldLabel: 'IP Address',
    name: 'ipAddress'
  }, {
    fieldLabel: 'Broadcast',
    name: 'broadcast'
  }, {
    fieldLabel: 'Mask',
    name: 'mask'
  }, {
    fieldLabel: 'Gateway',
    name: 'gateway'
  }],
  buttons: [{
    text: 'Clear',
    scale: 'large',
    listeners: {
      click: 'clearForm'
    }
  }, {
    text: 'Save',
    scale: 'large',
    listeners: {
      click: 'saveNetworkConfig'
    }
  }],
  listeners: {
    render: 'onRender'
  }
});