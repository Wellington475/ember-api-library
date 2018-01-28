import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
	model(param){
		if(param.book_id){
			get(this, 'store').findRecord('book', param.book_id, { backgroundReload: false }).then((book) => {
				book.destroyRecord().then(() => this.transitionTo('books'));
			});
		}
	}
});
