Ext.define('SistemaBolsa.view.empresa.GridEmpresa', {
    extend: 'Ext.window.Window',

    alias: 'widget.gridempresa',

    iconCls: 'icon-grid',
    layout: 'fit',
    maximized: true,

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Cadastro de Empresas',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items: [{
                xtype: 'button',
                text: 'Cancelar',
                itemId: 'cancel',
                iconCls: 'icon-cancel'
            },

            {
                xtype: 'button',
                text: 'Salvar',
                itemId: 'save',
                iconCls: 'icon-save'
            }
        ]
    }]
    
});