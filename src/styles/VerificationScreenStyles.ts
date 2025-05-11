import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { moderateScale } from '../utils/responsive';
const useVerificationScreenStyles = () => {
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
      fontFamily: 'fantasy',
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
      textAlign: 'center',
      fontSize: moderateScale(18),
      letterSpacing: moderateScale(8),
    },
    VerifyIcon: {
      width: moderateScale(100),
      height: moderateScale(100),
      alignSelf: 'center',
      marginBottom: moderateScale(20),
    },
  });
};

export default useVerificationScreenStyles;
