import { compose, withHandlers, withState } from 'recompose';

export default compose(
  withState('isLoading', 'setLoading', false),
  withHandlers({
    onStartLoading: props => () => {
      props.setLoading(true);
    },
    onStopLoading: props => () => {
      props.setLoading(false);
    },
    onToggleLoading: props => () => {
      props.setLoading(!props.isLoading);
    },
  }),
);
