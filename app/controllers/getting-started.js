import Controller from '@ember/controller';
import { service } from 'ember-decorators/service';

export default Controller.extend({
  @service auth: null,
  @service features: null,
});
