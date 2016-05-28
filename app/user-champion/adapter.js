import LtAdapter from '../ltadapter/adapter';

export default LtAdapter.extend({

  urlForQuery: function(params, modelName){

    //console.log(params);

    return this.get('host') + '/' + this.get('namespace') + '/userchampions//1/JUNGLE';
  }

});
