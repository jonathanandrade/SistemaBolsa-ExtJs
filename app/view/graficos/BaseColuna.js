 Ext.define('SistemaBolsa.view.graficos.BaseColuna', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.basecoluna',
     layout: 'fit', // Preenche toda a tela automaticamente

     requires: [
       'SistemaBolsa.view.graficos.ToolbarGraficos',
       'SistemaBolsa.view.graficos.GraficoColuna'
     ],

     dockedItems: [{
         xtype: 'toolbargraficos',
         dock: 'top',
         layout: {
             type: 'hbox'
         }
     }],

     items: [{
        xtype: 'graficocoluna'
     }]
     
 });