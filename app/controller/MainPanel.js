Ext.define('SistemaBolsa.controller.MainPanel', {
	extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Cotacao'
    ],

    requires: [
        'SistemaBolsa.ux.notification.Notification'
    ],

    views: [
        'SistemaBolsa.view.MainPanel'
    ],

    init: function(application) {
        this.control({
            "mainpanel panel grid": {
                render: this.onRenderPanel
            },
            "mainpanel toolbar button#atualizar": {
                click: this.onRenderPanel // Chama a mesma função que atualiza sozinho
            }
        });
    },

    onRenderPanel: function(form, e0pts) {
       
        var grid = Ext.ComponentQuery.query('mainpanel panel grid')[0];
        var store = grid.getStore();

        var runner = new Ext.util.TaskRunner(),
        task = runner.start({
            run: function() {
                store.reload();

                var dadosGrid = [];

                store.each(function(record) {
                    // adiciona cada registro inteiro do grid no array de dados
                    dadosGrid.push(record.data);
                });

                //codifica os dados em JSON
                dadosGrid = Ext.encode(dadosGrid);
                //console.log(dadosGrid);
                
                Ext.Ajax.request({
                    url: 'php/xml/atualizaCotacoes.php',
                    method: 'POST',
                    async: false,
                    params: {
                        'data': dadosGrid
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);

                        if (!result) { // caso seja null
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }

                        if (result.success) {
                            itensSalvos = true;

                        } else {
                            Ext.Msg.alert('Aviso!', 'ERRO AO GRAVAR COTAÇÕES! CONTATE O ADMINISTRADOR!');
                        }
                    },
                    failure: function(conn, response, options, eOpts) {
                        Ext.Msg.alert('Aviso!', 'ERRO! CONTATE O ADMINISTRADOR!');
                    }
                }); 

            },

            interval: 15000 //3000 = 3s
        });

    }

});