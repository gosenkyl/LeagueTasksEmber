import Ember from 'ember';

export default Ember.Controller.extend({

  availableChamps: null,
  selectedChamps: null,

  actions : {

    drop: function (data) {

      var champ = this.store.findRecord("user-champion", data);
      champ.set("selected", true);

      console.log("DROPPED!" + test);

    }

  }
});
