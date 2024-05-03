import { View, Text, Pressable } from 'react-native'
import React from 'react'

const IndexButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <Pressable
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[40px]  justify-center items-center  ${containerStyles} ${isLoading ? "opacity-50" : ""} `}>
            <Text className="text-xl font-bold text-white">{title}</Text>
        </Pressable>
    )
}

export default IndexButton