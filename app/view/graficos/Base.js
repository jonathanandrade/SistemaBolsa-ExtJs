 Ext.define('SistemaBolsa.view.graficos.Base', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.graficobase',
     layout: 'fit', // Preenche toda a tela automaticamente

     requires: [
       'SistemaBolsa.view.graficos.ToolbarGraficos'
     ],

     dockedItems: [{
         xtype: 'toolbargraficos',
         dock: 'top',
         layout: {
             type: 'hbox'
         }
     }],

     items: [{
        xtype: 'graficolinha'         
     }]
     
 });