Ext.define('EastWind.view.form.NetworkConfigForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.networkconfigform',
  controller: 'networkconfigform',
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
  listeners: {
    afterrender: 'onRender'
  },

  initComponent: function () {
    if (this.showSave) {
      this.buttons = [{
        text: 'Clear',
        listeners: {
          click: 'clearForm'
        }
      }, {
        text: 'Save',
        listeners: {
          click: 'saveNetworkConfig'
        }
      }];
    }
    this.callParent();

    if (this.showEdit) {
      this.add({
        xtype: 'button',
        text: 'Edit',
        itemdId: 'editForm',
        listeners: {
          click: 'editForm'
        }
      });
    }
  }
});