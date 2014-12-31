Ext.define('SistemaBolsa.view.Viewport', {
    
    extend: 'Ext.container.Viewport',
    
    requires:[
        'Ext.layout.container.Fit',
        'SistemaBolsa.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'        
    }]
});
