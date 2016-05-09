import Ember from 'ember';

export default Ember.Component.extend({

  content: null,

  isDragable: true,

  columns: null,

  dragStart: function(event){
    event.dataTransfer.setData('text/data', this.get('content.id'));
  },

  dragOver: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    var id = event.dataTransfer.getData('text/data');

    console.log(id);

    if(this.attrs.onDropCard){
      this.attrs.onDropCard(id);
    }
  }

});
