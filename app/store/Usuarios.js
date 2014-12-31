Ext.define('SistemaBolsa.store.Usuarios', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Usuario',

	proxy: {
		type: 'ajax',

		api: {
			create: 'php/usuario/criaUsuario.php',
			read: 'php/usuario/listaUsuario.php',
			update: 'php/usuario/atualizaUsuario.php',
			destroy: 'php/usuario/deletaUsuario.php'
		},

		reader: {
			type: 'json',
			root: 'usuario'
		},

		writer: {
			type: 'json',
			root: 'usuario',
			encode: 'json'
		}
	},

	autoLoad: false
});