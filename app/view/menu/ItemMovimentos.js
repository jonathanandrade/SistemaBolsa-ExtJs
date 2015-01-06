Ext.define('SistemaBolsa.view.menu.ItemMovimentos', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.itemmovimentos',

	border: 0,
	autoScroll: true,
	rootVisible: false,
	layout: 'vbox',

   	items: [
   		{
            xtype: 'button',
            text: 'Botão',
            width: 182,
            scale: 'large' 
        },
        {
            xtype: 'button',
            text: 'Botão',
            width: 182,
            scale: 'large'
        },
        {
            xtype: 'button',
            text: 'Botão',
            width: 182,
            scale: 'large'
        },
   	]
});