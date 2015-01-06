Ext.define('SistemaBolsa.view.menu.ItemRelatorios', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.itemrelatorios',

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