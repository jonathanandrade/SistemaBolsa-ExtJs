Ext.define('SistemaBolsa.view.movimentos.GridCarteira', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.gridcarteira',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Action'
    ],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,

    height: 400,
    width: 500,
    title: 'Venda de Ações',

    store: 'SistemaBolsa.store.Carteiras',

    columns: [{
        text: 'ID',
        width: 35,
        dataIndex: 'idmovsaldo',
        hidden: true
    }, {
        xtype: 'rownumberer'
    }, {
        text: 'Ação',
        width: 170,
        flex: 1,
        dataIndex: 'siglaCons'
    }, {
        text: 'Quantidade',
        width: 170,
        dataIndex: 'qtdTotal',
        tooltip: 'Quantidade total das ações.'
    }, {
        text: 'Sua média',
        width: 170,
        dataIndex: 'mediaAtual',
        renderer: Ext.util.Format.brMoney,
        renderer: change,
        tooltip: 'Valor médio das suas ações.'
    }, {
        text: 'Cotação atual',
        width: 170,
        dataIndex: 'cotacao',
        renderer: Ext.util.Format.brMoney,
        tooltip: 'Último valor da ação no dia.'
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            /*{
                xtype: 'button',
                text: 'Vender',
                itemId: 'vender',
                iconCls: 'icon-delete'
            }*/
        ]
    }, {
        xtype: 'pagingtoolbar',
        store: 'SistemaBolsa.store.Carteiras',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhum ação encontrado'
    }]

});

//funcao colorir
function change(val, record, index, store) {

    var mediaAtual = parseFloat(record.record.data.mediaAtual);
    var cotacao = parseFloat(record.record.data.cotacao);

    if (mediaAtual > cotacao) {
        // Perdendo dinheiro
        //console.log('Perdendo --> ' + mediaAtual + ' > ' + cotacao);
        return '<span style="color:red;">' + 'R$ ' + val + '</span>';
    } else if (mediaAtual <= cotacao) {
        // Ganhando dinheiro
        //console.log('Ganhando --> ' + mediaAtual + ' < ' + cotacao);
        return '<span style="color:green;">' + 'R$ ' + val + '</span>';
    }

    return val;
}