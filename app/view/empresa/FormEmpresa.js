Ext.define('SistemaBolsa.view.empresa.FormEmpresa', {
	extend: 'Ext.window.Window',
	alias: 'widget.formempresa',

	height: 200,
	width: 450,

	layout: 'fit',
	iconCls: 'icon-empresa',
	title: 'Editar/Cadastrar de Empresa',
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
				name: 'idempresa',
				fieldLabel: 'ID',
				hidden: true
			},
			{
				xtype: 'textfield',
				name: 'descricao',
				fieldLabel: 'Descrição'
			},
			{
				xtype: 'textfield',
				name: 'sigla',
				fieldLabel: 'Sigla'
			},
			{
				xtype: 'textfield',
				name: 'atividade',
				fieldLabel: 'Atividade'
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
				iconCls: 'icon-save'
			}
		]
	}]
});