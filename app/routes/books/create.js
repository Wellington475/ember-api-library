import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model(){
    return get(this, 'store').createRecord('book');
  },

  setupController(controller, model){
    set(controller, 'book', model);
    this._super(...arguments);
  },

  actions: {
    save(book){
      book.save().then(() => this.transitionTo('books')); 
    }
  }
});
