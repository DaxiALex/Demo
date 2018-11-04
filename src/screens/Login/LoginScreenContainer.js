import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import LoginScreenView from './LoginScreenView';
import screens from '../../navigation/screens';

const enhance = compose(


  withHandlers({
    onSignIn: props => async () => {
      props.navigation.navigate(screens.Home);
    },

  }),
);

export default hoistStatics(enhance)(LoginScreenView);
