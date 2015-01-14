Ext.define('SistemaBolsa.view.corretora.FormCorretora', {
	extend: 'Ext.window.Window',
	alias: 'widget.formcorretora',

	height: 370,
	width: 650,

	layout: 'fit',
	iconCls: 'icon-corretora',
	title: 'Editar/Cadastrar Corretora',
	autoShow: true,
	modal: true, // Deixa como tela principal, impedindo alterações na parte de baixo

	items: [{
		xtype: 'form',
		bodyPadding: 10,
		defaults: {
			anchor: '100%'
		},

		items: [{
			xtype: 'fieldset',
			title: 'Informações da Corretora',
			defaultType: 'textfield',
			layout: 'anchor',
			defaults: {
				anchor: '100%'
			},
			items: [{
				xtype: 'fieldcontainer',
				fieldLabel: 'Razão Social',
				layout: 'hbox',
				combineErrors: true,
				defaultType: 'textfield',
				defaults: {
					hideLabel: 'true'
				},
				items: [{
					name: 'razaoSocial',
					fieldLabel: 'Razão Social',
					flex: 2,
					emptyText: 'descrição',
					allowBlank: false
				}]
			}, {
				xtype: 'textfield',
				name: 'nomeFantasia',
				fieldLabel: 'Nome Fantasia'
			}, {
				xtype: 'container',
				layout: 'hbox',
				defaultType: 'textfield',
				margin: '0 0 5 0',
				items: [{
					fieldLabel: 'CNPJ',
					name: 'cpf',
					//vtype: 'email',
					//flex: 1,
					allowBlank: false,
					emptyText: 'xx.xxx.xxx/xxxx-xx',
					//maskRe: /[\d\.\d\-\d\/]/,
					//regex: /^\d{2}.\d{3}.\d{3}.\d{3}\/.\d{4}-\d{2}$/,
					//regexText: 'Deve ser neste formato xxx.xxx.xxx-xx'
					//maxLength : 11
				}]
			}]
		}, {
			xtype: 'fieldset',
			title: 'Endereço',
			defaultType: 'textfield',
			layout: 'anchor',
			defaults: {
				anchor: '100%'
			},
			items: [{
				labelWidth: 90,
				fieldLabel: 'Endereço',
				name: 'endereco',
				billingFieldName: 'endereco'
			}, {
				labelWidth: 90,
				fieldLabel: 'Bairro',
				name: 'bairro',
				billingFieldName: 'bairro'
			}, {
				xtype: 'container',
				layout: 'hbox',
				margin: '0 0 5 0',
				items: [{
					labelWidth: 90,
					xtype: 'textfield',
					fieldLabel: 'Cidade',
					name: 'cidade',
					billingFieldName: 'cidade',
					flex: 1
				}, {
					xtype: 'combobox',
					fieldLabel: 'Estado',
					id: 'estado',
					store: 'SistemaBolsa.store.combobox.ComboEstados',
					queryMode: 'local',
					displayField: 'Estado',
					valueField: 'Estado',
					value: 'SC',
					editable: false,
					labelWidth: 60,
					width: 155
				}, {
					xtype: 'textfield',
					fieldLabel: 'Cod. Postal',
					labelWidth: 80,
					name: 'mailingPostalCode',
					billingFieldName: 'billingPostalCode',
					width: 160,
					maxLength: 10,
					enforceMaxLength: true,
					maskRe: /[\d\-]/,
					regex: /^\d{5}(\-\d{3})?$/,
					regexText: 'Deve ser neste formato xxxxx or xxxxx-xxxx'
				}]
			}, {
				xtype: 'container',
				layout: 'hbox',
				margin: '0 0 5 0',
				items: [{
					labelWidth: 90,
					xtype: 'textfield',
					fieldLabel: 'Complemento',
					name: 'complemento',
					billingFieldName: 'complemento',
					flex: 1
				}, {
					labelWidth: 90,
					xtype: 'textfield',
					fieldLabel: 'Número',
					name: 'numero',
					billingFieldName: 'numero'
				}]
			}]
		}, {
			xtype: 'fieldset',
			title: 'Outros',
			defaultType: 'textfield',
			layout: 'anchor',
			defaults: {
				anchor: '100%'
			},
			items: [{
				xtype: 'container',
				layout: 'hbox',
				margin: '0 0 5 0',
				items: [{
					labelWidth: 90,
					xtype: 'textfield',
					fieldLabel: 'Contato',
					name: 'contato',
					billingFieldName: 'contato',
					flex: 1
				}, {
					labelWidth: 90,
					xtype: 'textfield',
					fieldLabel: 'Telefone',
					name: 'telefone',
					billingFieldName: 'telefone',
					flex: 1
				}]
			}]
		}]
	}],

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		layout: {
			type: 'hbox',
			pack: 'end'
		},

		items: [{
			xtype: 'button',
			text: 'Cancelar',
			itemId: 'cancel',
			iconCls: 'icon-cancel'
		}, {
			xtype: 'button',
			text: 'Salvar',
			itemId: 'save',
			iconCls: 'icon-save'
		}]
	}]
});