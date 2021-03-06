Ext.define('SistemaBolsa.view.movimentos.GridCompras', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridcompras',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.selection.CellModel'
    ],

    features: [{
        ftype: 'summary'
    }],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Compra de Ações',

    store: 'SistemaBolsa.store.Movimentos',

    columns: [{
            text: 'ID',
            width: 35,
            dataIndex: 'idmovimento',
            hidden: true
        }, {
            xtype: 'rownumberer'
        },
        //{
        //    xtype: 'checkcolumn',
        //    width: 40,
        //    header: 'Exibir',
        //    dataIndex: 'exibir',
        //    id: 'exibir',
        //    stopSelection: false
        //},
        {
            text: 'Ativo',
            width: 170,
            flex: 1,
            dataIndex: 'sigla'
        }, {
            text: 'Data Compra',
            dataIndex: 'dataCompra',
            xtype: 'datecolumn',
            groupable: false,
            width: 150,
            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
            filter: {

            },
            editor: {
                xtype: 'datefield'
            }
        }, {
            text: 'Quantidade',
            width: 160,
            dataIndex: 'quantidade'
        }, {
            text: 'Vlr. Unitário',
            width: 170,
            dataIndex: 'valorUnitario',
            renderer: Ext.util.Format.brMoney
        }, {
            text: 'Total',
            width: 170,
            dataIndex: 'total',
            renderer: Ext.util.Format.brMoney,
            summaryType: 'sum'
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Novo',
            itemId: 'add',
            iconCls: 'icon-add'
        }, {
            xtype: 'button',
            text: 'Excluir',
            itemId: 'delete',
            iconCls: 'icon-delete'
        }]
    }, {
        xtype: 'pagingtoolbar',
        store: 'SistemaBolsa.store.Movimentos',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhum movimento encontrado'
    }]

});