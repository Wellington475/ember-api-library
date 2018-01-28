import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model(param){
    return get(this, 'store').peekRecord('book', param.book_id) ? 
           get(this, 'store').peekRecord('book', param.book_id) :
           get(this, 'store').findRecord('book', param.book_id);
  },

  setupController(controller, model){
    set(controller, 'book', model);
    return this._super(...arguments);
  }
});

// ember g component books/book-list
// ember g component books/book-item
// ember g component books/book-form
