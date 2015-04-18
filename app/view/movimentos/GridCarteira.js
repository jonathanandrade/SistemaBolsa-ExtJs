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
    }, {
        menuDisabled: true,
        sortable: false,
        xtype: 'actioncolumn',
        text: 'Vender',
        width: 60,
        items: [{
            iconCls: 'icon-delete',
            tooltip: 'Vender Ação',
            handler: function(grid, rowIndex, colIndex) {
                var win = Ext.create('SistemaBolsa.view.movimentos.FormVendas'); // Cria a janela
                win.setTitle('Venda de Ações'); // Seta o título
                var grid = Ext.ComponentQuery.query('gridcarteira')[0]; // Recebe a referencia do grid
                var rec = grid.getStore().getAt(rowIndex); // Pega os valores da linha selecionada
                //console.log(rec);
                var form = win.down('form'); // Pega a referencia do form
                form.loadRecord(rec); // Carrega os dados no form
            }
        }]
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

    if (record.record.data.mediaAtual > record.record.data.cotacao) {
        // Perdendo dinheiro
        return '<span style="color:red;">' + 'R$ ' + val + '</span>';
    } else if (record.record.data.mediaAtual < record.record.data.cotacao) {
        // Ganhando dinheiro
        return '<span style="color:green;">' + 'R$ ' + val + '</span>';
    }

    return val;
}