// Creation of data model
Ext.define("User", {
  extend: "Ext.data.Model",
  fields: ["name", "email", "phone"],
});

// Store data
var userStore = Ext.create("Ext.data.Store", {
  model: "User",
  data: [
    { name: "Lisa", email: "lisa@simpsons.com", phone: "555-111-1224" },
    { name: "Bart", email: "bart@simpsons.com", phone: "555-222-1234" },
    { name: "Homer", email: "homer@simpsons.com", phone: "555-222-1244" },
    { name: "Marge", email: "marge@simpsons.com", phone: "555-222-1254" },
  ],
});

// Store moreData
let arr = [];
const moreData = (n) => {
  for (let N = 0; N < n; N++) {
    let record = {
      name: "Milhouse" + N,
      email: "milhouse" + N + "@simpsons.com",
      phone: "555-" + N,
    };
    arr[N] = record;
  }
  return arr;
};

var moreData = Ext.create("Ext.data.Store", {
  model: "User",
  data: makeRecords(1001),
});

Ext.application({
  name: "Fiddle",

  launch: function () {
    Ext.create("Ext.grid.Panel", {
      renderTo: document.body,
      store: useStore,
      forceFit: true,
      // width: 400,
      // height: 200,
      title: "Application Users",
      columns: [
        {
          text: "Name",
          flex: 1,
          sortable: false,
          hideable: false,
          dataIndex: "name",
        },
        {
          text: "Email Address",
          flex: 1,
          dataIndex: "email",
          xtype: "templatecolumn",
          tpl: '<a href="mailto: {email}" target="_blank">{email}</a>',
          hidden: false,
        },
        {
          text: "Phone Number",
          flex: 1,
          dataIndex: "phone",
        },
      ],
    });
  },
});
