Ext.define('SistemaBolsa.model.MenuRoot', {
    extend: 'Ext.data.Model',

    uses: [
        'SistemaBolsa.model.MenuItem'
    ],

    fields: [
        {
            name: 'title'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'id'
        }
    ],

    hasMany: {
        model: 'SistemaBolsa.model.MenuItem',
        foreignKey: 'menu_id',
        name: 'items'
    }
});