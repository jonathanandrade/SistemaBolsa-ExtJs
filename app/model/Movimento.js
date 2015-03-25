Ext.define('SistemaBolsa.model.Movimento', {
	extend: 'Ext.data.Model',

	idProperty: 'idmovimento',

	fields: ['idmovimento', 'idempresa', 'sigla', 'quantidade', 'valorUnitario', 'media', 'tipo', 'login', 'valorVenda', 'dataCompra', 'dataVenda']

});