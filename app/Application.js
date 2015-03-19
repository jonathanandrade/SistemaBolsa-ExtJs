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
        'Ext.grid.Panel'
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
        'SistemaBolsa.view.movimentos.GridVendas'
    ],

    controllers: [
        'Login',
        'Menu',
        'Usuario',
        'Empresa',
        'Corretora',
        'AlterarSenha',
        'AlterarUsuario',
        'Movimento'
    ],

    stores: [
        'SistemaBolsa.store.combobox.ComboEstados',
        'SistemaBolsa.store.combobox.ComboSiglasAcao'
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