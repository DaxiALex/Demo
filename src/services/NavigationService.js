import { NavigationActions, StackActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationService {
  constructor() {
    this._navigation = null;
  }

  init(navigation) {
    if (this._navigation) {
      return;
    }

    this._navigation = navigation;
  }

  getState() {
    return this._navigation.state;
  }

  resetToScreen(screen) {
    this.resetToStack({ routeName: screen });
  }

  resetToStack({ routeName, action, params }) {
    this._navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          action,
          params,
        }),
      ],
    }));
  }

  navigate(route) {
    this._navigation.dispatch(
      NavigationActions.navigate(route),
    );
  }

  navigateDeep(actions) {
    this._navigation.dispatch(actions.reduce(
      (prevAction, action) => NavigationActions.navigate({
        routeName: action.routeName || action,
        params: action.params,
        action: prevAction,
      }),
      undefined,
    ));
  }

  push(route) {
    this._navigation.dispatch(StackActions.push(route));
  }

  pop(n) {
    this._navigation.dispatch(StackActions.pop({ n }));
  }

  popToTop() {
    this._navigation.dispatch(StackActions.popToTop());
  }

  goBack() {
    this._navigation.dispatch(NavigationActions.back());
  }

  navigateToAuth() {
    this.navigate({ routeName: screens.Login });
  }

  navigateToApp() {
    this.navigate({ routeName: screens.TabNavigator });
  }

  // navigateToSmth({ jobId }) {
  //   this.push({
  //     routeName: screens.PostedJobApplicants,
  //     params: {
  //       jobId,
  //       fromNotification: true,
  //     },
  //   });
  // }
}

const navigationService = new NavigationService();

export default navigationService;
