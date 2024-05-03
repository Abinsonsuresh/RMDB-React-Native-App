import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'

import { icons } from '../../constants'
const TabLayout = () => {
    const TabIcon = ({ icon, name, color, focused }) => {
        return (
          <View className=" items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' tintColor={color} style={{width: 30, height: 30}} />
            <Text className={`${focused ? 'font-psemibold items-center' : 'font-pregular text-xs text-white'}`} style={{color: color}}>{name}</Text>
          </View>
        )
      }
  return (

      <Tabs screenOptions={{
        tabBarShowLabel: false, tabBarActiveTintColor: "#FFA007", tabBarInactiveTintColor: '#CDCDE0', tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 60,
        },
      }}>
        {/* Home tab */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={"orange"} name="Home" focused={focused}
              />
            ),
          }}
        />

        {/* Home tab */}
        <Tabs.Screen
          name="fav"
          options={{
            title: "fav",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={"orange"} name="Fav" focused={focused}
              />
            ),
          }}
        />

        
      </Tabs>
  )
}

export default TabLayout