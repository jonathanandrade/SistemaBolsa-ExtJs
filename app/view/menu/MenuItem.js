Ext.define('SistemaBolsa.view.menu.MenuItem', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menuitem',

    border: 0,
    autoScroll: true,
    title: '',
    rootVisible: false,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});