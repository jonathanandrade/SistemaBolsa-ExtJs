Ext.define('SistemaBolsa.view.empresa.GridEmpresa', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridempresa',

    requires: [
        'Ext.grid.RowNumberer'
    ],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Cadastro de Empresas',

    store: 'SistemaBolsa.store.Empresas',

    columns: [
    //{
    //    text: 'ID',
    //    width: 35,
    //    dataIndex: 'idempresa'
    //},
     {
         xtype: 'rownumberer'
     },
     {
        text: 'Descrição',
        width: 170,
        flex: 1,
        dataIndex: 'descricao'
    }, {
        text: 'Sigla',
        width: 170,
        dataIndex: 'sigla'
    }, {
        text: 'Atividade',
        width: 170,
        dataIndex: 'atividade'
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
        store: 'SistemaBolsa.store.Empresas',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhuma empresa encontrada'
    }]


});