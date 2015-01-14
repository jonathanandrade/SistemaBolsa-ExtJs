Ext.define('SistemaBolsa.controller.Usuario', {
	extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Usuario'
    ],

    views: [
        'SistemaBolsa.view.usuario.FormUsuario'
    ],

    init: function(application) {
        this.control({
            "formusuario toolbar button#save": {
                click: this.onButtonClickSave
            },
            "formusuario toolbar button#cancel": {
                click: this.onButtonClickCancel
            }
        });
    },

    onButtonClickSave: function(button, e, options) {
    	console.log('Save..');
        var win    = button.up('window');
        console.log(win);           
    },

    onButtonClickCancel: function(button, e, options) {
    	//console.log('Cancel..');
    	button.up('window').close();
    }

});