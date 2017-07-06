import { test } from 'qunit';
import moduleForAcceptance from 'pathfinder/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('a.index').text().trim(), 'Pathfinder');
    assert.equal(find('a.character-index').text().trim(), 'Characters');
  });
});
