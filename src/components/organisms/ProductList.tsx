import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import ProductItem from '../molecules/ProductItem';
import products from '../../data/Products.json';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../navigation/navigator/navigator';
import styles from '../../styles/ProductListStyles';
import { useTheme } from '../../context/ThemeContext';

const ProductList = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();

  return (
    <View  style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <FlatList
        data={products.data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetails', {
                title: item.title,
                description: item.description,
                imageUrl: item.images[0]?.url || '',
                price: item.price,
              })
            }
          >
            <ProductItem
              title={item.title}
              price={item.price}
              imageUrl={item.images[0]?.url || ''}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ProductList;
