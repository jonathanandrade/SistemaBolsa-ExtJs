Ext.define('SistemaBolsa.view.graficos.GraficoLinha', {

    extend: 'Ext.chart.Chart',

    alias: 'widget.graficolinha',
    store: 'SistemaBolsa.store.graficos.GraficoLinhas',

    insetPadding: 30, // Padding interior

    axes: [{
        title: 'Valor',
        type: 'Numeric',
        position: 'left',
        fields: ['valor'],
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
        xField: 'hora',
        yField: 'valor',
        // Exibir valores em uma janela quando passa o mouse por cima do ponto
        tips: {
            trackMouse: true,
            width: 200, // Comprimento da caixinha
            height: 25, // Altura da caixinha
            renderer: function(storeItem, item, attr) {
                this.setTitle(' Hora: ' + storeItem.get('hora') + ' - ' + 'Valor: R$ ' + storeItem.get('valor'));
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