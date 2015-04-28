Ext.define('SistemaBolsa.view.movimentos.FormVendaAcao', {
	extend: 'Ext.window.Window',
	alias: 'widget.formvendaacao',

	height: 200,
	width: 450,

	layout: 'fit',
	iconCls: 'icon-exl-mov',
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
				xtype: 'textfield',
                fieldLabel: 'Ativo',
                emptyText: 'Siglas',
                id: 'sigla',
                name: 'sigla',
                editable: false,
                readOnly : true
			},
			{
				xtype: 'numberfield',
				decimalPrecision: 2,
				name: 'valorUnitario',
				fieldLabel: 'Vlr. Unit',
				allowBlank: false,
				msgTarget: 'side',
				readOnly : true
			},			
			{
				xtype: 'numberfield',
				name: 'quantidade',
				fieldLabel: 'Quantidade',
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