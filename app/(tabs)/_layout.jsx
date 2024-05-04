import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabLayout = () => {
    const TabIcon = ({ icon, name, color, focused }) => {
        return (
            <View className=" items-center justify-center gap-2">
                <Image source={icon} resizeMode='contain' tintColor={color} className="w-6 h-6" />
                <Text className={`${focused ? 'font-psemibold items-center' : 'font-pregular text-xs text-white'}`} style={{ color: color }}>{name}</Text>
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
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            },
        }}>
            {/* Home tab */}
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={"white"} name="Home" focused={focused}
                        />
                    ),
                }}
            />

            {/* Home tab */}
            <Tabs.Screen
                name="fav"
                options={{
                    title: "search",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.search} color={"white"} name="Search" focused={focused}
                        />
                    ),
                }}
            />

            {/* Home tab */}
            <Tabs.Screen
                name="movies"
                options={{
                    title: "Movies",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={"white"} name="Movies" focused={focused}
                        />
                    ),
                }}
            />


            {/* Home tab */}
            <Tabs.Screen
                name="tv"
                options={{
                    title: "TV Shows",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={"white"} name="TV Shows" focused={focused}
                        />
                    ),
                }}
            />


        </Tabs>
    )
}

export default TabLayout