Ext.define('SistemaBolsa.view.MyViewport', {

    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'SistemaBolsa.view.Header',
        'SistemaBolsa.view.MainPanel' // ALIAS DO MENU ANTIGO
        //'SistemaBolsa.view.menu.Accordion'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'appheader',
                region: 'north'
            }, {
                xtype: 'mainpanel',
                region: 'center',
                itemId: 'mainPanel'
            }, {
                xtype: 'container',
                region: 'south',
                heigth: 30,
                //style: 'border-top: 1px solid #4C72A4;',
                style: 'border-top: 1px solid #000000;',
                html: '<div id="titleHeader"><center><span style="fontsize:10px;">Sistema Bolsa - Jonathan de Andrade - TCC</span></center></div>'
            }, {
                xtype: 'menuwest',
                width: 220,
                collapsible: true,
                region: 'west' //,
                    //style: 'background-color: #AFD7FF;'
            }]
        });

        me.callParent(arguments);
    }
});