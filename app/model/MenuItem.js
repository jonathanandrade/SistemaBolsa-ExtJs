Ext.define('SistemaBolsa.model.MenuItem', {
    extend: 'Ext.data.Model',

    uses: [
        'SistemaBolsa.model.MenuRoot'
    ],

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'className'
        },
        {
            name: 'id'
        },
        {
            name: 'menu_id'
        }
    ],

    belongsTo: {
        model: 'SistemaBolsa.model.MenuRoot',
        foreignKey: 'menu_id'
    }
});