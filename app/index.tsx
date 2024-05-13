import BreakingNews from '@/components/BreakingNews';
import SearchInput from '@/components/SearchInput';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className='h-full px-4 bg-primary'>
      <ScrollView>
        <View className='items-center justify-center'>
          <SearchInput />
        </View>
        <View>
          <Text className='text-xl text-text_primary'>Breaking News</Text>
          <BreakingNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
