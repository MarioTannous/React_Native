import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { moderateScale } from '../utils/responsive';
const useProductDetailsScreenStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(16),
      backgroundColor: theme.backgroundColor,
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContentPortrait: {
      justifyContent: 'center',
    },
    scrollViewContentLandscape: {
      justifyContent: 'flex-start',
    },
    image: {
      width: '100%',
      height: moderateScale(400),
      borderRadius: moderateScale(8),
      marginBottom: moderateScale(16),
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      marginBottom: moderateScale(8),
      color: theme.textColor,
      fontFamily:'CoralPixels-Regular',
    },
    description: {
      fontSize: moderateScale(14),
      lineHeight: 18,
      fontWeight: 'bold',
      color: theme.textColor,
      marginBottom: moderateScale(16),
    },
    price: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      marginBottom: moderateScale(10),
      color: theme.textColor,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
       flex: 1,
      height: moderateScale(50),
      backgroundColor: theme.buttonBackground,
      borderRadius: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: moderateScale(8),
    },
    buttonText: {
      color: theme.buttonText,
      fontSize: moderateScale(15),
      fontWeight: 'bold',
    },
  });
};

export default useProductDetailsScreenStyles;
