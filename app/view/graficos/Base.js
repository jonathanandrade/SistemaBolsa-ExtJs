 Ext.define('SistemaBolsa.view.graficos.Base', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.graficobase',     

     layout: 'border',

     items: [{
         xtype: 'panel',
         region: 'north',
         title: 'Escolha sua ação',
         collapsible: true,
         items: [{
             dockedItems: [{
                 xtype: 'toolbar',
                 dock: 'top',
                 layout: {
                     type: 'hbox'
                 },
                 items: [{
                     xtype: 'combobox',
                     anchor: '70%',
                     fieldLabel: 'Ativo',
                     emptyText: 'Siglas',
                     store: 'SistemaBolsa.store.combobox.ComboSiglasAcao',
                     queryMode: 'local',
                     id: 'siglaGrafico',
                     name: 'siglaGrafico',
                     displayField: 'sigla',
                     valueField: 'sigla',
                     editable: false,
                     allowBlank: false,
                     msgTarget: 'under'
                 }, {
                     xtype: 'button',
                     text: 'Gerar',
                     itemId: 'gerar',
                     iconCls: 'icon-gerar',
                     formBind: true
                 }]
             }]
         }]
     }, {
        //xtype: 'graficolinha',
        //region: 'center',
         xtype: 'panel',
         title: 'Gráfico',         
         region: 'center',
         autoScroll: true,
         
         items: [
            {
                xtype: 'graficolinha',
                autoScroll: true,
                width: 1200,
                height: 500
            }
         ]
     }]
 });