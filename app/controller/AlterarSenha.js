Ext.define('SistemaBolsa.controller.AlterarSenha', {
    extend: 'Ext.app.Controller',

    requires: [
        'SistemaBolsa.util.Alert',
        'SistemaBolsa.util.SessionMonitor',
        'SistemaBolsa.util.MD5'
    ],

    views: [
        'AlterarSenha'
    ],


    init: function(application) {
        this.control({
            "alterarsenha button#save": {
                click: this.onButtonClickSave
            },
            "alterarsenha button#cancel": {
                click: this.onButtonClickCancel
            }
        });        

    },

    onButtonClickSave: function(button, e, options) {
        //console.log('Alterando senha');
        var win  = button.up('window');
        var form = win.down('form');
        var values = form.getValues();
        var record = form.getRecord();  

        if(record) {
            record.set(values);

            if(values.senha != "") {
                var novaSenha = Ext.create('SistemaBolsa.model.Usuario', {
                    iduser:  values.iduser,               
                    senha: SistemaBolsa.util.MD5.encode(values.senha)           
                })
                                
                var dadosUsuario = Ext.encode(novaSenha.data);
                //console.log(dadosUsuario); // dados em formato json

                Ext.Ajax.request({
                    url: 'php/alterarSenha/alteraSenha.php',
                    method: 'POST',
                    success: function(conn, response, options, eOpts) {},
                    params: {
                        'usuario': dadosUsuario
                    }
                });
            } else {
                //console.log('vazia');
            }
            
        } else {
            // erro
        }

        win.close();
    },

    onButtonClickCancel: function(button, e, options) {
        //console.log('Operação cancelada...');
        var win = button.up('window');  // Pegar a referencia da janela
        var form = win.down('form'); // Pegar a referencia do form
        form.getForm().reset();      // Reseta todos os campos
        win.close();                 // Fecha a janela
    }    
    
});