import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { moderateScale } from '../utils/responsive';
const useLoginScreenStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    content: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    title: {
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      marginBottom: moderateScale(24),
      textAlign: 'center',
      color: theme.textColor,
      textDecorationLine: 'underline',
      textDecorationStyle: 'dashed',
      textShadowColor: 'rgba(25, 0, 255, 0.52)',
      textShadowOffset: { width: 2, height: 1 },
      textShadowRadius: 2,
      fontFamily: 'Goudy Bookletter 1911, sans-serif',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
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
    showPasswordIcon: {
      width: 24,
      height: 24,
    },
    button: {
      height: 50,
      backgroundColor: 'blue',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
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
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      marginBottom: moderateScale(6),
    },
    errorInput: {
      borderColor: theme.invalidInput,
    },
    loginUserImage: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 20,
    },
    emailIcon: {
      width: 30,
      height: 30,
      marginRight: 8,
      marginLeft: 10,
    },
    passIcon: {
      width: 30,
      height: 30,
      marginRight: 8,
      marginLeft: 10,
    },
    hidePasswordIcon: {
      width: 24,
      height: 24,
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
  });
};

export default useLoginScreenStyles;
