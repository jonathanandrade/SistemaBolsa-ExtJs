Ext.define('SistemaBolsa.view.movimentos.GridVendas', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridvendas',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Action'
    ],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Venda de Ações',

    store: 'SistemaBolsa.store.Movimentos',

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
            renderer: Ext.util.Format.brMoney,
            renderer: real
        },{
            text: 'Cotação Atual',
            width: 150,
            dataIndex: 'cotacao',
            renderer: Ext.util.Format.brMoney,
            renderer: real
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
                    var win = Ext.create('SistemaBolsa.view.movimentos.FormVendas'); // Cria a janela
                    win.setTitle('Venda de Ações'); // Seta o título
                    var grid = Ext.ComponentQuery.query('gridvendas')[0]; // Recebe a referencia do grid
                    var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada
                    var form = win.down('form'); // Pega a referencia do form
                    form.loadRecord(rec); // Carrega os dados no form
                }
            }]
        }
    ],

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
        store: 'SistemaBolsa.store.Movimentos',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhum movimento encontrado'
    }]

});

function real(val) {
    return '<span>' + 'R$ ' + val + '</span>';
}