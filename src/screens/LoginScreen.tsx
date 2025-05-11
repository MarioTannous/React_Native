import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/navigator/navigator';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/atoms/Button';
import useLoginScreenStyles from '../styles/LoginScreenStyles';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Please enter a valid email address: example@gmail.com' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(6, { message: 'Your password must have at least 6 characters.' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const styles = useLoginScreenStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const onChange = ({ window }: { window: { width: number; height: number } }) => {
      setIsPortrait(window.height >= window.width);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    onChange({ window: Dimensions.get('window') });
    return () => {
      subscription?.remove();
    };
  }, []);

  const onSubmit = (data: LoginFormData) => {
    if (data.email === 'eurisko@gmail.com' && data.password === 'academy2025') {
      navigation.navigate('Verification');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter the correct email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.conTent,
          styles.scrollViewContent,
          isPortrait ? styles.scrollViewContentPortrait : styles.scrollViewContentLandscape,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Image source={require('../assets/LoginUser.png')} style={styles.loginUserImage} />
          <Text style={styles.title}>User Login</Text>
          <View style={[styles.passwordContainer, errors.email && styles.errorInput]}>
            <Image
              source={require('../assets/EmailIcon.png')}
              style={styles.emailIcon}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your e-mail"
                  placeholderTextColor={styles.passwordInput.color}
                  keyboardType="email-address"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

          <View style={[styles.passwordContainer, errors.password && styles.errorInput]}>
            <Image
              source={require('../assets/PassIcon.png')}
              style={styles.emailIcon}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor={styles.passwordInput.color}
                  secureTextEntry={!passwordVisible}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.showPasswordButton}
            >
              {passwordVisible ? (
                <Image
                  source={require('../assets/HideEye.png')}
                  style={styles.hidePasswordIcon}
                />
              ) : (
                <Image
                  source={require('../assets/showEye.png')}
                  style={styles.showPasswordIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
