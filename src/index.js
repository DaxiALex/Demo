import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import {
  compose,
  lifecycle,
  withHandlers,
} from 'recompose';
// import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './navigation';
import { colors } from './styles';
import { OfflineModal } from './components';

const App = () => (
  <Fragment>
    <OfflineModal />
    <StatusBar translucent backgroundColor={colors.primary} barStyle="dark-content" />
    <RootNavigator />
    {/* <RootModal /> */}
  </Fragment>
);

const enhance = compose(
  withHandlers({
    // asyncCheckToken: () => async () => {
    //   await store.dispatch(authOperations.checkToken());
    // },
  }),
  lifecycle({
    componentDidMount() {
      try {
        // await this.props.asyncCheckToken();
      } catch (err) {
        console.log(err.message);
      } finally {
        // SplashScreen.hide();
      }
    },
  }),
);
export default enhance(App);
