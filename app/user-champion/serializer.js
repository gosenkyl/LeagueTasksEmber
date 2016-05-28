import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  attrs:{

    champion: {key: "championId"}

  },

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    payload = {"user-champions": payload};

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
