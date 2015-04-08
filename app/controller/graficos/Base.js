Ext.define('SistemaBolsa.controller.graficos.Base', {
    extend: 'Ext.app.Controller',

    init: function(application) {
        this.control({
            "graficobase": {
                render: this.onWindowRenderCombo
            },
            "graficobase toolbar button#gerar": {
                click: this.onGerarClick
            }
        });
    },

    onWindowRenderCombo: function() {
        var combo = Ext.ComponentQuery.query('graficobase toolbar combobox#siglaGrafico')[0];
        var store = combo.getStore();
        store.load();
    },

    onGerarClick: function(btn, e, e0pts) {
        var values = Ext.ComponentQuery.query('graficobase toolbar combobox#siglaGrafico')[0]
        //console.log(values.lastValue);

        var acao = Ext.encode(values.lastValue); // Recupera a ação seleciona no comboBox
        //console.log(acao);

        Ext.Ajax.request({
            url: 'php/xml/gerarGrafico.php',
            method: 'POST',
            params: {
                'acao': acao // Ação selecionada
            },

            success: function(conn, response, options, eOpts) {
                //console.log(response);
            },

            failure: function(conn, response, options, e0pts) {

                Ext.get(login.getEl()).unmask();

                Ext.MessageBox.show({
                    title: 'Erro',
                    msg: 'Algum erro ocorreu.',
                    icon: Ext.MessageBox.ERROR
                });
            }

        });
    }

});