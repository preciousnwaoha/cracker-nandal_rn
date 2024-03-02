import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styling from './homeItem.style'

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeItemProps } from './types';
import { colors } from '../../constants/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const HomeItem = (props: HomeItemProps) => {

  const navigation = useNavigation()
  const route = useRoute()

  const { topText, bottomText, topIcon, bottomIcon, routeName } = props

  const styles = styling()

  return (
    <LinearGradient
    colors={[
      colors["light"].PINK, colors["light"].PINK, colors["light"].LIGHT, colors["light"].BLUE_700, colors["light"].BLUE_700, colors["light"].BLUE_700]} style={styles.container}>
      <View  style={styles.topPart}>
      <FontAwesome6 name="user-large" size={40} color={colors["light"].BLUE_700} />
      </View>
      
      <View style={styles.bottomPart}>
        <View style={styles.bottomTopPart}>
            <Text style={styles.bottomTopPartText}>
                {topText || 'Home'}
            </Text>
        </View>

        <TouchableOpacity onPress={() => {
          (navigation.navigate as any)(routeName || "HomeScreen")

        }} style={styles.bottomBottomPart}>
            <View style={[styles.bottomIcon, {
              backgroundColor: routeName === route.name ? colors["light"].BLUE_700 : colors["light"].PINK,
            }]}>
              {topIcon || <Entypo name="open-book" size={30} color="black" />}
            </View>
            <Text style={styles.bottomTopPartText}>
                {bottomText || 'Library'}
            </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default HomeItem
