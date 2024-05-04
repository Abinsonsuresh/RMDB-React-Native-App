import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'
import { EvilIcons } from '@expo/vector-icons';
import { HomeIcon, MovieIcon, SearchIcon, TVIcon } from '../../constants/icons';
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
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <HomeIcon color={color} size={24} />
                            <Text style={{ color: focused ? '#007AFF' : '#8E8E93', fontSize: 12 }}>
                                <Text  className={`${focused ? 'font-psemibold items-center text-orange-400' : 'font-pregular text-xs text-white'}`}>Home</Text>
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* Home tab */}
            <Tabs.Screen
                name="fav"
                options={{
                    title: "search",
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <SearchIcon color={color} size={24} />
                            <Text style={{ color: focused ? '#007AFF' : '#8E8E93', fontSize: 12 }}>
                                <Text  className={`${focused ? 'font-psemibold items-center text-orange-400' : 'font-pregular text-xs text-white'}`}>Search</Text>
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* Home tab */}
            <Tabs.Screen
                name="movies"
                options={{
                    title: "Movies",
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <MovieIcon color={color} size={24} />
                            <Text style={{ color: focused ? '#007AFF' : '#8E8E93', fontSize: 12 }}>
                                <Text  className={`${focused ? 'font-psemibold items-center text-orange-400' : 'font-pregular text-xs text-white'}`}>Movies</Text>
                            </Text>
                        </View>
                    ),
                }}
            />


            {/* Home tab */}
            <Tabs.Screen
                name="tv"
                options={{
                    title: "TV Shows",
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <TVIcon color={color} size={24} />
                            <Text style={{ color: focused ? '#007AFF' : '#8E8E93', fontSize: 12 }}>
                                <Text  className={`${focused ? 'font-psemibold items-center text-orange-400' : 'font-pregular text-xs text-white'}`}>TV Shows</Text>
                            </Text>
                        </View>
                    ),
                }}
            />


        </Tabs>
    )
}

export default TabLayout