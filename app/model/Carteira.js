Ext.define('SistemaBolsa.model.Carteira', {
	extend: 'Ext.data.Model',

	idProperty: 'idmovsaldo',

	fields: ['idmovsaldo', 'siglaCons', 'qtdTotal', 'mediaAtual', 'cotacao']

});