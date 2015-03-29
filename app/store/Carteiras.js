Ext.define('SistemaBolsa.store.Carteiras', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Carteira',

	pageSize: 20,

	proxy: {
		type: 'ajax',

		api: {
			//create: 'php/empresa/criaEmpresa.php',
			read: 'php/movimento/listaCarteira.php',
			//update: 'php/empresa/atualizaEmpresa.php',
			//destroy: 'php/empresa/deletaEmpresa.php'
		},

		reader: {
			type: 'json',
			root: 'carteira'
		},

		writer: {
			type: 'json',
			root: 'carteira',
			encode: 'json'
		}
	},

	autoLoad: false
});