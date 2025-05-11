import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../navigation/navigator/navigator';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/atoms/Button';
import useSignUpScreenStyles from '../styles/SignUpScreenStyles';

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z
    .string()
    .length(8, 'Phone number must be exactly 8 digits long')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
});
type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const styles = useSignUpScreenStyles();
  const [isPortrait, setIsPortrait] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
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

  const onSubmit = (data: SignUpFormData) => {
    console.log('Form Data:', data);
    navigation.navigate('Login');
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
        <Image source={require('../assets/SignUp.png')} style={styles.SignUp} />
        <Text style={styles.title}>User Sign Up</Text>
        <View style={[styles.passwordContainer, errors.name && styles.errorInput]}>
          <Image
            source={require('../assets/NameIcon.png')}
            style={styles.inputIcon}
          />
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputField}
                placeholder="Enter your name"
                placeholderTextColor={styles.input.color}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        <View style={[styles.passwordContainer, errors.email && styles.errorInput]}>
          <Image
            source={require('../assets/EmailIcon.png')}
            style={styles.inputIcon}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputField}
                placeholder="Enter your e-mail"
                placeholderTextColor={styles.input.color}
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        {/* Password Input */}
        <View style={[styles.passwordContainer, errors.password && styles.errorInput]}>
          <Image
            source={require('../assets/PassIcon.png')}
            style={styles.inputIcon}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputField}
                placeholder="Enter your password"
                placeholderTextColor={styles.input.color}
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
                style={styles.visibilityIcon}
              />
            ) : (
              <Image
                source={require('../assets/showEye.png')}
                style={styles.visibilityIcon}
              />
            )}
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <View style={[styles.passwordContainer, errors.phone && styles.errorInput]}>
          <Image
            source={require('../assets/PhoneIcon.png')}
            style={styles.inputIcon}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputField}
                placeholder="Enter your phone number"
                placeholderTextColor={styles.input.color}
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}

        <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default SignUpScreen;
