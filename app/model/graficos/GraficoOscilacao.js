Ext.define('SistemaBolsa.model.graficos.GraficoOscilacao', {
    
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'hora', type: 'string'},
    	{name: 'oscilacao', type: 'float'}
    ]

});