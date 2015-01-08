Ext.define('SistemaBolsa.view.empresa.GridEmpresa', {
    extend: 'Ext.window.Window',

    alias: 'widget.gridempresa',

    iconCls: 'icon-grid',
    layout: 'fit',
    store: 'SistemaBolsa.store.Empresas',

    maximized: true,

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Cadastro de Empresas',

    items: [{

        xtype: 'gridpanel',
        store: 'SistemaBolsa.store.Empresas',

        columns: [{
            text: 'ID',
            width: 35,
            dataIndex: 'idempresa'
        }, {
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

    }],

});