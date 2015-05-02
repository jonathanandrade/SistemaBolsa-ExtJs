Ext.Loader.setConfig({
    enabled: true,
    paths: {
       // 'Ext': 'ext/src'
        //  'ux': 'ux'
    }
});

Ext.define('SistemaBolsa.Application', {
    name: 'SistemaBolsa',

    extend: 'Ext.app.Application',

    requires: [
        'SistemaBolsa.util.MD5',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.layout.container.Column',  
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.RadioGroup',
        'Ext.grid.Panel',
        'Ext.grid.column.CheckColumn',
        'Ext.grid.column.Date',
        'Ext.data.reader.Xml',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Column',
        'Ext.grid.feature.Summary'
    ],

    views: [
        'Login',
        'Header',
        'SistemaBolsa.view.usuario.FormUsuario',
        'SistemaBolsa.view.empresa.GridEmpresa',
        'SistemaBolsa.view.empresa.FormEmpresa',
        'SistemaBolsa.view.corretora.GridCorretora',
        'SistemaBolsa.view.corretora.FormCorretora',
        'SistemaBolsa.view.MyViewport',
        'SistemaBolsa.view.AlterarSenha',
        'SistemaBolsa.view.menu.Menu', 
        'SistemaBolsa.view.menu.MenuItem',
        'SistemaBolsa.view.movimentos.GridCompras',
        'SistemaBolsa.view.usuario.AlteraUsuario',
        'SistemaBolsa.view.movimentos.FormCompras',        
        'SistemaBolsa.view.movimentos.FormComprasHome',
        'SistemaBolsa.view.movimentos.FormVendas',
        'SistemaBolsa.view.movimentos.FormVendasHome',
        'SistemaBolsa.view.movimentos.GridVendas',
        'SistemaBolsa.view.movimentos.GridVendasHome',
        'SistemaBolsa.view.movimentos.GridCarteira',        
        'SistemaBolsa.view.graficos.BaseLinha',
        'SistemaBolsa.view.graficos.BaseColuna',
        'SistemaBolsa.view.graficos.BaseBarra',
        'SistemaBolsa.view.graficos.BaseOscilacao',
        'SistemaBolsa.view.relatorios.RelEmpresa',
        'SistemaBolsa.view.relatorios.RelCorretora',
        'SistemaBolsa.view.relatorios.RelCompras',
        'SistemaBolsa.view.relatorios.RelVendas',
        'SistemaBolsa.view.relatorios.RelCarteira'
    ],

    controllers: [
        'Login',
        'Menu',
        'Usuario',
        'Empresa',
        'Corretora',
        'AlterarSenha',
        'AlterarUsuario',
        'Movimento',
        'MovimentosHome',
        'MainPanel',
        'Carteira',
        'SistemaBolsa.controller.graficos.BaseLinha',
        'SistemaBolsa.controller.graficos.BaseColuna',
        'SistemaBolsa.controller.graficos.BaseBarra',
        'SistemaBolsa.controller.graficos.BaseOscilacao',
        'SistemaBolsa.controller.FormComprasHome',
        'SistemaBolsa.controller.FormVendasHome'
    ],

    stores: [
        'SistemaBolsa.store.combobox.ComboEstados',
        'SistemaBolsa.store.combobox.ComboSiglasAcao',
        'SistemaBolsa.store.Cotacoes',
        'SistemaBolsa.store.graficos.GraficoLinhas',
        'SistemaBolsa.store.graficos.GraficoColuna',
        'SistemaBolsa.store.graficos.GraficoBarras',
        'SistemaBolsa.store.graficos.GraficoOscilacao'
    ],

    splashscreen: {},

    autoCreateViewport: false,

    enableQuickTips: true,

    init: function() {
        
        // Cria o efeito de carregamento
        splashscreen = Ext.getBody().mask('Carregando Aplicação', 'splashscreen');

        // Oculta o conteudo que está atras
        splashscreen.addCls('splashscreen');

        // Insere um novo div até o ícone de carregamento, onde podemos colocar o nosso logotipo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
           cls: 'x-splash-icon'
        });
       
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');                        
                    }
                }
            });

            // Ext.widget('mainviewport');
            //Ext.widget('login');          
        });

        task.delay(2000); // Tempo total de espera

    }

});