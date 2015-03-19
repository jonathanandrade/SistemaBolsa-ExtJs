Ext.define('SistemaBolsa.view.usuario.FormUsuario', {
    extend: 'Ext.window.Window',

    alias: 'widget.formusuario',

    //iconCls: 'icon-grid',
    layout: 'fit',
    //maximized: true,    

    autoShow: true,

    height: 450,
    width: 650,
    title: 'Editar/Cadastrar Usuarios',
    modal: true,
     
    items:[
        {
            xtype: 'form',
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
                    title: 'Informações de Acesso',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
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
                                emptyText: 'Login',
                                allowBlank: false
                            }, {
                                inputType: 'password',
                                name: 'senha',
                                fieldLabel: 'Senha',
                                width: 200,
                                margins: '0 0 0 6',
                                emptyText: 'Senha',
                                allowBlank: false
                            }]
                        }]
                },
                {
                    xtype: 'fieldset',
                    title: 'Suas Informações de Contato',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
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
                                    labelWidth: 100,
                                    name: 'dataNasc',
                                    width: 300,
                                    maxValue: new Date()
                                },
                                {
                                    fieldLabel: 'Telefone',
                                    labelWidth: 150,
                                    name: 'telefone' //,
                                    //width: 303
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
                            labelWidth: 50,
                            fieldLabel: 'Endereço',
                            name: 'endereco',                                    
                            billingFieldName: 'endereco'
                        },
                        {
                            labelWidth: 50,
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
                                    labelWidth: 50,
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
                                    name: 'estado',
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
                                    name: 'cep',
                                    billingFieldName: 'cep',
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
                            labelWidth: 40,
                            xtype: 'textfield',
                            name: 'celular',
                            fieldLabel: 'Celular'
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
                iconCls: 'icon-save',                
                formBind: true
            }
        ]
    }]
    
});