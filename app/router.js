import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home-page', {path: '/'});
  this.route('books', function() {
    this.route('view', {path: '/:book_id'});
    this.route('create');
    this.route('delete', {path: '/delete/:book_id'});
    this.route('edit', {path: '/edit/:book_id'});
  });
});

export default Router;
