Ext.define('SistemaBolsa.view.graficos.GraficoBarra', {
    extend: 'Ext.chart.Chart',

    alias: 'widget.graficobarra',
    store: 'SistemaBolsa.store.graficos.GraficoBarras',

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
        type: 'column',        
        yField: 'valor',
        xField: 'hora',
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