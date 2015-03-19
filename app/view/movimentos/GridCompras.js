Ext.define('SistemaBolsa.view.movimentos.GridCompras', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridcompras',

    requires: [
        'Ext.grid.RowNumberer'
    ],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Compra de Ações',

    store: 'SistemaBolsa.store.Movimentos',

    columns: [
     {
        text: 'ID',
        width: 35,
        dataIndex: 'idmovimento',
        hidden: true
     },
     {
         xtype: 'rownumberer'
     },
     {
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
    }],

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