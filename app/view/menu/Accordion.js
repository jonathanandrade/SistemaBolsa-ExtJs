Ext.define('SistemaBolsa.view.menu.Accordion', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mainmenu',

	requires: [
		'SistemaBolsa.view.menu.ItemCadastros',
		'SistemaBolsa.view.menu.ItemMovimentos',
		'SistemaBolsa.view.menu.ItemRelatorios'
	],

	width: 300,
	layout: {
		type: 'accordion'
	},

	collapsible: true,
	hideCollapseTool: false,
	iconCls: 'icon-chart_organisation',
	title: 'Menu',

	items: [
		{        	
			xtype: 'itemcadastros',
			title: 'Cadastros'
    	},
    	{
        	title: 'Movimentos',
        	xtype: 'itemmovimentos'
    	},
    	{
        	title: 'Relatórios',
        	html: 'itemrelatorios'
    	}
    ]
});