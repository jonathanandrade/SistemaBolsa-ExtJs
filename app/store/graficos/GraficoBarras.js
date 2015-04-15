Ext.define('SistemaBolsa.store.graficos.GraficoBarras', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.graficos.GraficoBarra',

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