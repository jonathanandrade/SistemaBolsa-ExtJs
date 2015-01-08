Ext.define('SistemaBolsa.controller.Empresa', {
	extend: 'Ext.app.Controller',

	models: [
		'SistemaBolsa.model.Empresa'
	],

	stores: [
		'SistemaBolsa.store.Empresas'
	],

	views: [
		'SistemaBolsa.view.empresa.GridEmpresa'
	],

	init: function(application){
		this.control({
			"gridempresa": {
                render: this.onWindowRender //,
                //itemdblclick : this.onEditClick
            },
			"gridempresa toolbar button#add": {
				click : this.onAddClick
			},
			"gridempresa toolbar button#delete": {
				click : this.onDeleteClick
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		console.log('Window Render');
		//gridempresa.getStore.load();		
	},

	onAddClick: function(btn, e, e0pts) {
		console.log('Adicionar...');
	},

	onDeleteClick: function(btn, e, e0pts) {
		console.log('Deletar...');
	}

});