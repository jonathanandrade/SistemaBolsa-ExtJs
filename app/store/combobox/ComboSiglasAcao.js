Ext.define('SistemaBolsa.store.combobox.ComboSiglasAcao', {
	extend: 'Ext.data.Store',

	fields: ['sigla'],

   //pageSize: 10, // PAGINAGINA MAXIMA
	
	proxy: {
		type: 'ajax',
		url: 'php/combobox/listaSiglasAcao.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: false

});