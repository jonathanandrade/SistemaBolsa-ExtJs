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

        console.log('CHAMOU');
       
        var grid = Ext.ComponentQuery.query('mainpanel panel grid')[0];
        //console.log(panel);
        /*
        Ext.Ajax.request({
            url: 'php/teste.xml',
            method: 'GET',            
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);   

                console.log(result);
                
                /*
                var modelUsuario = Ext.create('SistemaBolsa.model.Cotacao', {
                    codigo: result.grid[0].codigo,
                    nome: result.grid[0].nome,
                    medio: result.grid[0].medio,
                    ultimo: result.grid[0].ultimo,
                    oscilacao: result.grid[0].oscilacao                  
                    
                })
                

            }
        });
*/

    }

});