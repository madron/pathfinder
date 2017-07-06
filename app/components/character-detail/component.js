import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
      create() {
          let character = this.get('store').createRecord('character');
          character.set('name', 'Pippo');
          character.save();
        // let character = this.get('value');
        // let filterAction = this.get('filter');
        // filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
      }
    }
});
