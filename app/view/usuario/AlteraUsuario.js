Ext.define('SistemaBolsa.view.usuario.AlteraUsuario', {
    extend: 'Ext.window.Window',

    alias: 'widget.alterausuario',

    iconCls: 'icon-grid',
    layout: 'fit',
    //maximized: true,    

    autoShow: true,

    height: 425,
    width: 650,
    title: 'Alterar Dados do Usuarios',
     
    items:[
        {
            //xtype: 'form',
            //layout: 'anchor',
            bodyPadding: 5,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 30,
                msgTarget: 'qtip'
            },

            items: [
                {
                    xtype: 'fieldset',
                    title: 'Suas informações de contato',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',                    
                            fieldLabel: 'Nome',
                            layout: 'hbox',
                            combineErrors: true,
                            defaultType: 'textfield',
                            defaults: {
                                hideLabel: 'true'
                            },
                            items: [{
                                name: 'nome',
                                fieldLabel: 'Nome',
                                flex: 2,
                                emptyText: 'Nome',
                                allowBlank: false
                            }, {
                                name: 'sobrenome',
                                fieldLabel: 'Sobrenome',
                                flex: 3,
                                margins: '0 0 0 6',
                                emptyText: 'Sobrenome',
                                allowBlank: false
                            }]
                        }, 
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                    fieldLabel: 'Email',
                                    name: 'email',
                                    vtype: 'email',
                                    flex: 1,
                                    allowBlank: false
                                }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                    fieldLabel: 'CPF',
                                    name: 'cpf',
                                    //vtype: 'email',
                                    flex: 1,
                                    allowBlank: false,                                    
                                    emptyText: 'xxx.xxx.xxx-xx',
                                    maskRe: /[\d\.\d\-]/,
                                    regex: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
                                    regexText: 'Deve ser neste formato xxx.xxx.xxx-xx'
                                    //maxLength : 11
                                }, {
                                    fieldLabel: 'RG',
                                    name: 'rg'                                   
                                }]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Data Nascimento',
                                    name: 'data-nasc',
                                    maxValue: new Date()
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    fieldLabel: 'Telefone',
                                    labelWidth: 100,
                                    name: 'telefone',
                                    width: 200
                                }
                            ]
                        }   
                    ]                       
                }, {
                    xtype: 'fieldset',
                    title: 'Endereço',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            labelWidth: 90,
                            fieldLabel: 'Endereço',
                            name: 'endereco',                                    
                            billingFieldName: 'endereco'
                        },
                        {
                            labelWidth: 90,
                            fieldLabel: 'Bairro',
                            name: 'bairro',                                    
                            billingFieldName: 'bairro'
                        }, 
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '0 0 5 0',   
                            items: [
                                {
                                    labelWidth: 90,
                                    xtype: 'textfield',
                                    fieldLabel: 'Cidade',
                                    name: 'cidade',
                                    billingFieldName: 'cidade',
                                    flex: 1
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Estado',
                                    id: 'estado',
                                    store: 'SistemaBolsa.store.combobox.ComboEstados',
                                    queryMode: 'local',
                                    displayField: 'Estado',
                                    valueField: 'Estado',
                                    value: 'SC',
                                    editable: false,
                                    labelWidth: 60,
                                    width: 155
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Cod. Postal',
                                    labelWidth: 80,
                                    name: 'mailingPostalCode',
                                    billingFieldName: 'billingPostalCode',
                                    width: 160,
                                    maxLength: 10,
                                    enforceMaxLength: true,
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{5}(\-\d{3})?$/,
                                    regexText: 'Deve ser neste formato xxxxx or xxxxx-xxxx'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '0 0 5 0',   
                            items: [
                                {
                                    labelWidth: 90,
                                    xtype: 'textfield',
                                    fieldLabel: 'Complemento',
                                    name: 'complemento',
                                    billingFieldName: 'complemento',
                                    flex: 1
                                },
                                {
                                    labelWidth: 90,
                                    xtype: 'textfield',
                                    fieldLabel: 'Número',
                                    name: 'numero',
                                    billingFieldName: 'numero'
                                }
                            ]
                        }
                    ]
                }, {
                    xtype: 'fieldset',
                    title: 'Outros',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [                        
                        {
                            xtype: 'textfield',
                            name: 'celular',
                            fieldLabel: 'Celular',
                            allowBlank: false
                        }
                    ]
                }
            ]            
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items: [{
                xtype: 'button',
                text: 'Cancelar',
                itemId: 'cancel',
                iconCls: 'icon-cancel'
            },

            {
                xtype: 'button',
                text: 'Salvar',
                itemId: 'save',
                iconCls: 'icon-save'
            }
        ]
    }]
    
});