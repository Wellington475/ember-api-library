export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */


  this.urlPrefix = 'http://salabimsalabompoto.com/api';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/books', 'books');

  this.get('/books/:book_id', 'book')

  this.post('/books', (db, request) => {
    return db.books.create(JSON.parse(request.requestBody).book);
  });
 
  this.put('/books/:book_id', (db, request) => {
    return db.books.find(request.params.book_id).update(
      JSON.parse(request.requestBody).book);
  });

  this.del('/books/:book_id', function(db, request) {
    db.books.find(request.params.book_id).destroy();
  });
}
