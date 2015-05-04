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
		'SistemaBolsa.view.movimentos.GridVendas'
	],

	init: function(application) {
		this.control({
			"gridcompras": {
				render: this.onWindowRender,
				itemdblclick: this.onEditClick
			},
			"gridcompras toolbar button#add": {
				click: this.onAddClick
			},
			"gridcompras toolbar button#delete": {
				click: this.onDeleteClick
			},
			"gridvendas": {
				render: this.onWindowRender
			},
			"formcompras": {
				render: this.onWindowRenderCombo
			},
			"formcompras button#cancel": {
				click: this.onCancelClick
			},
			"formcompras button#save": {
				click: this.onSaveClick
			},
			"gridcompras checkcolumn#exibir": {
				checkchange: this.onCheckboxChanged
			},
			"formvendas button#cancel": {
				click: this.onCancelClickFormVendas
			},
			"formvendas button#save": {
				click: this.onSaveClickFormVendas
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		grid.getStore().load();
	},

	onWindowRenderCombo: function(grid, e0pts) {
		var combo = Ext.ComponentQuery.query('formcompras form combobox#sigla')[0];
		var store = combo.getStore();
		store.load();
	},

	onAddClick: function(btn, e, e0pts) {
		var win = Ext.create('SistemaBolsa.view.movimentos.FormCompras');
		win.setTitle('Compra de Ações');
	},

	onDeleteClick: function(btn, e, e0pts) {
		//console.log('Deletar...');
		var grid = btn.up('gridcompras'),
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

	onCheckboxChanged: function(column, rowIndex, checked) {
		console.log('Checkbox changed');
		//grid column information
		console.log(column);
		//grid row number
		console.log(rowIndex);
		//the checkbox value
		console.log(checked);
		var grid = Ext.ComponentQuery.query('gridcompras')[0];
		var rec = grid.getStore().getAt(rowIndex);

		console.log(rec.data.sigla);
	},

	/*&--------------------------------------------- COMPRAS ---------------------------------------------&*/

	onEditClick: function(formempresa, record, item, index, e, eOpts) {
		//console.log('Editar...');
		var win = Ext.create('SistemaBolsa.view.movimentos.FormCompras'); // Cria o formulario
		win.setTitle('Editar Ação - ' + record.get('descricao')); // Seta o titulo da janela
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
			grid = Ext.ComponentQuery.query('gridcompras')[0],
			store = grid.getStore();

		if (form.getForm().isValid()) {

			if (record) {
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
					tipo: 'C', // Tipo de Movimento Compra
					total: (values.quantidade * values.valorUnitario)
				});

				store.add(novoMovimento);
			}


			store.sync(); // Atualiza o banco de dados		

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

		grid.getStore().reload(); // Atualiza o grid
	},

	/*&------------------------------------------- FIM COMPRAS -------------------------------------------&*/

	/*&--------------------------------------------- VENDAS ---------------------------------------------&*/
	onCancelClickFormVendas: function(btn, e, e0pts) {
		var win = btn.up('window');
		var form = win.down('form');
		form.getForm().reset();
		win.close();
	},

	onSaveClickFormVendas: function(btn, e, e0pts) {

		var win = btn.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			record = form.getRecord(),
			grid = Ext.ComponentQuery.query('gridvendas')[0],
			store = grid.getStore();

		Ext.Ajax.request({
			url: 'php/movimento/listaCarteira.php',
			method: 'POST',
			params: {
				'acao': values.sigla
			},
			success: function(conn, response, options, eOpts) {
				var result = Ext.JSON.decode(conn.responseText, true);

				var cotacaoAtual = parseFloat(result.carteira[0].cotacao);
				var mediaAtual = parseFloat(result.carteira[0].mediaAtual);

				if (mediaAtual > cotacaoAtual) {
					// PERDENDO DINHEIRO                    
					var prejuizo = (mediaAtual - cotacaoAtual);

					Ext.Msg.show({
						title: 'Confirmação',
						msg: 'NO MOMENTO VOCÊ ESTÁ PERDENDO DINHEIRO ! <br><br> Ação: ' + values.sigla + '<br> Sua média: R$ ' + mediaAtual + '<br> Cotação Atual: R$ ' + cotacaoAtual + '<br> Prejuízo de R$ ' + prejuizo.toFixed(2) + ' por ação. <br><br>Deseja prosseguir ?',
						buttons: Ext.Msg.YESNO,
						icon: Ext.MessageBox.WARNING,
						scope: this,
						fn: function(btn, ev) {
							if (btn == 'yes') {

								// se a quantidade a ser vendida for maior do que possui
								if (values.quantidade > parseInt(record.data.quantidade)) {

									//console.log('Não pode vender mais do que tem');
									Ext.create('widget.uxNotification', {
										position: 't',
										cls: 'ux-notification-light',
										closable: false,
										title: 'Erro',
										iconCls: 'ux-notification-icon-exclamation',
										html: 'Não pode vender mais do que possui.',
										autoDestroyDelay: 2500,
										slideInDelay: 600,
										slideDownDelay: 600,
										//slideInAnimation: 'bounceOut',
										//slideDownAnimation: 'easeIn'
									}).show();

									// se a quantidade for menor do que possui
								} else if (values.quantidade < parseInt(record.data.quantidade)) {

									//console.log('chama vende porque é menor');
									var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
										idmovimento: values.idmovimento,
										sigla: values.sigla,
										dataCompra: record.data.dataCompra,
										quantidade: values.quantidade, // Quantidade para a venda
										valorUnitario: values.valorUnitario
									});

									var dadosVenda = Ext.encode(movVenda.data);
									//console.log(dadosVenda);

									Ext.Ajax.request({
										url: 'php/movimento/vendeMovimento.php',
										method: 'POST',
										success: function(conn, response, options, eOpts) {},
										params: {
											'movimento': dadosVenda
										}
									});

								} else if (values.quantidade = parseInt(record.data.quantidade)) {

									var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
										idmovimento: values.idmovimento,
										sigla: values.sigla,
										quantidade: values.quantidade, // Quantidade para a venda
										dataCompra: record.data.dataCompra,
										valorUnitario: values.valorUnitario
									});

									var dadosVenda = Ext.encode(movVenda.data);

									Ext.Ajax.request({
										url: 'php/movimento/deletaMovimento.php',
										method: 'POST',
										success: function(conn, response, options, eOpts) {},
										params: {
											'movimento': dadosVenda
										}
									});
								}

								win.close(); // Fecha a janela
								grid.getStore().reload(); // Atualiza o grid

							} else {
								win.close(); // Fecha a janela
							};

						}
					});

				} else {
					// GANHANDO DINHEIRO
					var lucro = (cotacaoAtual - mediaAtual);

					Ext.Msg.show({
						title: 'Confirmação',
						msg: 'NO MOMENTO VOCÊ ESTÁ GANHANDO DINHEIRO ! <br><br> Ação: ' + values.sigla + '<br> Sua média: R$ ' + mediaAtual + '<br> Cotação Atual: R$ ' + cotacaoAtual + '<br> Lucro de R$ ' + lucro.toFixed(2) + ' por ação. <br><br>Deseja prosseguir ?',
						buttons: Ext.Msg.YESNO,
						icon: 'icon-right',
						scope: this,
						fn: function(btn, ev) {
							if (btn == 'yes') {

								// se a quantidade a ser vendida for maior do que possui
								if (values.quantidade > parseInt(record.data.quantidade)) {

									//console.log('Não pode vender mais do que tem');
									Ext.create('widget.uxNotification', {
										position: 't',
										cls: 'ux-notification-light',
										closable: false,
										title: 'Erro',
										iconCls: 'ux-notification-icon-exclamation',
										html: 'Não pode vender mais do que possui.',
										autoDestroyDelay: 2500,
										slideInDelay: 600,
										slideDownDelay: 600,
										//slideInAnimation: 'bounceOut',
										//slideDownAnimation: 'easeIn'
									}).show();

									// se a quantidade for menor do que possui
								} else if (values.quantidade < parseInt(record.data.quantidade)) {

									//console.log('chama vende porque é menor');
									var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
										idmovimento: values.idmovimento,
										sigla: values.sigla,
										dataCompra: record.data.dataCompra,
										quantidade: values.quantidade, // Quantidade para a venda
										valorUnitario: values.valorUnitario
									});

									var dadosVenda = Ext.encode(movVenda.data);
									
									Ext.Ajax.request({
										url: 'php/movimento/vendeMovimento.php',
										method: 'POST',
										success: function(conn, response, options, eOpts) {},
										params: {
											'movimento': dadosVenda
										}
									});

								} else if (values.quantidade = parseInt(record.data.quantidade)) {

									var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
										idmovimento: values.idmovimento,
										sigla: values.sigla,
										dataCompra: record.data.dataCompra,
										quantidade: values.quantidade, // Quantidade para a venda
										valorUnitario: values.valorUnitario
									});

									var dadosVenda = Ext.encode(movVenda.data);									

									Ext.Ajax.request({
										url: 'php/movimento/deletaMovimento.php',
										method: 'POST',
										success: function(conn, response, options, eOpts) {},
										params: {
											'movimento': dadosVenda
										}
									});
								}

								win.close(); // Fecha a janela

								grid.getStore().reload(); // Atualiza o grid

							} else {
								form.getForm().reset(); // Reseta todos os campos
								win.close(); // Fecha a janela
							};
						}
					});
				};
			}
		})
	}

	/*&------------------------------------------- FIM VENDAS -------------------------------------------&*/

});