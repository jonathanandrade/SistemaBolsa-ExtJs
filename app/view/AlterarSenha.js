Ext.define('SistemaBolsa.view.AlterarSenha', {    
    extend: 'Ext.window.Window',
    alias: 'widget.alterarsenha',

    autoShow: true,
    height: 170,
    width: 360,

    layout: {
        type: 'fit'
    },

    iconCls: 'icon-key',
    title: "Alterar Senha",
    modal: true,   // Deixa como tela principal, impedindo alterações na parte de baixo
    
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
            msgTarget: 'under'
        },
        items: [
        {
            xtype: 'textfield',
            name: 'iduser',
            fieldLabel: 'ID',
            hidden: true
        },
        {
            xtype: 'fieldcontainer',                    
            fieldLabel: 'Login',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                name: 'login',
                fieldLabel: 'Login',
                flex: 1,
                disabled: true
            }]
        }, {
            inputType: 'password',
            name: 'senha',
            fieldLabel: 'Nova Senha',
            id: 'senha',
            maxLength: 15,            
            //vtype: 'customPass',
            allowBlank: false,
            msgTarget: 'under'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items: [{
                xtype: 'button',
                itemId: 'cancel',
                iconCls: 'icon-cancel',
                text: 'Cancelar'
            },{
                xtype: 'button',
                text: 'Salvar',
                itemId: 'save',
                iconCls: 'icon-save'
            }]
        }]
    }]
    
});