Ext.define('SistemaBolsa.view.menu.ItemMovimentos', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.itemmovimentos',

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
            text: 'Botão 1',
            width: 182,
            scale: 'large',
            itemId: 'botao1'
        },
        {
            xtype: 'button',
            text: 'Botão 2',
            width: 182,
            scale: 'large',
            itemId: 'botao2'
        },
        {
            xtype: 'button',
            text: 'Botão 3',
            width: 182,
            scale: 'large',
            itemId: 'botao3'
        },
   	]
});