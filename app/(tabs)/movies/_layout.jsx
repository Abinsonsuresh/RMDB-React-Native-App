import { Stack } from 'expo-router';
const MoviesLayout = () => {
  return (
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
  )
}

export default MoviesLayout