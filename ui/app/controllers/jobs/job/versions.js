import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-mixins
import WithNamespaceResetting from 'nomad-ui/mixins/with-namespace-resetting';
import { alias } from '@ember/object/computed';
import classic from 'ember-classic-decorator';

@classic
export default class VersionsController extends Controller.extend(WithNamespaceResetting) {
  @alias('model') job;
}
