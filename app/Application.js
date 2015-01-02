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
        'SistemaBolsa.view.MyViewport',
        'Ext.form.Label',
        'Ext.layout.container.Border',
        'SistemaBolsa.view.Menu',
        'Ext.menu.Menu'
    ],

    views: [
        'Login',
        'Header',
        'Menu'
    ],

    controllers: [
        'Login'
    ],

    stores: [
        // TODO: add stores here
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