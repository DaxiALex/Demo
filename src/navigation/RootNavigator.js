import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NavigationService } from '../services';
import screens from './screens';
import {
  LoginScreen,
  HomeScreen,
} from '../screens';

const RootNavigator = createStackNavigator(
  {
    [screens.Login]: {
      screen: LoginScreen,
      navigationOptions: ({
        gesturesEnabled: false,
      }),
    },

    [screens.Home]: {
      screen: HomeScreen,
      navigationOptions: ({
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: screens.Login,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    navigationOptions: ({
      headerBackTitle: null,
    }),
  }
);


const NavigatorContainer = () => <RootNavigator ref={ref => NavigationService.init(ref)} />;

export default NavigatorContainer;
