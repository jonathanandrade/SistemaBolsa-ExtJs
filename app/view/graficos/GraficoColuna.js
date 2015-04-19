Ext.define('SistemaBolsa.view.graficos.GraficoColuna', {
    extend: 'Ext.chart.Chart',

    alias: 'widget.graficocoluna',
    store: 'SistemaBolsa.store.graficos.GraficoColuna',

    style: 'background:#fff',
    animate: true,
    shadow: true,
    legend: {
        position: 'top'
    },
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['cotacao', 'mediaAtual'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0.00')
        },
        title: 'Valores',
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 2
            }
        },
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['siglaCons'],
        title: 'Média Atual x Cotação Atual'
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
            trackMouse: true,
            width: 260,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle('Sua média: ' + storeItem.get('mediaAtual') + ' - Cotação Atual: ' + storeItem.get('cotacao'));
            }
        },
        label: {
            //display: 'insideEnd',
            //'text-anchor': 'middle',
            //field: 'cotacao',
            //text: 'Jonathan',
            //renderer: Ext.util.Format.numberRenderer('0.00'),
            //orientation: 'vertical',
            //color: '#333'
        },
        //xField: ['cotacao'],
        yField: ['mediaAtual', 'cotacao']
    }]

});