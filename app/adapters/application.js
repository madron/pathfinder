import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'pathfinder/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    db.sync(remoteDb, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default Adapter.extend({
    init() {
        this._super(...arguments);
        this.set('db', createDb());
    },

    unloadedDocumentChanged(obj) {
        let store = this.get('store');
        let recordTypeName = this.getRecordTypeName(store.modelFor(obj.type));
        this.get('db').rel.find(recordTypeName, obj.id).then(function(doc) {
            store.pushPayload(recordTypeName, doc);
        });
    },

});
