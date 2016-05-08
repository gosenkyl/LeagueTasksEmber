import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    payload = {"champions": payload};

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
