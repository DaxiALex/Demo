import {
  compose,
  branch,
  withHandlers,
  hoistStatics,
  renderComponent,
  lifecycle,
  withState,
} from 'recompose';
import R from 'ramda';
import HomeScreenView from './HomeScreenView';
import { RootSpinner } from '../../components';

const enhance = compose(

  withState('avatar', 'setAvatar', ''),

  withHandlers({
    onCancel: props => () => {

    },
    onSubmit: props => () => {

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
