Ext.define('SistemaBolsa.controller.FormComprasHome', {
    extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Movimento'
    ],

    stores: [
        'SistemaBolsa.store.Movimentos'
    ],

    views: [
        'SistemaBolsa.view.movimentos.FormComprasHome'
    ],

    init: function(application) {
        this.control({
            "formcomprashome": {
                render: this.onWindowRender
            },
            "formcomprashome button#save": {
                click: this.onButtonClickSave
            },
            "formcomprashome button#cancel": {
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
        var values = form.getValues();
        var record = form.getRecord();

        var vlrUnitario = values.Ultimo.replace(',', '.');

        if (form.getForm().isValid()) {

            // Cadastro         
            var novoMovimento = Ext.create('SistemaBolsa.model.Movimento', {
                sigla: values.Codigo,
                quantidade: values.quantidade,
                valorUnitario: vlrUnitario,
                media: ((values.quantidade * vlrUnitario) / values.quantidade),
                tipo: 'C', // Tipo de Movimento Compra
                total: (values.quantidade * vlrUnitario)
            });

            var dadosMovimento = Ext.encode(novoMovimento.data);

            Ext.Ajax.request({
                url: 'php/movimento/criaMovimento.php',
                method: 'POST',
                success: function(conn, response, options, eOpts) {},
                params: {
                    'movimento': dadosMovimento
                }
            });

            win.close(); // Fecha o formulario

            Ext.create('widget.uxNotification', {
                position: 't',
                cls: 'ux-notification-light',
                closable: false,
                title: 'Informação',
                iconCls: 'ux-notification-icon-information',
                html: 'Salvo com sucesso.',
                autoDestroyDelay: 1800,
                slideInDelay: 600,
                slideDownDelay: 600,
                //slideInAnimation: 'bounceOut',
                //slideDownAnimation: 'easeIn'
            }).show();

        } else { // <<< Fim formPanel.getForm().isValid()

            Ext.create('widget.uxNotification', {
                position: 't',
                cls: 'ux-notification-light',
                closable: false,
                title: 'Informação',
                iconCls: 'ux-notification-icon-information',
                html: 'Preencha todos os campos obrigatórios.',
                autoDestroyDelay: 1800,
                slideInDelay: 600,
                slideDownDelay: 600,
                //slideInAnimation: 'bounceOut',
                //slideDownAnimation: 'easeIn'
            }).show();

        }
    },

    onButtonClickCancel: function(button, e, options) {
        var win = button.up('window'); // Pegar a referencia da janela
        var form = win.down('form'); // Pegar a referencia do form
        form.getForm().reset(); // Reseta todos os campos
        win.close(); // Fecha a janela
    }

});