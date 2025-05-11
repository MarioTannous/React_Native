import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../../screens/ProductListScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';
import HeaderLeftLogoutButton from '../../components/molecules/LogoutButton';
import ThemeToggle from '../../components/atoms/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
    const { theme } = useTheme();
    const renderThemeToggle = () => <ThemeToggle />;

  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={({ navigation: _navigation }) => ({
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.buttonText,
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 , fontFamily: 'Roboto-Medium'},
        headerTitleAlign: 'center',
        headerRight: renderThemeToggle,
      })}
    >
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          title: 'Products',
          headerBackVisible: false,
          headerLeft: HeaderLeftLogoutButton,
          headerRight: ThemeToggle,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Product Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
