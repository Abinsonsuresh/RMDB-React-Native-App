import { Stack } from 'expo-router';

const  DetailsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default DetailsLayout