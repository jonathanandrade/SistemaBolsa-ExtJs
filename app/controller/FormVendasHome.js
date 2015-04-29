Ext.define('SistemaBolsa.controller.FormVendasHome', {
    extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Movimento'
    ],

    stores: [
        'SistemaBolsa.store.Movimentos'
    ],

    views: [
        'SistemaBolsa.view.movimentos.FormVendasHome'
    ],

    init: function(application) {
        this.control({
            "formvendashome": {
                render: this.onWindowRender
            },
            "formvendashome button#save": {
                click: this.onButtonClickSave
            },
            "formvendashome button#cancel": {
                click: this.onButtonClickCancel
            }
        });
    },

    onWindowRender: function(grid, e0pts) {
        //console.log('Window Render');
    },

    onButtonClickSave: function(button, e, options) {

        var win = button.up('window');
        var form = win.down('form');
        var grid = Ext.ComponentQuery.query('gridvendashome grid')[0];
        var rec = grid.getStore();
        var values = form.getValues();
        var record = form.getRecord();

        console.log(values.sigla);

        Ext.Ajax.request({
            url: 'php/movimento/listaCarteira.php',
            method: 'POST',
            success: function(conn, response, options, eOpts) {},
            params: {
                //'movimento': dadosMovimento
            }
        });

    },

    onButtonClickCancel: function(button, e, options) {
        var win = button.up('window'); // Pegar a referencia da janela
        var form = win.down('form'); // Pegar a referencia do form
        form.getForm().reset(); // Reseta todos os campos
        win.close(); // Fecha a janela
    }

});