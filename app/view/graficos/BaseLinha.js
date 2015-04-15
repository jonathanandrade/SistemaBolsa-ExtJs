 Ext.define('SistemaBolsa.view.graficos.BaseLinha', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.graficobase',
     layout: 'fit', // Preenche toda a tela automaticamente

     requires: [
       'SistemaBolsa.view.graficos.ToolbarGraficos',
       'SistemaBolsa.view.graficos.GraficoLinha'
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