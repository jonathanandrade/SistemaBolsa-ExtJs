 Ext.define('SistemaBolsa.view.graficos.BaseOscilacao', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.baseoscilacao',
     layout: 'fit', // Preenche toda a tela automaticamente

     requires: [
       'SistemaBolsa.view.graficos.ToolbarGraficos',
       'SistemaBolsa.view.graficos.GraficoOscilacao'
     ],

     dockedItems: [{
         xtype: 'toolbargraficos',
         dock: 'top',
         layout: {
             type: 'hbox'
         }
     }],

     items: [{
        xtype: 'graficooscilacao'         
     }]
     
 });