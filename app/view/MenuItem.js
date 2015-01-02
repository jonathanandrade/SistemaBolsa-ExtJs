Ext.define('SistemaBolsa.view.MenuItem', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.menuitem',

	border: 0,
	autoScroll: true,
	rootVisible: true,

	initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }
});