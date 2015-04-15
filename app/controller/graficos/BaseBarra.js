Ext.define('SistemaBolsa.controller.graficos.BaseBarra', {
    extend: 'Ext.app.Controller',

    init: function(application) {
        this.control({
            "graficobarra": {
                render: this.onWindowRenderCombo
            },
            "basebarra toolbar button#gerar": {
                click: this.onGerarClick
            }
        });
    },

    onWindowRenderCombo: function() {
        var combo = Ext.ComponentQuery.query('basebarra toolbar combobox[name=siglaGrafico]')[0];      
        var store = combo.getStore();
        store.load();
    },

    onGerarClick: function(btn, e, e0pts) {
        var values = Ext.ComponentQuery.query('basebarra toolbar combobox[name=siglaGrafico]')[0];
        //console.log(values.lastValue);

        var acao = values.lastValue;
        //console.log(acao);

        var combo = Ext.ComponentQuery.query('basebarra graficobarra')[0];
        var store = combo.getStore();

        store.load({
            params: {
                acao: acao // Ação selecionada
            }
        });
    }

});