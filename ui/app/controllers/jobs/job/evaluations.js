import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-mixins
import WithNamespaceResetting from 'nomad-ui/mixins/with-namespace-resetting';
// eslint-disable-next-line ember/no-mixins
import Sortable from 'nomad-ui/mixins/sortable';
import classic from 'ember-classic-decorator';

@classic
export default class EvaluationsController extends Controller.extend(
    WithNamespaceResetting,
    Sortable
  ) {
  queryParams = [
    {
      sortProperty: 'sort',
    },
    {
      sortDescending: 'desc',
    },
  ];

  sortProperty = 'modifyIndex';
  sortDescending = true;

  @alias('model') job;
  @alias('model.evaluations') evaluations;

  @alias('evaluations') listToSort;
  @alias('listSorted') sortedEvaluations;
}
