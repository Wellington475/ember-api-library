import DS from 'ember-data';
import ENV from 'api-library/config/environment';

const {
  RESTAdapter
} = DS;

export default RESTAdapter.extend({
  host: ENV.APP.url
  //host: 'https://library-rennanmore.c9users.io/api'
});
