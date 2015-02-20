Ext.define('SistemaBolsa.view.menu.ItemCadastros', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.itemcadastros',

	border: 0,
	autoScroll: true,
	rootVisible: false,
	layout: 'vbox',
    bodyStyle: {
                background: '#eee' //,
                //padding: '10px'
            },

   	items: [
   		{
            xtype: 'button',
            text: 'Alterar dados do usuário',
            itemId: 'alterardadosusuario',
            width: 182,           
            scale: 'large',
            iconCls: 'icon-user-menu'
        },
        {
            xtype: 'button',
            text: 'Cadastrar Empresa',
            itemId: 'cadastrarempresa',
            width: 182,
            scale: 'large',
            iconCls: 'icon-empresa-menu'
        },
        {
            xtype: 'button',
            text: 'Cadastrar Corretora',
            itemId: 'cadastrarcorretora',
            width: 182,
            scale: 'large',
            iconCls: 'icon-corretora-menu'
        },
   	]
});