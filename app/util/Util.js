Ext.define('SistemaBolsa.util.Util', {

    statics : {

        decodeJSON : function (text) {

            var result = Ext.JSON.decode(text, true);

            if (!result){
                result = {};
                result.success = false;
                result.msg = text;
            }

            return result;
        },

        showErrorMsg: function (text) {

            Ext.MessageBox.show({
                title: 'Erro',
                msg: 'Falha na conexão',
                icon: Ext.MessageBox.ERROR
            });
        }
    }
});