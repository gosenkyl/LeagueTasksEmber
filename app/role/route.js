import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.store.query('user-champion', {filter: { roleId: params.roleId }});
  },

  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('availableChamps', model.filterBy("selected", false));
    controller.set('selectedChamps', model.filterBy("selected", true));
  }

});
