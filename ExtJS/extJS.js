// Creation of data model
Ext.define('User', {
  extend: 'Ext.data.Model',
  fields: [ 'name', 'email', 'phone' ]
});

// Store moreData
let arr = [];
const moreData = (n) => {
  for (let N=0; N<n; N++) {
      let record = {name: 'Milhouse'+N, email: 'milhouse'+N+'@simpsons.com', phone: '555-'+N};
      arr[N] = record;
  }
  return arr;
}

// Store data
var userStore = Ext.create('Ext.data.Store', {
  model: 'User',
  data: [
      { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
      { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
      { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
      { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' },
  ].concat(moreData(1001))
});

// define ViewModel
// Ext.define('Title', {
//     extends: 'Ext.Panel',
//     bind: {
//         title: {showTitle}
//     }
// })

// Ext.define('MyViewModel', {
//     extend: 'Ext.app.ViewModel',
//     alias: 'viewmodel.myvm',
//     data: [{title: 'Simpson Characters'}]
// })
let showTitle = 'Simpsons Characters';
Ext.define('ViewModel', {
          extend: 'Ext.app.ViewModel',
          alias: 'viewmodel.test',
          data: {
              title: showTitle
          }
      });


Ext.application({
  name : 'Fiddle',
  launch : function() {

      Ext.create('Ext.grid.Panel', {
          renderTo: document.body,
          store: userStore,
          queryMode: 'local',
          viewModel: {
              type: 'test',
              formulas: {
                  storeCount: function(get) {
                      var store = get('userStore'),
                      var count = 0;
                      if (store) {
                          count = store.getCount();
                      }
                      return count;
                  }
              }
          },
          bind: {title: '{showTitle}'},
          columns: [
              {
                  text: 'Name',
                  flex: 1,
                  sortable: false,
                  hideable: false,
                  dataIndex: 'name',
              },
              {
                  text: 'Email Address',
                  flex: 1,
                  dataIndex: 'email',
                  xtype: 'templatecolumn',
                  tpl: '<a href="mailto: {email}" target="_blank">{email}</a>',
                  hidden: false,
              },
              {
                  text: 'Phone Number',
                  flex: 1,
                  dataIndex: 'phone',
              }
          ]

      });
  }
});