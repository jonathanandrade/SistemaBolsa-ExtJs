Ext.define('SistemaBolsa.view.Login', {
	
	extend: 'Ext.window.Window',
	alias: 'widget.login',
	autoShow: true,
	height: 170,
	width: 360,

	layout: {
		type: 'fit'
	},

	iconCls: 'icon-key',
	title: "Login",
	closeAction: 'hide',
	closable: false,

	items: [{
        xtype: 'form',
        frame: false,
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60,
            allowBlank: false,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'side'
        },
        items: [ {
            name: 'loginUsername',
            fieldLabel: 'Usuário',
            maxLength: 25,
            value: 'Jonathan'
        }, {
            inputType: 'password',
            name: 'loginPassword',
            fieldLabel: 'Senha',
            enableKeyEvents: true,
            id: 'password',
            maxLength: 15,
            value: 'qwe123',
            //vtype: 'customPass',
            msgTarget: 'side'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                xtype: 'button',
                itemId: 'cadastrar',
                iconCls: 'icon-users',
                text: 'Cadastrar'
            },{
                xtype: 'tbfill'
            },{
                xtype: 'button',
                itemId: 'cancel',
                iconCls: 'icon-cancel',
                text: 'Cancelar'
            },{
                xtype: 'button',
                itemId: 'submit',
                formBind: true,
                iconCls: 'key-go',
                text: 'Login'
            }]
        }]
    }]
	
});