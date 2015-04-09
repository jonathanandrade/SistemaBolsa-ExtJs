 Ext.define('SistemaBolsa.view.graficos.ToolbarGraficos', {
       extend: 'Ext.toolbar.Toolbar',

       alias: 'widget.toolbargraficos',

       items: [{
             xtype: 'combobox',
             anchor: '70%',
             fieldLabel: 'Ativo',
             emptyText: 'Siglas',
             store: 'SistemaBolsa.store.combobox.ComboSiglasAcao',
             queryMode: 'local',
             itemid: 'siglaGrafico',
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
 });