import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { icons, images } from '../constants'


const FormField = ({title,otherStyles,handleChangeText,value, placeholder, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`${otherStyles}`}>
      <Text className="font-pmedium text-white">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary  flex-row items-center">

       <TextInput className="flex-1 text-white text-base font-psemibold" value={value} placeholder={placeholder} placeholderTextColor="#7b7b8b" onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword}/>

       {title === "Password" && (
        <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
            <Image className="w-8 h-8" resizeMode='contain' source={!showPassword ? icons.eye : icons.eyeHide}/>
        </TouchableOpacity>
       )}

      </View>
    </View>
  )
}

export default FormField