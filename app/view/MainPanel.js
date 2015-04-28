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
			}, {
				menuDisabled: true,
				sortable: false,
				xtype: 'actioncolumn',
				text: 'Comprar',
				itemId: 'comprar',
				width: 75,
				items: [{
					iconCls: 'icon-add',
					tooltip: 'Comprar Ação',
					handler: function(grid, rowIndex, colIndex) {
						//console.log('Função removida');
						var win = Ext.create('SistemaBolsa.view.movimentos.FormComprasHome'); // Cria a janela
						win.setTitle('Compra de Ações'); // Seta o título
						var grid = Ext.ComponentQuery.query('mainpanel grid')[0]; // Recebe a referencia do grid
						var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada						
						var form = win.down('form'); // Pega a referencia do form
						form.loadRecord(rec); // Carrega os dados no form
					}
				}]
			}, {
				menuDisabled: true,
				sortable: false,
				xtype: 'actioncolumn',
				itemId: 'vender',
				text: 'Vender',
				width: 70,
				items: [{
					iconCls: 'icon-delete',
					tooltip: 'Vender Ação',
					handler: function(grid, rowIndex, colIndex) {
						
						var grid = Ext.ComponentQuery.query('mainpanel grid')[0]; // Recebe a referencia do grid
						var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada
						//var dadosAtivo = Ext.encode(rec.data.Codigo);
						//console.log(dadosAtivo);

						var win = Ext.create('SistemaBolsa.view.movimentos.GridVendasHome'); // Cria a janela
						win.setTitle('Venda de Ações'); // Seta o título
						
						var gridVendasHome = Ext.ComponentQuery.query('gridvendashome grid')[0];
						var store = gridVendasHome.getStore();
						console.log(store);
						store.load({
							params: {
								movimento: rec.data.Codigo // Ação selecionada
							}
						});						

						/*
						Ext.Ajax.request({
							url: 'php/movimento/listaMovimentoHome.php',
							method: 'POST',
							success: function(conn, response, options, eOpts) {},
							params: {
								'movimento': dadosAtivo
							}
						});
						*/

						//var grid = Ext.ComponentQuery.query('mainpanel')[0]; // Recebe a referencia do grid
						//var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada
						//var form = win.down('form'); // Pega a referencia do form
						//form.loadRecord(rec); // Carrega os dados no form
					}
				}]
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
		return '<span style="color:green;">' + val + ' %' + '</span>';
	} else if (val < '0.00') {
		return '<span style="color:red;">' + val + ' %' + '</span>';
	}
	return val;
}

function real(val) {
	return '<span>' + 'R$ ' + val + '</span>';
}