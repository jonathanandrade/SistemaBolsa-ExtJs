Ext.define('SistemaBolsa.store.MovimentosHome', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Movimento',

	pageSize: 20,

	proxy: {
		type: 'ajax',

		url: 'php/movimento/listaMovimentoHome.php',

		reader: {
			type: 'json',
			root: 'movimento'
		}
	},

	autoLoad: false
});