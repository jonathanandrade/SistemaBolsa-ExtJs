Ext.define('SistemaBolsa.controller.Carteira', {
	extend: 'Ext.app.Controller',

	models: [
		'SistemaBolsa.model.Carteira'
	],

	stores: [
		'SistemaBolsa.store.Carteiras'
	],

	views: [
		'SistemaBolsa.view.movimentos.GridCarteira'
	],

	init: function(application) {
		this.control({
			"gridcarteira": {
				render: this.onWindowRender				
			}
		})
	},

	onWindowRender: function(grid, e0pts) {
		//console.log('Window Render');
		grid.getStore().load();
	}

});