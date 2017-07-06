import { test } from 'qunit';
import moduleForAcceptance from 'pathfinder/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | character list');

test('visiting /character', function(assert) {
  visit('/character');

  andThen(function() {
    assert.equal(currentURL(), '/character');
    assert.equal(find('ul.character-list li:first').text(), 'Keroban');
  });
});
