Ext.define('EastWind.view.main.Main', {
  extend: 'Ext.container.Viewport',
  requires: [
    'EastWind.view.main.MainController',
    'EastWind.view.main.MainModel'
  ],

  xtype: 'app-main',

  controller: 'main',
  viewModel: {
    type: 'main'
  },

  layout: {
    type: 'border'
  },

  items: [
    {
      region: 'center',
      xtype: 'panel',
      title: 'East Wind Networks',
      bodyPadding: 20,
      layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
      },
      defaults: {
        tools: [
          {
            type: 'help'
          },
          {
            type: 'gear'
          },
          {
            type: 'toggle'
          }
        ]
      },
      items: [
        {
          xtype: 'networkconfigform',
          defaultType: 'displayfield',
          showSave: false,
          margin: '0 20 0 0',
          frame: true,
          flex: 1,
          title: 'Network Information'
        },
        {
          xtype: 'panel',
          title: 'Statistics',
          bodyPadding: 20,
          html: 'You will see charts, statistics, etc. right here',
          flex: 1,
          frame: true
        }
      ]
    }
  ]
});
