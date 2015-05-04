Ext.define('SistemaBolsa.controller.FormVendasHome', {
    extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Movimento'
    ],

    stores: [
        'SistemaBolsa.store.Movimentos',
        'SistemaBolsa.store.Carteiras'
    ],

    requires: [
        'SistemaBolsa.ux.notification.Notification'
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
        var values = form.getValues();
        var record = form.getRecord();
        var grid = Ext.ComponentQuery.query('gridvendashome grid')[0];
        var store = grid.getStore();

        // Pegando dados da Carteira
        Ext.Ajax.request({
            url: 'php/movimento/listaCarteira.php',
            method: 'POST',
            params: {
                'acao': values.sigla
            },
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);

                var cotacaoAtual = parseFloat(result.carteira[0].cotacao);
                var mediaAtual = parseFloat(result.carteira[0].mediaAtual);
                //console.log('Atual: ' + cotacaoAtual);
                //console.log('Minha média: ' + mediaAtual);
                //console.log('sigla ' + values.sigla);

                if (mediaAtual > cotacaoAtual) {
                    // PERDENDO DINHEIRO
                    var prejuizo = (mediaAtual - cotacaoAtual);

                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'NO MOMENTO VOCÊ ESTÁ PERDENDO DINHEIRO ! <br><br> Ação: ' + values.sigla + '<br> Sua média: R$ ' + mediaAtual + '<br> Cotação Atual: R$ ' + cotacaoAtual + '<br> Prejuízo de R$ ' + prejuizo.toFixed(2) + ' por ação. <br><br>Deseja prosseguir ?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        scope: this,
                        fn: function(btn, ev) {
                            if (btn == 'yes') {

                                // se a quantidade a ser vendida for maior do que possui
                                if (values.quantidade > parseInt(record.data.quantidade)) {

                                    //console.log('Não pode vender mais do que tem');
                                    Ext.create('widget.uxNotification', {
                                        position: 't',
                                        cls: 'ux-notification-light',
                                        closable: false,
                                        title: 'Erro',
                                        iconCls: 'ux-notification-icon-exclamation',
                                        html: 'Não pode vender mais do que possui.',
                                        autoDestroyDelay: 2500,
                                        slideInDelay: 600,
                                        slideDownDelay: 600,
                                        //slideInAnimation: 'bounceOut',
                                        //slideDownAnimation: 'easeIn'
                                    }).show();

                                    // se a quantidade for menor do que possui
                                } else if (values.quantidade < parseInt(record.data.quantidade)) {

                                    //console.log('chama vende porque é menor');
                                    var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
                                        idmovimento: values.idmovimento,
                                        sigla: values.sigla,
                                        dataCompra: record.data.dataCompra,
                                        quantidade: values.quantidade, // Quantidade para a venda
                                        valorUnitario: values.valorUnitario
                                    });

                                    var dadosVenda = Ext.encode(movVenda.data);

                                    Ext.Ajax.request({
                                        url: 'php/movimento/vendeMovimento.php',
                                        method: 'POST',
                                        success: function(conn, response, options, eOpts) {},
                                        params: {
                                            'movimento': dadosVenda
                                        }
                                    });

                                } else if (values.quantidade = parseInt(record.data.quantidade)) {

                                    var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
                                        idmovimento: values.idmovimento,
                                        sigla: values.sigla,
                                        dataCompra: record.data.dataCompra,
                                        quantidade: values.quantidade, // Quantidade para a venda
                                        valorUnitario: values.valorUnitario
                                    });

                                    var dadosVenda = Ext.encode(movVenda.data);

                                    Ext.Ajax.request({
                                        url: 'php/movimento/deletaMovimento.php',
                                        method: 'POST',
                                        success: function(conn, response, options, eOpts) {},
                                        params: {
                                            'movimento': dadosVenda
                                        }
                                    });
                                }

                                var win = button.up('window'); // Pegar a referencia da janela
                                var form = win.down('form'); // Pegar a referencia do form
                                form.getForm().reset(); // Reseta todos os campos
                                win.close(); // Fecha a janela

                                grid.getStore().reload(); // Atualiza o grid

                            } else {
                                var win = button.up('window'); // Pegar a referencia da janela
                                var form = win.down('form'); // Pegar a referencia do form
                                form.getForm().reset(); // Reseta todos os campos
                                win.close(); // Fecha a janela
                            };

                        }
                    });

                } else {
                    // GANHANDO DINHEIRO
                    var lucro = (cotacaoAtual - mediaAtual);

                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'NO MOMENTO VOCÊ ESTÁ GANHANDO DINHEIRO ! <br><br> Ação: ' + values.sigla + '<br> Sua média: R$ ' + mediaAtual + '<br> Cotação Atual: R$ ' + cotacaoAtual + '<br> Lucro de R$ ' + lucro.toFixed(2) + ' por ação. <br><br>Deseja prosseguir ?',
                        buttons: Ext.Msg.YESNO,
                        icon: 'icon-right',
                        scope: this,
                        fn: function(btn, ev) {
                            if (btn == 'yes') {
                               
                                // se a quantidade a ser vendida for maior do que possui
                                if (values.quantidade > parseInt(record.data.quantidade)) {

                                    //console.log('Não pode vender mais do que tem');
                                    Ext.create('widget.uxNotification', {
                                        position: 't',
                                        cls: 'ux-notification-light',
                                        closable: false,
                                        title: 'Erro',
                                        iconCls: 'ux-notification-icon-exclamation',
                                        html: 'Não pode vender mais do que possui.',
                                        autoDestroyDelay: 2500,
                                        slideInDelay: 600,
                                        slideDownDelay: 600,
                                        //slideInAnimation: 'bounceOut',
                                        //slideDownAnimation: 'easeIn'
                                    }).show();

                                    // se a quantidade for menor do que possui
                                } else if (values.quantidade < parseInt(record.data.quantidade)) {

                                    //console.log('chama vende porque é menor');
                                    var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
                                        idmovimento: values.idmovimento,
                                        sigla: values.sigla,
                                        dataCompra: record.data.dataCompra,
                                        quantidade: values.quantidade, // Quantidade para a venda
                                        valorUnitario: values.valorUnitario
                                    });

                                    var dadosVenda = Ext.encode(movVenda.data);

                                    Ext.Ajax.request({
                                        url: 'php/movimento/vendeMovimento.php',
                                        method: 'POST',
                                        success: function(conn, response, options, eOpts) {},
                                        params: {
                                            'movimento': dadosVenda
                                        }
                                    });

                                } else if (values.quantidade = parseInt(record.data.quantidade)) {

                                    var movVenda = Ext.create('SistemaBolsa.model.Movimento', {
                                        idmovimento: values.idmovimento,
                                        sigla: values.sigla,
                                        dataCompra: record.data.dataCompra,
                                        quantidade: values.quantidade, // Quantidade para a venda
                                        valorUnitario: values.valorUnitario
                                    });

                                    var dadosVenda = Ext.encode(movVenda.data);

                                    Ext.Ajax.request({
                                        url: 'php/movimento/deletaMovimento.php',
                                        method: 'POST',
                                        success: function(conn, response, options, eOpts) {},
                                        params: {
                                            'movimento': dadosVenda
                                        }
                                    });
                                }

                                var win = button.up('window'); // Pegar a referencia da janela
                                var form = win.down('form'); // Pegar a referencia do form
                                form.getForm().reset(); // Reseta todos os campos
                                win.close(); // Fecha a janela

                                grid.getStore().reload(); // Atualiza o grid
                               
                            } else {
                                var win = button.up('window'); // Pegar a referencia da janela
                                var form = win.down('form'); // Pegar a referencia do form
                                form.getForm().reset(); // Reseta todos os campos
                                win.close(); // Fecha a janela
                            };
                        }
                    });
                };
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