Ext.define('SistemaBolsa.view.usuario.AlteraUsuario', {
    extend: 'Ext.window.Window',

    alias: 'widget.alterausuario',

    iconCls: 'icon-grid',
    layout: 'fit',
    //maximized: true,    

    autoShow: true,

    height: 410,
    width: 650,
    title: 'Cadastro de Usuarios',
     
    items:[
        {
            //xtype: 'form',
            //layout: 'anchor',
            bodyPadding: 5,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: 'qtip'
            },

            items: [
                {
                    xtype: 'fieldset',
                    title: 'Your Contact Information',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',                    
                            fieldLabel: 'Name',
                            layout: 'hbox',
                            combineErrors: true,
                            defaultType: 'textfield',
                            defaults: {
                                hideLabel: 'true'
                            },
                            items: [{
                                name: 'firstName',
                                fieldLabel: 'First Name',
                                flex: 2,
                                emptyText: 'First',
                                allowBlank: false
                            }, {
                                name: 'lastName',
                                fieldLabel: 'Last Name',
                                flex: 3,
                                margins: '0 0 0 6',
                                emptyText: 'Last',
                                allowBlank: false
                            }]
                        }, 
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [{
                                    fieldLabel: 'Email Address',
                                    name: 'email',
                                    vtype: 'email',
                                    flex: 1,
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Phone Number',
                                    labelWidth: 100,
                                    name: 'phone',
                                    width: 200,
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Must be in the format xxx-xxx-xxxx'
                            }]
                        }    
                    ]                       
                }, {
                    xtype: 'fieldset',
                    title: 'Mailing Address',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            labelWidth: 90,
                            fieldLabel: 'Street Address',
                            name: 'mailingStreet',                                    
                            billingFieldName: 'billingStreet',
                            allowBlank: false
                        }, 
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '0 0 5 0',   
                            items: [
                                {
                                    labelWidth: 90,
                                    xtype: 'textfield',
                                    fieldLabel: 'City',
                                    name: 'mailingCity',
                                    billingFieldName: 'billingCity',
                                    flex: 1,
                                    allowBlank: false
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
                                    fieldLabel: 'Postal Code',
                                    labelWidth: 80,
                                    name: 'mailingPostalCode',
                                    billingFieldName: 'billingPostalCode',
                                    width: 160,
                                    allowBlank: false,
                                    maxLength: 10,
                                    enforceMaxLength: true,
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{5}(\-\d{4})?$/,
                                    regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
                                }
                            ]
                        }
                    ]
                }, {
                    xtype: 'fieldset',
                    title: 'Payment',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'radiogroup',
                            anchor: 'none',
                            layout: {
                                autoFlex: false
                            },
                            defaults: {
                                name: 'ccType',
                                margin: '0 15 0 0'
                            },
                            items: [{
                                inputValue: 'M',
                                boxLabel: 'Masculino',
                                checked: true
                            }, {
                                inputValue: 'F',
                                boxLabel: 'Feminino'
                            }]   
                        },
                        {
                            xtype: 'textfield',
                            name: 'ccName',
                            fieldLabel: 'Name On Card',
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