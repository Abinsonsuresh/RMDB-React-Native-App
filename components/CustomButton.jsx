import { View, Text, TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,isLoading,textStyles}) => {
  return (
   <TouchableOpacity
   onPress={handlePress} activeOpacity={0.7} className={`${containerStyles} bg-secondary rounded-xl min-h-[62px] justify-center items-center  ${containerStyles} ${
    isLoading ? "opacity-50" : ""
  }` } disabled={isLoading}>
    <Text  className={`${textStyles} font-psemibold text-lg`} >{title}</Text>
    {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
    )
    }
   </TouchableOpacity>
  )
}

export default CustomButton