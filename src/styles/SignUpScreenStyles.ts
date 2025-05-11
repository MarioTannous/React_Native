import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { moderateScale } from '../utils/responsive';
const useSignUpScreenStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    content: {
      flex: 1,
      padding: moderateScale(16),
      justifyContent: 'center',
    },
    title: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      marginBottom: moderateScale(24),
      textAlign: 'center',
      color: theme.textColor,
      textDecorationLine: 'underline',
      textDecorationStyle: 'dashed',
      textShadowColor: 'rgba(25, 0, 255, 0.52)',
      textShadowOffset: { width: 2, height: 1 },
      textShadowRadius: 2,
      fontFamily: 'Playwrite DK Loopet Thin',
    },
    input: {
      height: moderateScale(50),
      borderColor: theme.borderColor,
      borderWidth: 1,
      borderRadius: moderateScale(8),
      paddingHorizontal: moderateScale(12),
      marginBottom: moderateScale(16),
      backgroundColor: theme.inputBackground,
      color: theme.textColor,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.borderColor,
      borderWidth: 1,
      borderRadius: moderateScale(8),
      marginBottom: moderateScale(16),
      backgroundColor: theme.inputBackground,
      height: 50,
    },
    scrollView: {
      flex: 1,
    },
    conTent: {
      padding: moderateScale(16),
      justifyContent: 'center',
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    scrollViewContentPortrait: {
      justifyContent: 'center',
    },
    scrollViewContentLandscape: {
      justifyContent: 'flex-start',
    },
    inputField: {
      flex: 1,
      height: moderateScale(50),
      paddingHorizontal: moderateScale(12),
      color: theme.textColor,
      backgroundColor: 'transparent',
    },
    passwordInput: {
      flex: 1,
      height: moderateScale(50),
      paddingHorizontal: moderateScale(12),
      color: theme.textColor,
    },
    showPasswordButton: {
      paddingHorizontal: moderateScale(12),
    },
    showPasswordText: {
      color: theme.passwordButton,
      fontWeight: 'bold',
    },
    linkText: {
      marginTop: moderateScale(16),
      fontSize: moderateScale(14),
      fontWeight: 'bold',
      color: theme.hyperlink,
      textAlign: 'center',
      textDecorationLine: 'underline',
      textShadowColor: 'rgba(25, 0, 255, 0.52)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    errorText: {
      color: theme.invalidInput,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    errorInput: {
      borderColor: theme.invalidInput,
    },
    visibilityIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
    inputIcon: {
      width: moderateScale(30),
      height: moderateScale(30),
      marginRight: moderateScale(8),
      marginLeft: moderateScale(10),
    },
    SignUp: {
      width: moderateScale(100),
      height: moderateScale(100),
      alignSelf: 'center',
      marginBottom: moderateScale(20),
    },
  });
};

export default useSignUpScreenStyles;
