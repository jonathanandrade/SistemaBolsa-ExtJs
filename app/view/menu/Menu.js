Ext.define('SistemaBolsa.view.menu.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menuwest',

    height: 432,
    width: 251,
    collapseDirection: 'left',
    layout: {
        type: 'accordion'
    },
    iconCls: 'icon-menu',
    title: 'Menu',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});