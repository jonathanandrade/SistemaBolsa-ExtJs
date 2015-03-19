Ext.define('SistemaBolsa.store.Movimentos', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Movimento',

	pageSize: 20,

	proxy: {
		type: 'ajax',

		api: {
			create: 'php/movimento/criaMovimento.php',
			read: 'php/movimento/listaMovimento.php',
			update: 'php/movimento/atualizaMovimento.php',
			destroy: 'php/movimento/deletaMovimento.php'
		},

		reader: {
			type: 'json',
			root: 'movimento'
		},

		writer: {
			type: 'json',
			root: 'movimento',
			encode: 'json'
		}
	},

	autoLoad: false
});