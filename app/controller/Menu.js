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
			}
		})
	},

	onButtonClickAlterarDadosUsuario: function(button, e, options) {
		console.log('AlterarDadosUsuario');
		Ext.create('SistemaBolsa.view.usuario.AlteraUsuario');
	},

	onButtonClickCadastrarEmpresa: function(button, e, options) {
		console.log('CadastrarEmpresa');
		Ext.create('SistemaBolsa.view.empresa.GridEmpresa');
	}
});