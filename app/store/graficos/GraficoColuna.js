Ext.define('SistemaBolsa.store.graficos.GraficoColuna', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.graficos.GraficoColuna',

	proxy: {
		type: 'ajax',

		url: 'php/graficos/gerarGraficoColuna.php',

		reader: {
			type: 'json',
			root: 'grafico'
		}
	},

	autoLoad: false

});