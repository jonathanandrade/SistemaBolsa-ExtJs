Ext.define('SistemaBolsa.view.graficos.GraficoOscilacao', {
    extend: 'Ext.chart.Chart',

    alias: 'widget.graficooscilacao',
    store: 'SistemaBolsa.store.graficos.GraficoOscilacao',

    insetPadding: 30, // Padding interior

    axes: [{
        title: 'Oscilação',
        type: 'Numeric',
        position: 'left',
        fields: ['oscilacao'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0.00')
        },        
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 2
            }
        }
    }, {
        title: 'Hora',
        type: 'Category',
        position: 'bottom',
        fields: ['hora'],
        dateFormat: 'ga',
        label: {
            font: '9px Arial'
        }
    }],

    series: [{
        type: 'line',        
        yField: 'oscilacao',
        xField: 'hora',            
        fill: true,  // Preenche o corpo do gráfico
        // Exibir valores em uma janela quando passa o mouse por cima do ponto
        tips: {
            trackMouse: true,
            width: 240, // Comprimento da caixinha
            height: 25, // Altura da caixinha
            renderer: function(storeItem, item, attr) {
                this.setTitle(' Hora: ' + storeItem.get('hora') + ' - ' + 'Oscilação: ' + storeItem.get('oscilacao') + ' %');
            }
        },
        highlight: {
            //size: 1,
            radius: 3
        },
        markerConfig: {
            type: 'circle',
            //size: 0, // Tamanho da linha em destaque
            radius: 2, // Tamanho fixo dos pontos
            'stroke-width': 0
        }
    }]

});