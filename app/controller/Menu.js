Ext.define('SistemaBolsa.controller.Menu', {
    extend: 'Ext.app.Controller',

    models: [
        'MenuRoot',
        'MenuItem'
    ],
    stores: [
        'Menu'
    ],
    views: [
        'menu.Menu',
        'menu.MenuItem'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainviewport #mainPanel',
            xtype: 'Ext.tab.Panel'
        }
    ],

    onPanelRender: function(component, eOpts) {
        //console.log('renderizou');
        this.getMenuStore().load(function(records, op, success){

            var menuPanel = Ext.ComponentQuery.query('menuwest')[0];

            //console.log("esse" + menuPanel);
            Ext.each(records, function(root){

                var menu = Ext.create('SistemaBolsa.view.menu.MenuItem',{
                    title: root.get('title'),
                    iconCls: root.get('iconCls')
                });

                Ext.each(root.items(), function(itens){

                    Ext.each(itens.data.items, function(item){

                        menu.getRootNode().appendChild({
                            text: item.get('text'), 
                            leaf: true, 
                            iconCls: item.get('iconCls'),
                            id: item.get('id'),
                            className: item.get('className')
                        });
                        
                    });  
                });

                menuPanel.add(menu);
            }); 
        });
    },

    onItemdblclick: function(rowmodel, record, index, eOpts) {
        //console.log('clicou');

        var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.findBy(
        function (tab){ 
            return tab.title === record.get('text'); 
        }
        );

        if (!newTab){
            newTab = mainPanel.add({
                xtype: record.raw.className,
                closable: true,
                iconCls: record.get('iconCls'),
                title: record.get('text')                
            });            
        } 

        mainPanel.setActiveTab(newTab);
    },

    init: function(application) {
        this.control({
            "menuwest": {
                render: this.onPanelRender
            },
            "treepanel": {
                itemdblclick: this.onItemdblclick
            }
        });
    }

});
