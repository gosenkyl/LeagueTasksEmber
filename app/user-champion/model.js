import DS from 'ember-data';

export default DS.Model.extend({

  champion: DS.belongsTo('champion'),
  userId: DS.attr(),
  roleId: DS.attr(),

  selected: DS.attr("boolean")

});
