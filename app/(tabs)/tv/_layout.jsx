import { Stack } from 'expo-router';
const TVLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default TVLayout