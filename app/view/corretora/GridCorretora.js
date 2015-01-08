Ext.define('SistemaBolsa.view.corretora.GridCorretora', {
	extend: 'Ext.window.Window',

    alias: 'widget.gridcorretora',

    iconCls: 'icon-grid',
    layout: 'fit',
    store: 'SistemaBolsa.store.Corretoras',

    maximized: true,

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Cadastro de Corretoras',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Novo',
                    itemId: 'add',
                    iconCls: 'icon-add'
                },
                {
                    xtype: 'button',
                    text: 'Excluir',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'SistemaBolsa.store.Corretoras',
            dock: 'top',
            displayInfo: true,
            emptyMsg: 'Nenhuma corretora encontrada'
        }
    ]
});