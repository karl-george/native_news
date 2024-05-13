import SearchInput from '@/components/SearchInput';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='items-center justify-center'>
          <SearchInput />
          <Text>Hello World!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
