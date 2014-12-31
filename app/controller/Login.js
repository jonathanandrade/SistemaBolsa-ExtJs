Ext.define('SistemaBolsa.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [
        'SistemaBolsa.util.Alert'
    ],

    views: [
        'Login',
        //'Log.view.principal.LogGrid'
        // 'authentication.CapsLockTooltip'
    ],


    init: function(application) {
        this.control({
            "login form button#submit": {
                click: this.onButtonClickSubmit
            },
            "login form button#cancel": {
                click: this.onButtonClickCancel
            },
            "login form textfield": {
                specialkey: this.onTextfielSpecialKey
            },
            "login form textfield[name=password]": {
                keypress: this.onTextfielKeyPress
            },
            "loggrid button#arquivo > menu > menuitem#logout": {
                click: this.onButtonClickLogout
            }
        });

        

    },

    onButtonClickSubmit: function(button, e, options) {
        console.log('Login Submit');

        var formPanel = button.up('form'),
            login = button.up('login'),
            
            values = formPanel.getValues(),
            user = values.loginUsername,
            pass = values.loginPassword;
            
            if(formPanel.getForm().isValid()) {

                pass = SistemaBolsa.util.MD5.encode(pass);

                Ext.Ajax.request({
                    url: 'php/login/login.php',
                    
                    params: {
                        user: user,
                        password: pass
                    },

                    failure: function(conn, response, options, e0pts) {
                        Ext.MessageBox.show({
                            title: 'Erro',
                            msg: 'Problema com a conexão',
                            icon: Ext.MessageBox.ERROR
                        });
                    },

                    success: function(conn, response, options, e0pts) {
                        var result = Ext.JSON.decode(conn.responseText, true);

                        if (!result) {
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        } 

                        if (result.success) {
                            login.close();
                            Ext.create('SistemaBolsa.view.Viewport');
                        } else {
                            Ext.MessageBox.show({
                                title: 'Erro',
                                msg: result.msg,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                        
                    }

                });
            }

    },

    onButtonClickCancel: function(button, e, options) {
        //console.log('Operação cancelada...');
        button.up('form').getForm().reset();
    },

    // Quando o cara está digitando e aperta enter (foco está no form)
    onTextfielSpecialKey: function(field, e, options) {
        if (e.getKey() == e.ENTER) {
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },

    onTextfielKeyPress: function(field, e, options) {
        var charCode = e.getCharCode();

        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {

            if (this.getCapslockTooltip() === undefined) {
                Ext.widget('capslocktooltip');
            }

            this.getCapslockTooltip().show();

        } else {

            if (this.getCapslockTooltip() !== undefined) {
                this.getCapslockTooltip().hide();
            }
        }
    },

    onButtonClickLogout: function(button, e, options) {
        console.log('teste');

        Ext.Ajax.request({
            url: 'php/login/logout.php',
            success: function(conn, response, options, eOpts) {

                var result = Log.util.Util.decodeJSON(conn.responseText);

                if (result.success) {

                    button.up('mainviewport').destroy();
                    window.location.reload();
                } else {

                    Log.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {

                Log.util.Util.showErrorMsg(conn.responseText);
            }
        });
    }
    
});