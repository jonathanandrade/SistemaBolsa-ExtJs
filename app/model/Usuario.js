Ext.define('SistemaBolsa.model.Usuario', {
	extend: 'Ext.data.Model',
	fields: ['iduser','login','senha','nome','sobrenome','email','cpf','endereco','numero',
			 'complemento','bairro','cidade','estado','cep','celular','telefone','rg','data-nasc','sexo'
			]
});
