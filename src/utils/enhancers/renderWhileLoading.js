import R from 'ramda';
import { branch, renderComponent } from 'recompose';

export default Component => branch(R.prop('isLoading'), renderComponent(Component));
