import { Text } from 'react-native';
import { compose, setPropTypes, withProps } from 'recompose';
import { colors } from '../../styles';

// const getFontFamily = (light, medium, bold) => {
//   let fontFamily = 'Rubik-Bold';
//
//   if (light) fontFamily = 'Rubik-Light';
//   if (bold) fontFamily = 'Rubik-Bold';
//
//   return { fontFamily };
// };


const enhance = compose(
  setPropTypes(Text.propTypes),

  withProps(props => ({
    style: [
      // getFontFamily(props.light, props.bold),
      {
        color: colors.text,
        // fontWeight: fontWeights.medium,
      },
      props.style,
    ],
  })),
);

export default enhance(Text);
