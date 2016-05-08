import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){

    return Ember.RSVP.hash({
      selected: this.store.query('user-champion', {filter: { roleId: params.roleId, status: 'selected'} }),
      available: this.store.query('user-champion', {filter: { roleId: params.roleId, status: 'available'} })
    });

  }

});
