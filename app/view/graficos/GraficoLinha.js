Ext.define('SistemaBolsa.view.graficos.GraficoLinha', {
   extend: 'Ext.chart.Chart',

    alias: 'widget.graficolinha',
    autoScroll: true,

    animate: true,
    maximized: true,
    store: 'SistemaBolsa.store.graficos.GraficoLinhas',
    shadow: true,
    insetPadding: 60,
    theme: 'Base:gradients',

    axes: [{
        type: 'Numeric',
        minimum: 0,
        position: 'left',
        fields: ['valor'],
        title: 'Valor',
        minorTickSteps: 1,
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 0.2
            }
        }
    }, {
        type: 'Numeric',
        position: 'bottom',
        fields: ['hora'],
        title: 'Hora'
    }],
    series: [{
        type: 'line',
        highlight: {
            size: 30,
            radius: 20
        },
        axis: 'left',
        xField: 'hora',
        yField: 'valor',
        markerConfig: {
            type: 'cross',
            size: 3,
            radius: 3,
            'stroke-width': 0.5
        }
    }, {
        type: 'line',        
        highlight: {
            size: 1,
            radius: 1
        },
        axis: 'left',
        smooth: true,
        xField: 'hora',
        yField: 'valor',        
        markerConfig: {
            type: 'circle',
            size: 1,
            radius: 1,
            'stroke-width': 0.5
        }
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Salvar Gráfico',
            itemId: 'salvar_graf_linha',
            iconCls: 'icon-save'
        }, {
            xtype: 'button',
            text: 'Atualizar',
            itemId: 'atualizar_graf_linha',
            iconCls: 'icon-atualizar'
        }]
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