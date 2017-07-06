import { test } from 'qunit';
import moduleForAcceptance from 'pathfinder/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | character add');

test('visiting /character-add', function(assert) {
  visit('/character/add');

  andThen(function() {
    assert.equal(currentURL(), '/character/add');
    assert.equal(find('h1:first').text(), 'Add character');
    assert.equal(find('a.character-index').text().trim(), 'Characters');
  });
});
