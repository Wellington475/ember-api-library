import DS from 'ember-data';

const {
  RESTAdapter
} = DS;

export default RESTAdapter.extend({
  host: 'http://salabimsalabompoto.com/api'
  //host: 'https://library-rennanmore.c9users.io/api'
});
