/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyPanel', {
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.MyComboBox'
    ],

    height: 257,
    width: 584,
    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Button w/ Menu',
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'mycombobox'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Radio Options',
                                        menu: {
                                            xtype: 'menu',
                                            width: 120,
                                            items: [
                                                {
                                                    xtype: 'component',
                                                    html: '<b class="menu-title">Choose a Theme</b>'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    text: 'Aero Glass'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    text: 'Vista Black'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    text: 'Gray Theme'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    text: 'Default Theme'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'calendar',
                                        text: 'Choose a Date',
                                        menu: {
                                            xtype: 'datemenu'
                                        }
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Choose a Color',
                                        menu: {
                                            xtype: 'colormenu'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Users',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                plain: true,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        text: 'Menu Item'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'MyButton'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: 'MyButton'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: 'MyButton'
                        },
                        {
                            xtype: 'button',
                            text: 'MyButton'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});