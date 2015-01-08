Ext.define('SistemaBolsa.store.Corretoras', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Corretora',

	pageSize: 20,

	proxy: {
		type: 'ajax',

		api: {
			create: 'php/corretora/criaCorretora.php',
			read: 'php/corretora/listaCorretora.php',
			update: 'php/corretora/atualizaCorretora.php',
			destroy: 'php/corretora/deletaCorretora.php'
		},

		reader: {
			type: 'json',
			root: 'corretora'
		},

		writer: {
			type: 'json',
			root: 'corretora',
			encode: 'json'
		}
	},

	autoLoad: false
});