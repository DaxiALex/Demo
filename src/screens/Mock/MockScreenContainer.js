import {
  compose,
  branch,
  withHandlers,
  hoistStatics,
  renderComponent,
} from 'recompose';
import R from 'ramda';
// import { connect } from 'react-redux';
import MockScreenView from './MockScreenView';
// import { authOperations } from '../../modules/auth';
import { RootSpinner } from '../../components';
import { NavigationService } from '../../services';
// import { alertError } from '../../utils/errorHelper';

// const mapStateToProps = (state) => ({
//   isLoading: state.auth.isLoading,
// });

const enhance = compose(
  // connect(mapStateToProps, authOperations),
  withHandlers({
    on: props => async () => {
      try {
        await props.loginWithFacebook();
      } catch (e) {
        console.log('error', e);
        props.loginUserError();
      }
    },
    on2: () => async () => {
      NavigationService.navigateToApp();
    },

  }),
  branch(R.prop('isLoading'), renderComponent(RootSpinner)),
);

export default hoistStatics(enhance)(MockScreenView);
