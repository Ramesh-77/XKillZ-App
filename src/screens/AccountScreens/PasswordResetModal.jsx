import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window');

const PasswordResetModal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    alert(`Reset link sent to ${email}`);
    setEmail('');
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <BlurView style={styles.blur} blurType="light" blurAmount={8} />
      <View style={styles.modalContent}>
        <Text style={styles.title}>Reset Password</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Pressable style={styles.btn} onPress={handleReset}>
          <Text style={styles.btnText}>Send Reset Link</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default PasswordResetModal;

const styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center', margin: 0 },
  blur: { position: 'absolute', width, height },
  modalContent: {
    width: '85%', backgroundColor: '#fff', padding: 25, borderRadius: 20, elevation: 5,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12, marginBottom: 20,
  },
  btn: {
    backgroundColor: '#0D62EA', padding: 12, borderRadius: 10, alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
