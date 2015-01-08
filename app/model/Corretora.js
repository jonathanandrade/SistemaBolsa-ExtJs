Ext.define('SistemaBolsa.model.Corretora', {
	extend: 'Ext.data.Model',

	idProperty: 'idcorretora',

	fields: ['idcorretora', 'descricao', 'cnpj', 'razao-social', 'endereco', 'numero', 'complemento', 
	         'bairro', 'cidade', 'estado', 'cep', 'nome-fantasia', 'tipo']

});