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
      ui: 'panel-large',
      title: 'Dashboard',
      bodyPadding: 20,
      layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
      },
      items: [
        {
          xtype: 'container',
          flex: 1,
          layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'networkconfigform',
              defaultType: 'displayfield',
              showSave: false,
              margin: '0 20 20 0',
              frame: true,
              flex: 1,
              title: 'Network Information',
              tools: [
                {
                  type: 'gear'
                }
              ]
            },
            {
              xtype: 'panel',
              title: 'Licensing',
              margin: '0 20 0 0',
              frame: true,
              flex:1,
              bodyPadding: 20,
              html: 'Lorem ipsum dolor sit amet, ante dolor nam ornare tempor, orci netus et, integer enim fringilla a, feugiat et quis id mauris, aenean netus pharetra quibusdam urna aliquam. Sapien scelerisque malesuada magni morbi metus phasellus, praesent minima augue sed et nam, convallis tempus, justo nibh enim arcu ad qui ut.'
            }
          ]
        },
        {
          xtype: 'panel',
          title: 'Statistics',
          bodyPadding: 20,
          flex: 2,
          frame: true,
          collapsible: true,
          layout: 'fit',
          items: [
            {
              xtype: 'chart',
              store: {
                fields: ['name', 'g1', 'g2'],
                data: [
                  {"name": "07:00", "g1": 18.34,"g2": 0.04},
                  {"name": "08:00", "g1": 2.67, "g2": 14.87},
                  {"name": "09:00", "g1": 1.90, "g2": 5.72},
                  {"name": "10:00", "g1": 21.37,"g2": 2.13},
                  {"name": "11:00", "g1": 2.67, "g2": 8.53},
                  {"name": "12:00", "g1": 18.22,"g2": 4.62},
                  {"name": "13:00", "g1": 28.51, "g2": 12.43},
                  {"name": "14:00", "g1": 34.43, "g2": 4.40},
                  {"name": "15:00", "g1": 21.65, "g2": 13.87},
                  {"name": "16:00", "g1": 12.98, "g2": 35.44},
                  {"name": "17:00", "g1": 22.96, "g2": 38.70},
                  {"name": "18:00", "g1": 0.49, "g2": 51.90},
                  {"name": "19:00", "g1": 20.87, "g2": 62.07},
                  {"name": "20:00", "g1": 25.10, "g2": 78.46},
                  {"name": "21:00", "g1": 16.87, "g2": 56.80}
                ]
              },
              interactions: {
                type: 'panzoom'
              },
              legend: {
                docked: 'right'
              },
              axes: [
                {
                  type: 'numeric',
                  position: 'left',
                  grid: true
                },
                {
                  type: 'category',
                  title: 'Time',
                  position: 'bottom'
                }
              ],
              series: [
                {
                  type: 'area',
                  xField: 'name',
                  yField: ['g1', 'g2'],
                  title: ['PKTS', 'FLOWS'],
                  style: {
                    stroke: '#666666',
                    fillOpacity: 0.8
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
