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
			"gridcorretora toolbar button#add": {
				click : this.onAddClick
			},
			"gridcorretora toolbar button#delete": {
				click : this.onDeleteClick
			}
		})
	},

	//onGridRender: function(grid, e0pts) {
	//	grid.getStore.load();
	//},

	onAddClick: function(btn, e, e0pts) {
		console.log('Adicionar...');
	},

	onDeleteClick: function(btn, e, e0pts) {
		console.log('Deletar...');
	}
});