Ext.define('SistemaBolsa.controller.Usuario', {
	extend: 'Ext.app.Controller',

    views: [
        'SistemaBolsa.view.usuario.AlteraUsuario'
    ],

    init: function(application) {
        this.control({
            "alterausuario toolbar button#save": {
                click: this.onButtonClickSave
            },
            "alterausuario toolbar button#cancel": {
                click: this.onButtonClickCancel
            }
        });
    },

    onButtonClickSave: function(button, e, options) {
    	console.log('Save..');
    },

    onButtonClickCancel: function(button, e, options) {
    	console.log('Cancel..');
    	button.up('window').close();
    }

});