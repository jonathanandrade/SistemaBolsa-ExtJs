Ext.define('SistemaBolsa.model.Corretora', {
	extend: 'Ext.data.Model',

	idProperty: 'idcorretora',

	fields: ['idcorretora', 'descricao', 'cnpj', 'razaoSocial', 'endereco', 'numero', 'complemento', 
	         'bairro', 'cidade', 'estado', 'cep', 'nomeFantasia', 'tipo', 'contato', 'telefone']

});