Ext.define('SistemaBolsa.store.graficos.GraficoOscilacao', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.graficos.GraficoOscilacao',

	//pageSize: 30,

	proxy: {
		type: 'ajax',

		url: 'php/graficos/gerarGraficoLinha.php',

		reader: {
			type: 'json',
			root: 'grafico'
		}
	},

	autoLoad: false

});