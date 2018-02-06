import { moduleFor, test } from 'ember-qunit';

moduleFor('route:books/index', 'Unit | Route | books/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should display an alert', function(assert) {
  assert.expect(2);

  // with moduleFor, the subject returns an instance of the route
  let route = this.subject();

  // stub window.alert to perform a qunit test
  const expectedTextTeste = 'teste1';
  window.alert = (text) => {
    assert.equal(text, expectedTextTeste, `expect alert to display ${expectedTextTeste}`);
  };

  // call the _displayAlert function which triggers the qunit test above
  route._displayAlert(expectedTextTeste);

  // set up a second stub to perform a test with the actual action
  const expectedTextTesteDois = 'teste2';
  window.alert = (text) => {
    assert.equal(text, expectedTextTesteDois, `expected alert to display ${expectedTextTesteDois}`);
  };

  // Now use the routes send method to test the actual action
  route.send('displayAlert', expectedTextTesteDois);
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
