import { moduleFor, test } from 'ember-qunit';
import DS from 'ember-data';
import EmberError from '@ember/error';

moduleFor('adapter:book', 'Unit | Adapter | book', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('DS.AdapterError', function(assert) {
  let error = new DS.AdapterError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof EmberError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'Adapter operation failed');
});

test('DS.InvalidError', function(assert) {
  let error = new DS.InvalidError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter rejected the commit because it was invalid');
});

test('DS.TimeoutError', function(assert) {
  let error = new DS.TimeoutError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter operation timed out');
});

test('DS.UnauthorizedError', function(assert) {
  let error = new DS.UnauthorizedError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter operation is unauthorized');
});

test('DS.ForbiddenError', function(assert) {
  let error = new DS.ForbiddenError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter operation is forbidden');
});

test('DS.NotFoundError', function(assert) {
  let error = new DS.NotFoundError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter could not find the resource');
});

test('DS.ConflictError', function(assert) {
  let error = new DS.ConflictError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter operation failed due to a conflict');
});

test('DS.ServerError', function(assert) {
  let error = new DS.ServerError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'The adapter operation failed due to a server error');
});

test('CustomAdapterError', function(assert) {
  let CustomAdapterError = DS.AdapterError.extend();
  let error = new CustomAdapterError();

  assert.ok(error instanceof Error);
  assert.ok(error instanceof DS.AdapterError);
  assert.ok(error.isAdapterError);
  assert.equal(error.message, 'Adapter operation failed');
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
