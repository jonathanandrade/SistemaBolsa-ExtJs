Ext.define('SistemaBolsa.view.Header', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.appheader',

	heigth: 30,
	ui: 'footer',
	style: 'border-bottom: 4px solid #4C72A4',

	items: [
		{
			xtype: 'label',
			html: '<div id="titleHeader">Sistema de Gerenciamento<spanstyle="font-size:12px;"> - Bolsa de Valores</span></div>'
		},
		{
			xtype: 'tbfill'
		},
		{
			xtype: 'button',
			text: 'Alterar Senha',
			itemId: 'alterarsenha',
			iconCls: 'icon-key'	
		},
		{
			xtype: 'tbseparator'
		},
		{
			xtype: 'button',
			text: 'Logout',
			itemId: 'logout',
			iconCls: 'icon-logout'
		}
	]
});