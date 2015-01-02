Ext.define('SistemaBolsa.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'mainPanel',
            selector: 'app-main tabpanel',
            xtype: 'Ext.tab.Panel'
        }
    ],

    init: function(application) {
        this.control({
            "app-main minhatoolbar button#logout" : {
                click: this.onButtonClickLogout
            },
            
            "minhatoolbar button#arquivo > menu > menuitem#logout": {
                click: this.onButtonClickLogout
            },

            "app-main panel#panelwest button#alterardadosusuario": {
                click: this.onButtonClickAlterarDadosUsuario    
            }
        })
    },

    onButtonClickLogout: function(button, e, options) {
        console.log('logout');
    },

    onButtonClickAlterarDadosUsuario: function(button, e, options) {
        console.log('alterar'); 

        var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.get('text');
        console.log(newTab);

        var tab = mainPanel.add({
            // we use the tabs.items property to get the length of current items/tabs
            title: 'Tab ' + (mainPanel.items.length + 1),
            html : 'Another one',
            closable: true
        });

        mainPanel.setActiveTab(tab);
    }

});