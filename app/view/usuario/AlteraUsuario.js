Ext.define('SistemaBolsa.view.usuario.AlteraUsuario', {
    extend: 'Ext.form.Panel',
    alias: 'widget.alterausuario',

    bodyPadding: 15,

    items: [{
        xtype: 'fieldset',
        title: 'Informações de Acesso',
        defaultType: 'textfield',
        width: 650,
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Login',
            labelStyle: 'font-weight:bold;',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                name: 'login',
                fieldLabel: 'Login',
                maxLength: 25,
                flex: 1,
                emptyText: 'Login',
                allowBlank: false
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: 'Suas Informações de Contato',
        defaultType: 'textfield',
        width: 650,
        items: [{
            xtype: 'textfield',
            name: 'iduser',
            fieldLabel: 'ID',
            hidden: true
        }, {

            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'Nome',
                labelStyle: 'font-weight:bold;',
                name: 'nome',
                vtype: 'nome',
                flex: 1,
                allowBlank: false
            }],

        }, {

            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'Sobrenome',
                labelStyle: 'font-weight:bold;',
                name: 'sobrenome',
                vtype: 'sobrenome',
                flex: 1,
                allowBlank: false
            }],

        }, {
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'Email',
                labelStyle: 'font-weight:bold;',
                name: 'email',
                vtype: 'email',
                flex: 1,
                allowBlank: false
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            defaultType: 'textfield',
            margin: '0 0 5 0',
            items: [{
                fieldLabel: 'CPF',
                labelStyle: 'font-weight:bold;',
                name: 'cpf',
                //vtype: 'email',
                flex: 1,
                allowBlank: false,
                emptyText: 'xxx.xxx.xxx-xx',
                maskRe: /[\d\.\d\-]/,
                regex: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
                regexText: 'Deve ser neste formato xxx.xxx.xxx-xx'
                    //maxLength : 11
            }]
        }, {
            xtype: 'textfield',
            fieldLabel: 'RG',
            labelStyle: 'font-weight:bold;',
            name: 'rg'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Data Nasc',
            labelStyle: 'font-weight:bold;',
            name: 'dataNasc',
            width: 270,
            maxValue: new Date()
        }, {
            fieldLabel: 'Telefone',
            labelStyle: 'font-weight:bold;',
            maxLength: 10,
            name: 'telefone'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Endereço',
        defaultType: 'textfield',
        layout: 'anchor',
        width: 650,
        items: [{

                xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                margin: '0 0 5 0',
                items: [{
                    fieldLabel: 'Endereço',
                    labelStyle: 'font-weight:bold;',
                    name: 'endereco',
                    vtype: 'endereco',
                    flex: 1,
                    allowBlank: false
                }],

            }, {

                xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                margin: '0 0 5 0',
                items: [{
                    fieldLabel: 'Bairro',
                    labelStyle: 'font-weight:bold;',
                    name: 'bairro',
                    vtype: 'bairro',
                    flex: 1,
                    allowBlank: false
                }],

            }, {

                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Cidade',
                    labelStyle: 'font-weight:bold;',
                    name: 'cidade',
                    billingFieldName: 'cidade',
                    flex: 1
                }]

            }, {

                xtype: 'combobox',
                fieldLabel: 'Estado',
                labelStyle: 'font-weight:bold;',
                id: 'alteraestado',
                name: 'alteraestado',
                store: 'SistemaBolsa.store.combobox.ComboEstados',
                queryMode: 'local',
                displayField: 'Estado',
                valueField: 'Estado',
                value: 'SC',
                editable: false,
                width: 250

            }, {

                xtype: 'textfield',
                fieldLabel: 'Cod. Postal',
                labelStyle: 'font-weight:bold;',
                name: 'cep',
                billingFieldName: 'cep',
                width: 250,
                maxLength: 10,
                enforceMaxLength: true,
                maskRe: /[\d\-]/,
                regex: /^\d{5}(\-\d{3})?$/,
                regexText: 'Deve ser neste formato xxxxx or xxxxx-xxxx'

            }, {

                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Número',
                    labelStyle: 'font-weight:bold;',
                    name: 'numero',
                    billingFieldName: 'numero',
                    width: 250
                }]
            }, {

                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Complemento',
                    labelStyle: 'font-weight:bold;',
                    name: 'complemento',
                    billingFieldName: 'complemento',
                    flex: 1
                }]

            },

        ]
    }, {

        xtype: 'fieldset',
        title: 'Outros',
        layout: 'hbox',
        height: 45,
        width: 650,
        items: [{
            xtype: 'textfield',
            name: 'celular',
            fieldLabel: 'Celular',
            labelStyle: 'font-weight:bold;',
            width: 250,
            maxLength: 10
        }]
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Salvar',
            itemId: 'save',
            iconCls: 'icon-save'
        }, {
            xtype: 'button',
            text: 'Cancelar',
            itemId: 'cancel',
            iconCls: 'icon-cancel'
        }]
    }]
    
});