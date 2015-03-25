Ext.define('SistemaBolsa.view.MainPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

	activeTab: 0,

	items: [{
		xtype: 'panel',
		closable: false,
		autoScroll: true,
		iconCls: 'icon-home',
		title: 'Home',
		bodyStyle: {
			background: '#eee',
			padding: '5px'
		},
		items: [{
			xtype: 'grid',
			store: 'SistemaBolsa.store.Cotacoes',
			autoShow: true,

			columns: [{
				text: 'Codigo',
				//width: 35,
				dataIndex: 'Codigo'
			}, {
				text: 'Nome',
				width: 170,
				flex: 1,
				dataIndex: 'Nome'
			}, {
				text: 'Medio',
				width: 170,
				dataIndex: 'Medio'
			}, {
				text: 'Ultimo',
				width: 170,
				dataIndex: 'Ultimo'
			}, {
				text: 'Oscilacao',
				width: 170,
				dataIndex: 'Oscilacao'
			}]
		}]
	}]
});