Ext.define('SistemaBolsa.store.Cotacoes', {
	extend: 'Ext.data.Store',

	model: 'SistemaBolsa.model.Cotacao',
	autoLoad: true,

	proxy: {
        type: 'ajax',
        url: 'php/xml/scriptXml.php',
        reader: {
            type: 'xml',
            record: 'Papel',
            root: 'ComportamentoPapeis'
        }
    }
});