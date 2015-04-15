Ext.define('SistemaBolsa.controller.graficos.BaseColuna', {
    extend: 'Ext.app.Controller',

    init: function(application) {
        this.control({
            "graficocoluna": {
                render: this.onWindowRenderCombo
            },
            "basecoluna toolbar button#gerar": {
                click: this.onGerarClick
            }
        });
    },

    onWindowRenderCombo: function() {
        var combo = Ext.ComponentQuery.query('basecoluna toolbar combobox[name=siglaGrafico]')[0];
        var store = combo.getStore();
        store.load();
    },

    onGerarClick: function(btn, e, e0pts) {
        var values = Ext.ComponentQuery.query('basecoluna toolbar combobox[name=siglaGrafico]')[0];
        //console.log(values.lastValue);

        var acao = values.lastValue;        

        var combo = Ext.ComponentQuery.query('basecoluna graficocoluna')[0];
        var store = combo.getStore();
        //console.log(store);

        store.load({
            params: {
                acao: acao // Ação selecionada
            }
        });
    }

});