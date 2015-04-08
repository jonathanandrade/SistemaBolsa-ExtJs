Ext.define('SistemaBolsa.store.graficos.GraficoLinhas', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.graficos.GraficoLinha',

	//pageSize: 30,

	proxy: {
		type: 'ajax',

		url: 'php/xml/gerarGrafico.php',

		reader: {
			type: 'json',
			root: 'grafico'
		}
	},

	autoLoad: true

});