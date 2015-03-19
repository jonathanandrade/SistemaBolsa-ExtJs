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
            width: 170,
            dataIndex: 'quantidade'
        }, {
            text: 'Vlr. Unitário',
            width: 170,
            dataIndex: 'valorUnitario'
        }, {
            menuDisabled: true,
            sortable: false,
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'icon-delete',
                tooltip: 'Vender Ação',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.alert('Sell', 'Sell ' + rec.get('company'));                    
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
        }*/ ]
    }, {
        xtype: 'pagingtoolbar',
        store: 'SistemaBolsa.store.Movimentos',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhum movimento encontrado'
    }]


});