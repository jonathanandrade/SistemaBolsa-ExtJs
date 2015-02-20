Ext.define('SistemaBolsa.view.MainPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

	activeTab: 0,

	items: [
		{
			xtype: 'panel',
			closable: false,
			iconCls: 'icon-home',
			title: 'Home',
			bodyStyle: {
				background: '#eee',
				padding: '10px'
			},
			items: [
				{
					xtype: 'form',
					frame: false,
					bodyStyle: {
						//background: '#eee',
						Padding: '15px'
					},
					items: [
						{
							xtype: 'button',
							text: 'Alterar Senha',
							itemId: 'alterarsenha',
							iconCls: 'icon-key',
							width: 182,           
							scale: 'large' //,
							//bodyPadding: 15
						}
					]
				},
				{
					xtype: 'form',
					frame: false,
					bodyStyle: {
						//background: '#eee',
						Padding: '15px'
					},
					items: [
						{
							xtype: 'button',
							text: 'Alterar Senha',
							itemId: 'alterarsenha',
							iconCls: 'icon-cancel',
							width: 182,           
							scale: 'large' //,
							//bodyPadding: 15
						}
					]
				}				
			]
		}
	]
});