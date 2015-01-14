Ext.define('SistemaBolsa.controller.Corretora', {
	extend: 'Ext.app.Controller',

	models: [
		'SistemaBolsa.model.Corretora'
	],

	stores: [
		'SistemaBolsa.store.Corretoras'
	],

	views: [
		'SistemaBolsa.view.corretora.GridCorretora'
	],

	init: function(application){
		this.control({
			"gridcorretora grid": {
                render: this.onWindowRender,
                itemdblclick : this.onEditClick
            },
			"gridcorretora toolbar button#add": {
				click : this.onAddClick
			},
			"gridcorretora toolbar button#delete": {
				click : this.onDeleteClick
			},
			"formcorretora button#save": {
				click: this.onSaveClick
			},
			"formcorretora button#cancel": {
				click: this.onCancelClick
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		grid.getStore().load();
	},

	onAddClick: function(btn, e, e0pts) {
		//console.log('Adicionar...');
		var win = Ext.create('SistemaBolsa.view.corretora.FormCorretora');
		win.setTitle('Cadastrar Corretora');
	},

	onDeleteClick: function(btn, e, e0pts) {
		//console.log('Deletar...');
		var grid    = btn.up('gridcorretora grid'),
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
					}
				}
			});
		}
	},

	onEditClick: function(formempresa, record, item, index, e, eOpts) {
		//console.log('Editar...');
		var win = Ext.create('SistemaBolsa.view.corretora.FormCorretora'); // Cria o formulario
		win.setTitle('Editar Corretora - ' + record.get('razaoSocial'));   // Seta o titulo da janela
		var form = win.down('form'); 								   // Pega a referencia do formulario
		form.loadRecord(record);	    							   // Carrega os dados do item seleciona com o duplo clique
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
		 	grid   = Ext.ComponentQuery.query('gridcorretora grid')[0],
		 	store  = grid.getStore();

		if(record) {
			// Editando corretora
			//console.log(record);
			record.set(values);
			//console.log(record);
		} else {
			// Cadastro
			var novaCorretora = Ext.create('SistemaBolsa.model.Corretora', {
				razaoSocial: values.razaoSocial,
				nomeFantasia: values.nomeFantasia,
				cnpj: values.cnpj,
				endereco: values.endereco,
				bairro: values.bairro,
				cidade: values.cidade,
				estado: values.estado,
				cep: values.cep,
				complemento: values.complemento,
				numero: values.numero,
				contato: values.contato,
				telefone: values.telefone
			})
			
			//console.log(novaCorretora);
			store.add(novaCorretora);			
		}

		store.sync(); // Atualiza o banco de dados
		
		win.close(); // Fecha o formulario
		Ext.MessageBox.alert('Informação','Salvo com Sucesso !');
		//grid.getStore().load(); // Atualiza o grid
	}
});