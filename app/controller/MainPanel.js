Ext.define('SistemaBolsa.controller.MainPanel', {
	extend: 'Ext.app.Controller',

    models: [
        'SistemaBolsa.model.Cotacao'
    ],

    requires: [
        'SistemaBolsa.ux.notification.Notification'
    ],

    views: [
        'SistemaBolsa.view.MainPanel'
    ],

    init: function(application) {
        this.control({
            "mainpanel panel grid": {
                render: this.onRenderPanel
            }
        });
    },

    onRenderPanel: function(form, e0pts) {
       
        var grid = Ext.ComponentQuery.query('mainpanel panel grid')[0];
        var store = grid.getStore();

        var runner = new Ext.util.TaskRunner(),
        task = runner.start({
            run: function() {
                store.reload();
            },
            interval: 15000 //3000 = 3s
        });

    }

});