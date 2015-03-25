Ext.define('SistemaBolsa.store.Cotacoes', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Cotacao',
	autoLoad: true,

	proxy: {
        type: 'ajax',
        url : 'php/teste.xml',
        reader: {
            type: 'xml',
            root  : 'ComportamentoPapeis',
            record: 'Papel'
        }
    }
});