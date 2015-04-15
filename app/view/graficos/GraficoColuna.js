Ext.define('SistemaBolsa.view.graficos.GraficoColuna', {
    extend: 'Ext.chart.Chart',

    alias: 'widget.graficocoluna',
    store: 'SistemaBolsa.store.graficos.GraficoColuna',

    style: 'background:#fff',
    animate: true,
    shadow: true,
    axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['valorAtual'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0.00')
        },
        title: 'Number of Hits',
        grid: true,
        minimum: 0
    }],
    series: [{
        type: 'column',
        axis: 'bottom',
        highlight: true,
        tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function(storeItem, item) {
                //this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'data1',
            renderer: Ext.util.Format.numberRenderer('0.00'),
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'valorAtual',
        //yField: 'data1'
    }]

});