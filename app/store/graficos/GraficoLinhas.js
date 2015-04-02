Ext.define('SistemaBolsa.store.graficos.GraficoLinhas', {
	extend: 'Ext.data.Store',

	fields: ['hora', 'valor'],

	//pageSize: 30,

	proxy: {
		type: 'ajax',

		url: 'php/xml/teste.php',

		reader: {
			type: 'json',
			root: 'grafico'
		}
	},

	autoLoad: true

});