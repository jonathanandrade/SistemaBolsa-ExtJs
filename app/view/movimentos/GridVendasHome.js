Ext.define('SistemaBolsa.view.movimentos.GridVendasHome', {
    extend: 'Ext.window.Window',

    alias: 'widget.gridvendashome',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Action'
    ],

    viewConfig: {
        stripeRows: true
    },

    height: 400,
    width: 800,
    title: 'Venda de Ações',
    iconCls: 'icon-exl-mov',
    autoShow: true,
    modal: true, // Deixa como tela principal, impedindo alterações na parte de baixo

    store: 'SistemaBolsa.store.MovimentosHome',

    items: [{
        xtype: 'grid',
        columns: [{
            text: 'ID',
            width: 35,
            dataIndex: 'idmovimento',
            hidden: true
        }, {
            xtype: 'rownumberer'
        }, {
            text: 'Ativo',
            width: 170,
            flex: 1,
            dataIndex: 'sigla'
        }, {
            text: 'Quantidade',
            width: 160,
            dataIndex: 'quantidade'
        }, {
            text: 'Vlr. Unitário de Compra',
            width: 170,
            dataIndex: 'valorUnitario',
            renderer: Ext.util.Format.brMoney
        }, {
            text: 'Data Venda',
            dataIndex: 'dataVenda',
            xtype: 'datecolumn',
            groupable: false,
            width: 115,
            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
            filter: {

            },
            editor: {
                xtype: 'datefield'
            }
        }, {
            menuDisabled: true,
            sortable: false,
            xtype: 'actioncolumn',
            text: 'Vender',
            width: 60,
            items: [{
                iconCls: 'icon-delete',
                tooltip: 'Vender Ação',
                handler: function(grid, rowIndex, colIndex) {
                    //console.log('Função removida');
                    //var win = Ext.create('SistemaBolsa.view.movimentos.FormVendas'); // Cria a janela
                    //win.setTitle('Venda de Ações'); // Seta o título
                    //var grid = Ext.ComponentQuery.query('gridvendas')[0]; // Recebe a referencia do grid
                    //var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada
                    //var form = win.down('form'); // Pega a referencia do form
                    //form.loadRecord(rec); // Carrega os dados no form
                }
            }]
        }]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            /*{
                xtype: 'button',
                text: 'Vender',
                itemId: 'vender',
                iconCls: 'icon-delete'
            }*/
        ]
    }, {
        xtype: 'pagingtoolbar',
        store: 'SistemaBolsa.store.MovimentosHome',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhum movimento encontrado'
    }]


});