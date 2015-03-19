Ext.define('SistemaBolsa.view.corretora.GridCorretora', {
	extend: 'Ext.grid.Panel',

    alias: 'widget.gridcorretora',

    requires: [
        'Ext.grid.RowNumberer'
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
        {
            text: 'ID',
            width: 35,
            dataIndex: 'idcorretora',
            hidden: true
        },
        {
             xtype: 'rownumberer'
        },
        {
            text: 'Razão Social',
            width: 170,
            dataIndex: 'razaoSocial',
            flex: 1
        }, {
            text: 'CNPJ',
            width: 170,
            dataIndex: 'cnpj'
        }, {
            text: 'Endereço',
           width: 170,
            dataIndex: 'endereco'
        }, 
        {
            text: 'Número',
            width: 50,
            dataIndex: 'numero'
        }, {
            text: 'Bairro',
            width: 170,
            dataIndex: 'bairro'
        }, {
            text: 'Cidade',
            width: 170,
            dataIndex: 'cidade'
        }, {
            text: 'Estado',
            width: 50,
            dataIndex: 'estado'
        }, {
            text: 'CEP',
            width: 50,
            dataIndex: 'cep'
        }, {
            text: 'Complemento',
            width: 170,
            dataIndex: 'complemento'
        }, {
            text: 'Contato',
            width: 170,
            dataIndex: 'contato'
        }, {
            text: 'Telefone',
            width: 170,
            dataIndex: 'telefone'
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
        }, {
            xtype: 'pagingtoolbar',
            store: 'SistemaBolsa.store.Corretoras',
            dock: 'top',
            displayInfo: true,
            emptyMsg: 'Nenhuma corretora encontrada'
        }]
});