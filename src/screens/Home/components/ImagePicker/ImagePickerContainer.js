import {
  compose,
  withHandlers,
  withState,
} from 'recompose';
import ImagePicker from 'react-native-image-picker';
import ImagePickerView from './ImagePickerView';


const options = {
  title: 'Add avatar picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


const enhance = compose(
  withState('isShowLoader', 'setShowLoader', false),

  withHandlers({
    onPickImage: props => () => {
      ImagePicker.showImagePicker(options, (response) => {
        props.setShowLoader(true);
        if (response.didCancel) {
          props.setShowLoader(false);
        } else if (response.error) {
          props.setShowLoader(false);
        } else if (response.customButton) {
          props.setShowLoader(false);
        } else {
          props.setAvatar(response.uri);
        }
      });
    },
  }),
);

export default enhance(ImagePickerView);
