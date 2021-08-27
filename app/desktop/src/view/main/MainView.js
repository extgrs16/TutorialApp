// Ext.define('TutorialApp.view.main.MainView', {
// 	extend: 'Ext.Container',
// 	xtype: 'mainview',
// 	controller: 'mainviewcontroller',
// 	viewModel: {
// 		type: 'mainviewmodel'
// 	},
//   requires: [
//     'Ext.layout.Fit'
//   ],
// 	layout: 'fit',
// 	items: [
// 		{ xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
// 		{ xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
// 		{ xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
// 		{ xtype: 'centerview', reference: 'centerview' },
// 		{ xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
// 	]
// });

Ext.define('TutorialApp.view.main.MainView', {
    extend: 'Ext.container.Container',

    requires: [
        'TutorialApp.view.main.MainViewController',
        'TutorialApp.view.main.MainViewModel'
    ],

    xtype: 'app-main',

    controller: 'mainviewcontroller',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});