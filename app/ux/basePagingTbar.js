Ext.define('SistemaBolsa.ux.basePagingTbar', {
    extend: 'Ext.toolbar.Paging',
    alias: 'widget.basePagingTbar',
    alternateClassName: [
        'basePagingTbar'
    ],
    requires: [
        'Ext.toolbar.Paging'
    ],
    /**
     * @cfg {Boolean} hideRefresh
     * Hide the refresh button when true
     * Default : false
     */
    hideRefresh: false,
    /**
     * @cfg {Boolean} saveParamsOnLoad
     * Convert params on load to extraParams
     * Default : false
     */
    saveParamsOnLoad: false,
    /**
     * @cfg {Object} alternateHandlers
     * Object with handler functions for first,prev,refresh,next,last
     * Sample:
     *    alternateHandlers: {
     *         first: me.PageOne,
     *         prev: me.PagePrev,
     *         refresh: me.PageRefresh,
     *         next: me.PageNext,
     *         last: me.PageLast
     *    }
     * Default : false
     */
    alternateHandlers: false,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            listeners: {
                afterrender: function(tbar) {
                    if (tbar.hideRefresh) {
                        tbar.down('#refresh').hide();
                    }
                }
            }
        });
        me.callParent();
        // saveParamsOnLoad just fixates the params in the extraParams, before the load
        if (me.saveParamsOnLoad) {
            var store = me.store;
            store.on('beforeload', function(store, operation) {
                var params = operation.params;
                var proxy = store.getProxy();
                Ext.iterate(params, function(item, value) {
                    proxy.extraParams[item] = value;
                });
            }, me);
        }
        if (Ext.isObject(me.alternateHandlers)) {
            Ext.iterate(me.alternateHandlers, function(item, value) {
                var c = me.down('#' + item);
                if (c) {
                    if (Ext.isFunction(value)) {
                        c.setHandler(value);
                    }
                }
            });
        }
    }
});