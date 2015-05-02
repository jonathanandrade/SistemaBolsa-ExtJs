Ext.define('SistemaBolsa.view.movimentos.GridVendasHome', {
    extend: 'Ext.window.Window',

    alias: 'widget.gridvendashome',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Spacer',
        'SistemaBolsa.ux.basePagingTbar'
    ],

    viewConfig: {
        stripeRows: true
    },

    height: 400,
    width: 1000,
    title: 'Venda de Ações',
    iconCls: 'icon-exl-mov',
    autoShow: true,
    modal: true, // Deixa como tela principal, impedindo alterações na parte de baixo    

    items: [{
        xtype: 'grid',
        features: [{
            ftype: 'summary'
        }],
        title: 'Movimentos da Ação',
        titleAlign: 'center',
        store: 'SistemaBolsa.store.MovimentosHome',
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
            text: 'Data Compra',
            dataIndex: 'dataCompra',
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
            text: 'Quantidade',
            width: 160,
            dataIndex: 'quantidade',
            summaryType: 'sum'
        }, {
            text: 'Vlr. Unitário de Compra',
            width: 170,
            dataIndex: 'valorUnitario',
            renderer: Ext.util.Format.brMoney,
            renderer: real,
            summaryType: 'average'
        }, {
            text: 'Cotação Atual',
            width: 150,
            dataIndex: 'cotacao',
            renderer: Ext.util.Format.brMoney,
            renderer: real
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
                    var win = Ext.create('SistemaBolsa.view.movimentos.FormVendasHome'); // Cria a janela
                    win.setTitle('Venda de Ações'); // Seta o título
                    var grid = Ext.ComponentQuery.query('gridvendashome grid')[0]; // Recebe a referencia do grid
                    var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada                    
                    var form = win.down('form'); // Pega a referencia do form
                    form.loadRecord(rec); // Carrega os dados no form
                }
            }]
        }]
    }],

    dockedItems: [{
        xtype: 'basePagingTbar',
        store: 'SistemaBolsa.store.MovimentosHome',
        hideRefresh: true,
        saveParamsOnLoad: true,
        dock: 'bottom',
        displayInfo: true,
        emptyMsg: 'Nenhum movimento encontrado'
    }]

});

function real(val) {
    return '<span>' + 'R$ ' + val + '</span>';
}