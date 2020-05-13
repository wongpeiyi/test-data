import DS from 'ember-data';

export default class Store extends DS.Store {
  customPeek() {
    return true;
  }
}
