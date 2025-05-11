import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../../screens/SignUpScreen';
import LoginScreen from '../../screens/LoginScreen';
import VerificationScreen from '../../screens/VerificationScreen';
import ThemeToggle from '../../components/atoms/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { theme } = useTheme();

  const renderThemeToggle = () => <ThemeToggle />;

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation: _navigation }) => ({
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.buttonText,
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18, fontFamily: 'Poppins' },
        headerTitleAlign: 'center',
        headerRight: renderThemeToggle,
      })}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'ProductListing',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'ProductListing',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{
          title: 'ProductListing',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
