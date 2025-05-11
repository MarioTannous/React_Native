import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Button from '../components/atoms/Button';
import useVerificationScreenStyles from '../styles/VerificationScreenStyles';

const VerificationScreen = () => {
  const { login } = useAuth();
  const styles = useVerificationScreenStyles();
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp === '1234') {
      Alert.alert('Verification Successful!', 'You have been successfully verified.');
      login();
    } else {
      Alert.alert('Invalid Code! Please enter the correct verification code.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/VerifyIcon.png')} style={styles.VerifyIcon} />
        <Text style={styles.title}>User Verification Code</Text>
        <TextInput
          style={styles.input}
          placeholder="* * * *"
          placeholderTextColor={styles.input.color}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
        />
        <Button title="Verify" onPress={handleVerify} />
      </View>
    </View>
  );
};

export default VerificationScreen;
