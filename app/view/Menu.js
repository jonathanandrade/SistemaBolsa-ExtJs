Ext.define('SistemaBolsa.view.Menu', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.menu',

	width: 300,
	layout: 'accordion',

	collapsible: false,
	hideCollapsible: false,
	iconCls: 'icon-chart_organisation',
	title: 'Menu',

	initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }
		
});