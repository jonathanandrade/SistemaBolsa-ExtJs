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
				text: 'Código',
				//width: 35,
				dataIndex: 'Codigo'
			}, {
				text: 'Nome',
				width: 170,
				flex: 1,
				dataIndex: 'Nome'
			}, {
				text: 'Médio',
				width: 170,
				dataIndex: 'Medio',
				renderer: real
			}, {
				text: 'Último',
				width: 170,
				dataIndex: 'Ultimo',
				renderer: real
			}, {
				text: 'Oscilação',
				width: 170,
				dataIndex: 'Oscilacao',
				renderer: change
			}]
		}],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [{
				xtype: 'button',
				text: 'Atualizar',
				itemId: 'atualizar',
				iconCls: 'icon-atualizar'
			}]
		}]
	}]


});

//funcao colorir
function change(val) {
	if (val > '0.00') {
		return '<span style="color:green;">' + 'R$ ' + val + '</span>';
	} else if (val < '0.00') {
		return '<span style="color:red;">' + 'R$ ' + val + '</span>';
	}
	return val;
}

function real(val) {
	return '<span>' + 'R$ ' + val + '</span>';
}