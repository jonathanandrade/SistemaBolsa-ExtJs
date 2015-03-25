Ext.define('SistemaBolsa.view.movimentos.FormCompras', {
	extend: 'Ext.window.Window',
	alias: 'widget.formcompras',

	height: 200,
	width: 450,

	layout: 'fit',
	iconCls: 'icon-cad-mov',
	title: 'Editar/Cadastrar Ação',
	autoShow: true,
	modal: true,   // Deixa como tela principal, impedindo alterações na parte de baixo

	items: [{
		xtype: 'form',
		bodyPadding: 10,
		defaults: {
			anchor: '100%'
		},

		items: [
			{
				xtype: 'textfield',
				name: 'idmovimento',
				fieldLabel: 'ID',
				hidden: true
			},
			{
				xtype: 'combobox',
                anchor: '70%',
                fieldLabel: 'Ativo',
                emptyText: 'Siglas',
                store: 'SistemaBolsa.store.combobox.ComboSiglasAcao',
                queryMode: 'local',
                id: 'sigla',
                name: 'sigla',
                displayField: 'sigla',
                valueField: 'sigla',
                editable: false,
                allowBlank: false,
                msgTarget: 'side'
			},			
			{
				xtype: 'textfield',
				name: 'quantidade',
				fieldLabel: 'Quantidade',
				allowBlank: false,
				msgTarget: 'side'
			},
			{
				xtype: 'textfield',
				name: 'valorUnitario',
				fieldLabel: 'Vlr. Unit',
				allowBlank: false,
				msgTarget: 'side'
			}
		]
	}],

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		layout: {
			type: 'hbox',
			pack: 'end'
		},

		items: [
			{
				xtype: 'button',
				text: 'Cancelar',
				itemId: 'cancel',
				iconCls: 'icon-cancel'
			},
			{
				xtype: 'button',
				text: 'Salvar',
				itemId: 'save',
				iconCls: 'icon-save',
				formBind: true
			}
		]
	}]
});