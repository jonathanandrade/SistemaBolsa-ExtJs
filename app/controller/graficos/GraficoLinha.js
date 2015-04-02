Ext.define('SistemaBolsa.controller.graficos.GraficoLinha', {
    extend: 'Ext.app.Controller',

    stores: [
        'SistemaBolsa.store.graficos.GraficoLinhas'
    ],

    init: function(application) {
        this.control({
            "graficolinha": { 
                render: this.onWindowRender
            },
            "graficolinha toolbar button#salvar_graf_linha": {
            	click: this.onSaveClick
            },
            "graficolinha toolbar button#atualizar_graf_linha": {
            	click: this.onAtualizarClick
            }
        });
    },

    onWindowRender: function(panel, eOpts) {
    	//console.log(panel);
    	panel.getStore();
    },

    onSaveClick: function(btn, e, e0pts) {
    	Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice) {
                if (choice == 'yes') {
                    chart.save({
                        type: 'image/png'
                    });
                }
            });
    },

    onAtualizarClick: function(btn, e, e0pts) {
    	console.log('2');
    	// Add a short delay to prevent fast sequential clicks
        //window.loadTask.delay(100, function() {
        //    store1.loadData(generateData(8));
        //});
    }


});