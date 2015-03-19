Ext.define('SistemaBolsa.controller.Movimento', {
	extend: 'Ext.app.Controller',

	models: [
		'SistemaBolsa.model.Movimento'
	],

	stores: [
		'SistemaBolsa.store.Movimentos'
	],

	requires: [
        'SistemaBolsa.ux.notification.Notification'
    ],

	views: [
		'SistemaBolsa.view.movimentos.GridCompras',
		'SistemaBolsa.view.movimentos.GridCompras'
	],

	init: function(application){
		this.control({
			"gridcompras": {
                render: this.onWindowRender,
                itemdblclick : this.onEditClick
            },
			"gridcompras toolbar button#add": {
				click : this.onAddClick
			},
			"gridcompras toolbar button#delete": {
				click : this.onDeleteClick
			},
			"gridvendas toolbar button#vender": {
				click : this.onVenderClick
			},
			"gridvendas": {
                render: this.onWindowRender
            },
			"formcompras button#cancel": {
				click: this.onCancelClick
			},
			"formcompras button#save": {
				click: this.onSaveClick
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		grid.getStore().load();
	},

	onAddClick: function(btn, e, e0pts) {
		var win = Ext.create('SistemaBolsa.view.movimentos.FormCompras');
		win.setTitle('Compra de Ações');		
	},

	onDeleteClick: function(btn, e, e0pts) {
		//console.log('Deletar...');
		var grid    = btn.up('gridcompras'),
		    records = grid.getSelectionModel().getSelection();

		//console.log(records);

		if(records.length === 0) {
			Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
		} else {
			Ext.Msg.show({
				title: 'Confirmação',
				msg: 'Deseja realmente excluir o registro ?',
				buttons: Ext.Msg.YESNO,
				icon: Ext.MessageBox.WARNING,
				scope: this,				
				fn: function(btn, ev) {
					if(btn == 'yes') {
						var store = grid.getStore();
						store.remove(records);  // Remove do grid
						store.sync(); 			// Remove do banco

						Ext.create('widget.uxNotification', {
				            position: 't',
				            cls: 'ux-notification-light',
				            closable: false,
				            title: 'Informação',
				            iconCls: 'ux-notification-icon-information',
				            html: 'Ação excluída com sucesso.',
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
		var win = Ext.create('SistemaBolsa.view.movimentos.FormCompras'); // Cria o formulario
		win.setTitle('Editar Ação - ' + record.get('descricao')); 		  // Seta o titulo da janela
		var form = win.down('form'); 								   	  // Pega a referencia do formulario
		form.loadRecord(record);	    							   	  // Carrega os dados do item seleciona com o duplo clique
	},

	onCancelClick: function(btn, e, e0pts) {
		var win = btn.up('window');  // Pegar a referencia da janela
		var form = win.down('form'); // Pegar a referencia do form
		form.getForm().reset();		 // Reseta todos os campos
		win.close();				 // Fecha a janela
	},

	onSaveClick: function(btn, e, e0pts) {
		var win    = btn.up('window'),
		    form   = win.down('form'),
		    values = form.getValues(),
			record = form.getRecord(),
		 	grid   = Ext.ComponentQuery.query('gridcompras')[0],
		 	store  = grid.getStore();

		if (form.getForm().isValid()) {

			if(record) {
				// Editando empresa
				//console.log(record);
				record.set(values);
				//console.log(record);			
			} else {
				// Cadastro			
				var novoMovimento = Ext.create('SistemaBolsa.model.Movimento', {
					sigla: values.sigla,
					quantidade: values.quantidade,
					valorUnitario: values.valorUnitario,
					media: ((values.quantidade * values.valorUnitario) / values.quantidade),
					tipo: 'C' // Tipo de Movimento Compra
				});
				
				//console.log(novoMovimento);
				store.add(novoMovimento);
			}

			
			store.sync(); // Atualiza o banco de dados		
			grid.getStore().load(); // Atualiza o grid
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
	},

	onVenderClick: function(btn, e, e0pts) {
		console.log('Vendeu...');
	}

});