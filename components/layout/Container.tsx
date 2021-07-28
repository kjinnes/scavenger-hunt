import React from 'react'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <View style={{
          margin: 20,
        }}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Container
