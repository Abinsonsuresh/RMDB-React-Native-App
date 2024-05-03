import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'

const home = () => {
  return (
    <SafeAreaView>
    <View className="flex justify-center items-center h-screen">
      <Text className="text-red-600 font-semibold ">home Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis non quis quidem quos sequi, voluptatibus ullam eius adipisci. Aliquam quaerat, doloribus eaque natus neque error inventore nulla magnam ea eligendi sapiente ex beatae minima?</Text>
    </View>
    </SafeAreaView>
  )
}

export default home