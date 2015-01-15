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
    	//console.log('Save..');
        var win  = button.up('window');
        var form = win.down('form');
        var values = form.getValues();
        var record = form.getRecord();
        //var grid   = Ext.ComponentQuery.query('gridcorretora grid')[0],
        //var store  = grid.getStore();
        //console.log(values); 
        //console.log(record);

        if(record) {
            // Editando corretora
            console.log(record);
            record.set(values);
            console.log(record);
        } else {
            // Cadastro
            var novoUsuario = Ext.create('SistemaBolsa.model.Usuario', {
                nome: values.nome,
                sobrenome: values.sobrenome,
                email: values.email,
                cpf: values.cpf,
                rg: values.rg,
                dataNasc: values.dataNasc,
                telefone: values.telefone,
                endereco: values.endereco,
                bairro: values.bairro,
                cidade: values.cidade,
                estado: values.estado,
                cep: values.cep,
                complemento: values.complemento,
                numero: values.numero,
                celular: values.celular,
                login: values.login,
                senha: SistemaBolsa.util.MD5.encode(values.senha)           
            })
            
            //console.log(novoUsuario);

            //codifica os dados em JSON
            var dadosUsuario = Ext.encode(novoUsuario.data);

            //console.log(dadosUsuario);
            Ext.Ajax.request({
                url: 'php/usuario/criaUsuario.php',
                method: 'POST',
                success: function(conn, response, options, eOpts) {},
                params: {
                    'usuario': dadosUsuario
                }
            });            
        }
        
        win.close(); // Fecha o formulario
        //Ext.MessageBox.alert('Informação','Salvo com Sucesso !');

    },

    onButtonClickCancel: function(button, e, options) {
    	//console.log('Cancel..');
    	button.up('window').close();
    }

});