import { Feather } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
  initialQuery?: string;
}

const SearchInput = ({ initialQuery }: Props) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View className='flex-row items-center justify-between h-10 px-4 my-6 border-gray-700 rounded-md border-[1px] bg-card w-72 focus:border-accent'>
      <TextInput
        placeholder='Search for news...'
        placeholderTextColor='#6A717A'
        className='text-text_primary'
        value={query}
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert('No Search term', 'Please enter a search term');
          }

          if (pathname.startsWith('/search')) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Feather name='search' size={24} color='#6A717A' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
