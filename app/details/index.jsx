import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const index = () => {
  const { id } = useLocalSearchParams()
  console.log(id)
  return (
    <View>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, minus.</Text>
    </View>
  )
}

export default index