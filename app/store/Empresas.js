Ext.define('SistemaBolsa.store.Empresas', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Empresa',

	//pageSize: 20,

	proxy: {
		type: 'ajax',

		api: {
			create: 'php/empresa/criaEmpresa.php',
			read: 'php/empresa/listaEmpresa.php',
			update: 'php/empresa/atualizaEmpresa.php',
			destroy: 'php/empresa/deletaEmpresa.php'
		},

		reader: {
			type: 'json',
			root: 'empresa'
		},

		writer: {
			type: 'json',
			root: 'empresa',
			encode: 'json'
		}
	},

	autoLoad: false
});