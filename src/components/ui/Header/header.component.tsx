import { Text, View } from 'react-native'
import React from 'react'
import styling from './header.style'

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../../../constants/theme';
import { useRoute } from '@react-navigation/native';

const Header = (props: {text?: string}) => {
    const route = useRoute()

    const { text } = props
    const styles = styling()    

  return (
    <View style={styles.container}>
      
      <View style={styles.topIcon}>
        <FontAwesome6 name="canadian-maple-leaf" size={28} color={colors["light"].PINK} />
      </View>

        <View style={styles.middleContainer}>
        <View style={[styles.headerItem, styles.curve1]}>
        </View>

        <View  style={[styles.headerItem, styles.homeCircle]}>
          <MaterialCommunityIcons name="bird" size={28} color="black" />
        </View>

        <View  style={[styles.headerItem, styles.curve2]}>
        </View>
      </View>

      <View style={styles.homeTextWrapper}>
      <Feather name="plus" size={12} color={colors["light"].PINK} />
        <Text style={styles.homeText}>{route.name}</Text>
        <Feather name="plus" size={12} color={colors["light"].PINK} />
      </View>
</View>
  )
}

export default Header

