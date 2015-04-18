Ext.define('SistemaBolsa.controller.graficos.BaseOscilacao', {
    extend: 'Ext.app.Controller',

    init: function(application) {
        this.control({
            "graficooscilacao": {
                render: this.onWindowRenderCombo
            },
            "baseoscilacao toolbar button#gerar": {
                click: this.onGerarClick
            }
        });
    },

    onWindowRenderCombo: function() {
        var combo = Ext.ComponentQuery.query('baseoscilacao toolbar combobox[name=siglaGrafico]')[0];
        var store = combo.getStore();        
        store.load();
    },

    onGerarClick: function(btn, e, e0pts) {
        var values = Ext.ComponentQuery.query('baseoscilacao toolbar combobox[name=siglaGrafico]')[0];
        //console.log(values.lastValue);

        var acao = values.lastValue;
        //console.log(acao);

        var combo = Ext.ComponentQuery.query('baseoscilacao graficooscilacao')[0];
        var store = combo.getStore();

        store.load({
            params: {
                acao: acao // Ação selecionada
            }
        });

    }

});