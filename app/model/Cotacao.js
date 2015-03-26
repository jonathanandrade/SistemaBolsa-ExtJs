Ext.define('SistemaBolsa.model.Cotacao', {
	extend: 'Ext.data.Model',

	fields: [{name: 'Codigo', mapping: '@Codigo'},
			 {name: 'Nome', mapping: '@Nome'},
			 {name: 'Medio', mapping: '@Medio'},
			 {name: 'Ultimo', mapping: '@Ultimo'},
			 {name: 'Oscilacao', mapping: '@Oscilacao'}]

});