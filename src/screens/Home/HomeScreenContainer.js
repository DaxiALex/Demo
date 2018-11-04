import {
  compose,
  branch,
  withHandlers,
  hoistStatics,
  renderComponent,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import HomeScreenView from './HomeScreenView';
import { RootSpinner } from '../../components';
import { NavigationService } from '../../services';

const enhance = compose(
  withHandlers({
    onCancel: props => () => {

    },
    onSubmit: props => () => {

    },
    onLogOut: () => () => {
      NavigationService.navigateToAuth();
    },

  }),

  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams(
        {
          cancelButtonTitle: 'Undo',
          submitButtonTitle: 'Post',
          onCancel: this.props.onCancel,
          onSubmit: this.props.onSubmit,
          isSubmitDisabled: true,
        }
      );
    },
  }),
  branch(R.prop('isLoading'), renderComponent(RootSpinner)),
);

export default hoistStatics(enhance)(HomeScreenView);
