 Ext.define('SistemaBolsa.view.graficos.BaseBarra', {
     extend: 'Ext.panel.Panel',

     alias: 'widget.basebarra',
     layout: 'fit', // Preenche toda a tela automaticamente

     requires: [
       'SistemaBolsa.view.graficos.ToolbarGraficos',
       'SistemaBolsa.view.graficos.GraficoBarra'
     ],

     dockedItems: [{
         xtype: 'toolbargraficos',
         dock: 'top',
         layout: {
             type: 'hbox'
         }
     }],

     items: [{
        xtype: 'graficobarra'
     }]
     
 });