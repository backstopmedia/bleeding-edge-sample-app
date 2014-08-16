var merge = require('merge');

// this just emulates an in memory database with a super
// simple api
function DataStore(name){
  if (!this instanceof DataStore) { return new DataStore(name); }
  var store = this;

  DataStore.instances[name] = store;

  store.items = [];
  store.itemsById = [];

  // update, or insert if it doesn't exist
  store.upsert = function(item){
    if (!item.id) {
      // random 9 hex digit code
      item.id = store.makeId();
    }

    if (store.itemsById[item.id]) {
      // merge properties into the item
      // this also causes the item in the array to be updated
      merge(store.itemsById[item.id], item); 
    }
    else {
      store.itemsById[item.id] = item;
      store.items.push(item);
    }
  };

  store.getById = function(id){
    return store.itemsById[id] || null;
  };

  store.getAll = function(){
    return store.items;
  };

  store.removeById = function(id){
    var item = store.itemsById[id];

    if (!item) {
      var error = new Error("DataStore " + name + " has no object with id " + id);
      error.name = "DoesNotExist";
      throw error;
    }

    delete store.itemsById[id];
    for (var i=0; i<store.items.length; i++) {
      if (store.items[i] === item) {
        store.splice(i, 1);
        break;
      }
    }
  };

  // remove an item where test(item) returns a falsy value
  store.removeWhere = function(test) {
    for (var id in store.itemsById) {
      if (!test(store.itemsById[id])) {
        store.removeOne(id);
      }
    }
  }

  // a bit paranoid, but it prevents duplicate ids within a store
  store.makeId = function(){
    var id;

    do {
      id = Math.floor(Math.random()*Math.pow(2, 33)+Math.pow(2, 32)-2).toString(16);
    } while (store.itemsById[id]);

    return id;
  };

  return store;
}

DataStore.instances = {};

module.exports = DataStore;