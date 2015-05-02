Ext.define('SistemaBolsa.model.Movimento', {
	extend: 'Ext.data.Model',

	idProperty: 'idmovimento',

	fields: ['idmovimento', 'idempresa', 'sigla', {name: 'quantidade', type: 'int'}, {name: 'valorUnitario', type: 'float'}, 'media', 'tipo', 'login', 'valorVenda', 'dataCompra', 'dataVenda', {name: 'total', type: 'float'}, 'tipo', 'cotacao']

});