Ext.define('SistemaBolsa.view.MainPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

	activeTab: 0,

	items: [
		{
			xtype: 'panel',
			closable: false,
			iconCls: 'icon-home',
			title: 'Home'
		}
	]
});