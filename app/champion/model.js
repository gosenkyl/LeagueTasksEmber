import DS from 'ember-data';

export default DS.Model.extend({

  key: DS.attr('string'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  image: DS.attr('string')

});
