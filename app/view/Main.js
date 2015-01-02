Ext.define('Blog.toolbar', {
        extend:'Ext.toolbar.Toolbar',
        alias: 'widget.minhatoolbar',
        renderTo: document.body,
        width   : 500,
        items: [
            //{xtype: 'tbfill'}, // Faz o alinhamento dos elementos para a direita
            {
                text: 'Arquivo',
                arrowAlign: 'right',
                iconCls: 'icon-folder',
                itemId: 'arquivo',
                menu: [{
                        text: 'Item 1',
                    }, {
                        text: 'Item 2',
                    }, {
                        text: 'Item 3'
                    }, '-', {
                        text: 'Logout',
                        itemId: 'logout',
                        iconCls: 'icon-logout',
                }]
            },{
                xtype: 'tbspacer',
                width: 3
            },{
                text: 'Relatórios',
                arrowAlign: 'right',
                iconCls: 'icon-report',
                id: 'relatorios',
                menu: [{
                        text: 'Relatório Por Data',
                        id: 'relA',
                        iconCls: 'icon-date'
                    }, '-', {
                        text: 'Graficos',
                        id: 'relB',
                        iconCls: 'icon-chart'
                    }, {
                        text: 'Item 4'
                }]
            },{
                xtype: 'tbspacer',
                width: 3
            },{
                text: 'Opções',
                arrowAlign: 'right',
                iconCls: 'icon-ferramentas',
                itemId: 'opcoes',
                menu: [{
                        text: 'Abrir Cadastro de User',
                        id: 'opA',
                        iconCls: 'icon-user-add'
                    }, {
                        text: 'Item 2',
                    }, {
                        text: 'Item 3'
                    }, {
                        text: 'Item 4'
                }]
            },{
                xtype: 'tbspacer',
                width: 3
            },{
                text: 'Ajuda',
                arrowAlign: 'right',
                iconCls: 'icon-help',
                itemId: 'sobre',
                menu: [{
                        text: 'Sobre',
                    }, {
                        text: 'Item 2',
                    }, {
                        text: 'Item 3'
                    }, {
                        text: 'Item 4'
                }]
            },           
            {xtype: 'tbfill'},
            {
                xtype: 'button',
                text: 'Logout',
                iconCls: 'icon-logout',
                itemId: 'logout'
            }
        ]              
    });

Ext.define('SistemaBolsa.view.Main', {
    extend: 'Ext.container.Container',

    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.toolbar.Spacer'
    ],
    
    xtype: 'app-main',
   
    layout: {
        type: 'border'
    },

    items: [
        {        
            region: 'west',
            width: 200,

            layout: 'accordion',
            items: [
                {
                    xtype: 'panel',
                    title: 'Cadastros',
                    itemId: 'panelwest',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Alterar dados do usuário',
                            itemId: 'alterardadosusuario',
                            width: 200,
                            height: 40                     
                        },
                        {
                            xtype: 'button',
                            text: 'Corretora',
                            width: 200,
                            height: 40 
                        },
                        {
                            xtype: 'button',
                            text: 'Empresa',
                            width: 200,
                            height: 40 
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Movimentos',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Adicionar Movimento',
                            width: 200,
                            height: 40                          
                        },
                        {
                            xtype: 'button',
                            text: 'Excluir Movimento',
                            width: 200,
                            height: 40 
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Gráficos/Relatórios',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Relatório por data',
                            width: 200,
                            height: 40                           
                        },
                        {
                            xtype: 'button',
                            text: 'Gerenciamento de Email',
                            width: 200,
                            height: 40 
                        }
                    ]
                }
            ]

        },
        {
            region: 'center',
            xtype: 'tabpanel',
            itemId: 'mainPanel',
            activeTab: 0,
            items:[{
                title: 'Home',
                xtype: 'panel'
            }]           
        },
        {
            region: 'north',
            
            dockedItems: [{
                xtype: 'minhatoolbar',
                dock: 'bottom'  // defaul = top, bottom, right, left
            }]            
        }]
});