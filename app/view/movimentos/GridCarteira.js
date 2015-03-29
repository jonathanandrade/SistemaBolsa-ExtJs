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

    //'idmovsaldo', 'siglaCons', 'qtdTotal', 'mediaAtual', 'cotacao'

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
            dataIndex: 'qtdTotal'
        }, {
            text: 'Sua média',
            width: 170,
            dataIndex: 'mediaAtual',
            renderer: Ext.util.Format.brMoney,
            renderer: change
        }, {
            text: 'Cotação atual',
            width: 170,
            dataIndex: 'cotacao',
            renderer: Ext.util.Format.brMoney
        }
    ],

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
        emptyMsg: 'Nenhum movimento encontrado'
    }]

});

//funcao colorir
function change(val) {
    if (val > '0.00') {
        return '<span style="color:green;">' + 'R$ ' + val + '</span>';
    } else if (val < '0.00') {
        return '<span style="color:red;">' + 'R$ ' + val + '</span>';
    }
    return val;
}