Ext.define('SistemaBolsa.view.corretora.GridCorretora', {
	extend: 'Ext.grid.Panel',

    alias: 'widget.gridcorretora',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.plugin.RowExpander'
    ],

    viewConfig: {
        stripeRows: true
    },

    autoShow: true,
    height: 400,
    width: 500,
    title: 'Cadastro de Corretoras',
    store: 'SistemaBolsa.store.Corretoras',

    columns: [
            {xtype: 'rownumberer'},
            {text: "ID", width: 35, dataIndex: 'idcorretora',hidden: true},            
            {text: "Razão Social", flex: 1, dataIndex: 'razaoSocial'},
            {text: "CNPJ", dataIndex: 'cnpj', width: 200},
            {text: "Contato", dataIndex: 'contato', width: 200},
            {text: "Telefone", dataIndex: 'telefone', width: 200},
            {text: "Cidade", dataIndex: 'cidade', width: 200}
        ],
    columnLines: true,
    enableLocking: true,

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<h4>Endereço e Informações:</h4>',
            '<p><b>Endereço:</b> {endereco}</p>',
            '<p><b>Cidade:</b> {cidade} - {estado}</p>',
            '<p><b>CEP:</b> {cep}</p>',
            '<p><b>Número:</b> {numero}</p>',
            '<p><b>Bairro:</b> {bairro}</p>',
            '<p><b>Complemento:</b> {complemento}</p>',
            '<p><b>Telefone:</b> {telefone}</p>'
        )
    }],
    collapsible: true,
    animCollapse: false,

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
    }, {
        xtype: 'pagingtoolbar',
        store: 'SistemaBolsa.store.Corretoras',
        dock: 'top',
        displayInfo: true,
        emptyMsg: 'Nenhuma corretora encontrada'
    }]
});