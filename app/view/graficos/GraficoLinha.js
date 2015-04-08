Ext.define('SistemaBolsa.view.graficos.GraficoLinha', {

    extend: 'Ext.chart.Chart',

    alias: 'widget.graficolinha',
    store: 'SistemaBolsa.store.graficos.GraficoLinhas',
    autoScroll: true,

    axes: [{
        title: 'Valor',
        type: 'Numeric',
        position: 'left',
        fields: ['valor'],
        minimum: 0,
        maximum: 20,
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
        dateFormat: 'ga'
    }],

    series: [{
        type: 'line',
        xField: 'hora',
        yField: 'valor',
        highlight: {
            size: 1,
            radius: 1
        },
        markerConfig: {
           type: 'cross',
           //size: 1,
           radius: 3,
           //'stroke-width': 0
        }
    }]


    /*    
        extend: 'Ext.grid.Panel',

            alias: 'widget.graficolinha',

            store: 'SistemaBolsa.store.graficos.GraficoLinhas',

            columns: [{
                xtype: 'rownumberer',
                width: 30
            }, {
                text: 'Valor',
                width: 170,
                dataIndex: 'valor'
            }, {
                text: 'Hora',
                width: 170,
                dataIndex: 'hora'
            }],

            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Novo',
                    itemId: 'add',
                    iconCls: 'icon-add'
                }, {
                    xtype: 'button',
                    text: 'Excluir',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                }]
            }]
    */

});