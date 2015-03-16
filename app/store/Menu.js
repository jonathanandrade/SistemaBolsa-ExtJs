Ext.define('SistemaBolsa.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'SistemaBolsa.model.MenuRoot'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'SistemaBolsa.model.MenuRoot',
            storeId: 'MenuStore',
            proxy: {
                type: 'ajax',
                url: 'data/menu.json',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        }, cfg)]);
    }
});