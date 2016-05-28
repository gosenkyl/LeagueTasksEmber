import Ember from 'ember';

export default Ember.Component.extend({

  content: null,

  attributeBindings : [ 'draggable' ],
  draggable         : 'true',

  dragStart: function(event){
    return event.dataTransfer.setData('text/data', this.get('content.name'));
  }

});
