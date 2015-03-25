Ext.define('SistemaBolsa.controller.Empresa', {
	extend: 'Ext.app.Controller',

	models: [
		'SistemaBolsa.model.Empresa'
	],

	stores: [
		'SistemaBolsa.store.Empresas'
	],

	requires: [
		'SistemaBolsa.ux.notification.Notification'
	],

	views: [
		'SistemaBolsa.view.empresa.GridEmpresa'
	],

	init: function(application) {
		this.control({
			"gridempresa": {
				render: this.onWindowRender,
				itemdblclick: this.onEditClick
			},
			"gridempresa toolbar button#add": {
				click: this.onAddClick
			},
			"gridempresa toolbar button#delete": {
				click: this.onDeleteClick
			},
			"formempresa button#cancel": {
				click: this.onCancelClick
			},
			"formempresa button#save": {
				click: this.onSaveClick
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		//console.log('Window Render');
		grid.getStore().load();
	},

	onAddClick: function(btn, e, e0pts) {
		//console.log('Adicionar...');
		var win = Ext.create('SistemaBolsa.view.empresa.FormEmpresa');
		win.setTitle('Cadastrar Empresa');
	},

	onDeleteClick: function(btn, e, e0pts) {
		//console.log('Deletar...');
		var grid = btn.up('gridempresa'),
			records = grid.getSelectionModel().getSelection();

		//console.log(records);

		if (records.length === 0) {
			Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
		} else {
			Ext.Msg.show({
				title: 'Confirmação',
				msg: 'Deseja realmente excluir o registro ?',
				buttons: Ext.Msg.YESNO,
				icon: Ext.MessageBox.WARNING,
				scope: this,
				fn: function(btn, ev) {
					if (btn == 'yes') {
						var store = grid.getStore();
						store.remove(records); // Remove do grid
						store.sync(); // Remove do banco

						Ext.create('widget.uxNotification', {
							position: 't',
							cls: 'ux-notification-light',
							closable: false,
							title: 'Informação',
							iconCls: 'ux-notification-icon-information',
							html: 'Empresa excluída com sucesso.',
							autoDestroyDelay: 1800,
							slideInDelay: 600,
							slideDownDelay: 600,
							//slideInAnimation: 'bounceOut',
							//slideDownAnimation: 'easeIn'
						}).show();
					}
				}
			});
		}
	},

	onEditClick: function(formempresa, record, item, index, e, eOpts) {
		//console.log('Editar...');
		var win = Ext.create('SistemaBolsa.view.empresa.FormEmpresa'); // Cria o formulario
		win.setTitle('Editar Empresa - ' + record.get('descricao')); // Seta o titulo da janela
		var form = win.down('form'); // Pega a referencia do formulario
		form.loadRecord(record); // Carrega os dados do item seleciona com o duplo clique
	},

	onCancelClick: function(btn, e, e0pts) {
		var win = btn.up('window'); // Pegar a referencia da janela
		var form = win.down('form'); // Pegar a referencia do form
		form.getForm().reset(); // Reseta todos os campos
		win.close(); // Fecha a janela
	},

	onSaveClick: function(btn, e, e0pts) {
		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			record = form.getRecord(),
			grid = Ext.ComponentQuery.query('gridempresa')[0],
			store = grid.getStore();

		if (form.getForm().isValid()) {

			if (record) {
				// Editando empresa
				//console.log(record);
				record.set(values);
				//console.log(record);			
			} else {
				// Cadastro
				var novaEmpresa = Ext.create('SistemaBolsa.model.Empresa', {
					descricao: values.descricao,
					sigla: values.sigla,
					atividade: values.atividade
				});

				//console.log(novaEmpresa);			
				store.add(novaEmpresa);
			}

			store.sync(); // Atualiza o banco de dados
			//grid.getStore().load(); // Atualiza o grid

			win.close(); // Fecha o formulario

			Ext.create('widget.uxNotification', {
				position: 't',
				cls: 'ux-notification-light',
				closable: false,
				title: 'Informação',
				iconCls: 'ux-notification-icon-information',
				html: 'Salvo com sucesso.',
				autoDestroyDelay: 1800,
				slideInDelay: 600,
				slideDownDelay: 600,
				//slideInAnimation: 'bounceOut',
				//slideDownAnimation: 'easeIn'
			}).show();

		} else { // <<< Fim formPanel.getForm().isValid()

			Ext.create('widget.uxNotification', {
				position: 't',
				cls: 'ux-notification-light',
				closable: false,
				title: 'Informação',
				iconCls: 'ux-notification-icon-information',
				html: 'Preencha todos os campos obrigatórios.',
				autoDestroyDelay: 1800,
				slideInDelay: 600,
				slideDownDelay: 600,
				//slideInAnimation: 'bounceOut',
				//slideDownAnimation: 'easeIn'
			}).show();

		}
	}

});