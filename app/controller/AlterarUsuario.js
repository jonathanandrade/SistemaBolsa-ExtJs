Ext.define('SistemaBolsa.controller.AlterarUsuario', {
    extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Usuario'
    ],

    requires: [
        'SistemaBolsa.ux.notification.Notification'
    ],

    views: [
        'SistemaBolsa.view.usuario.AlteraUsuario'
    ],

    init: function(application) {
        this.control({
            "mainpanel alterausuario": {
                render: this.onRenderPanel
            },
            "alterausuario toolbar button#save": {
                click: this.onButtonClickSave
            },
            "alterausuario toolbar button#cancel": {
                click: this.onButtonClickCancel
            }
        });
    },

    onRenderPanel: function(form, e0pts) {

        var panel = Ext.ComponentQuery.query('mainpanel')[0];
        //console.log(panel);
        var form = panel.down('alterausuario');
        //console.log(form);

        Ext.Ajax.request({
            url: 'php/usuario/listaUsuario.php',
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);

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
                //Ext.getCmp('login').setValue(modelUsuario.data.login);                        

            }
        });

    },

    onButtonClickSave: function(button, e, options) {
        //console.log('Save..');

        //var win  = button.up('window');
        //var form = win.down('form');
        var form = Ext.ComponentQuery.query('mainpanel alterausuario')[0];
        var values = form.getValues();
        var record = form.getRecord();

        if (record) {
            // Editando corretora
            //console.log(record); // Dados anteriores
            record.set(values);
            //console.log(record); // Dados atualizados

            var dadosUsuario = Ext.encode(record.data);
            //console.log(dadosUsuario); // dados em formato json

            Ext.Ajax.request({
                url: 'php/usuario/atualizaUsuario.php',
                method: 'POST',
                params: {
                    'usuario': dadosUsuario
                },

                success: function(conn, response, options, eOpts) {
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
                }
            });
        }

    },

    onButtonClickCancel: function(button, e, options) {
        console.log('Cancel..');
        //button.up('window').close();
    }

});