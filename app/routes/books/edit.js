import Route from '@ember/routing/route';
import { set, get } from '@ember/object';
 
export default Route.extend({
	model(param){
		return get(this, 'store').peekRecord('book', param.book_id) ? get(this, 'store').peekRecord('book', param.book_id) : get(this, 'store').findRecord('book', param.book_id);
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
