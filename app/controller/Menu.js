Ext.define('SistemaBolsa.controller.Menu', {
	extend: 'Ext.app.Controller',

	views: [
		'menu.Accordion',
		'menu.ItemCadastros',
		'SistemaBolsa.view.empresa.GridEmpresa'
	],

	refs: [
		{
			ref: 'mainPanel',
			selector: 'mainPanel'
		}
	],

	init: function(application) {
		this.control({
			"mainmenu itemcadastros button#alterardadosusuario": {
				click: this.onButtonClickAlterarDadosUsuario
			},
			"mainmenu itemcadastros button#cadastrarempresa": {
				click: this.onButtonClickCadastrarEmpresa
			},
			"mainmenu itemcadastros button#cadastrarcorretora": {
				click: this.onButtonClickCadastrarCorretora
			}
		})
	},

	onButtonClickAlterarDadosUsuario: function(button, e, options) {
		//console.log('AlterarDadosUsuario');		
		var win = Ext.create('SistemaBolsa.view.usuario.FormUsuario');
		win.setTitle('Alterar Dados do Usuário');
		var form = win.down('form');
		
		Ext.Ajax.request({
            url: 'php/usuario/listaUsuario.php',
            method: 'GET',
            success: function(conn, response, options, eOpts) {
       		    var result = Ext.JSON.decode(conn.responseText, true);         	   
         	    //console.log(result.usuario[0]);

         	   	var modelUsuario = Ext.create('SistemaBolsa.model.Usuario', {
                	iduser: result.usuario[0].iduser,
                	nome: result.usuario[0].nome,
	                sobrenome: result.usuario[0].sobrenome,
	                email: result.usuario[0].email,
	                cpf: result.usuario[0].cpf,
	                rg: result.usuario[0].rg,
	                dataNasc: result.usuario[0].dataNasc,
	                telefone: result.usuario[0].telefone,
	                endereco: result.usuario[0].endereco,
	                bairro: result.usuario[0].bairro,
	                cidade: result.usuario[0].cidade,
	                estado: result.usuario[0].estado,
	                cep: result.usuario[0].cep,
	                complemento: result.usuario[0].complemento,
	                numero: result.usuario[0].numero,
	                celular: result.usuario[0].celular,
	                login: result.usuario[0].login,
	                //senha: result.usuario[0].senha 
	            })

	            //console.log(modelUsuario);
	            form.loadRecord(modelUsuario);
        	}
        });
	},

	onButtonClickCadastrarEmpresa: function(button, e, options) {
		//console.log('CadastrarEmpresa');
		Ext.create('SistemaBolsa.view.empresa.GridEmpresa');
	},

	onButtonClickCadastrarCorretora: function(button, e, options) {
		//console.log('Cadastrar Corretora...');
		Ext.create('SistemaBolsa.view.corretora.GridCorretora');
	}
});