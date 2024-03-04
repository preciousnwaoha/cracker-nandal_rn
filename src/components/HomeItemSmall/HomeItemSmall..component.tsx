import {Text, View } from 'react-native'
import React from 'react'
import styling from './homeItemSmall.style'
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeItemSmallProps } from './types';
import { colors } from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';


const HomeItemSmall = (props: HomeItemSmallProps) => {

  const { topText, subText, icon } = props

  const styles = styling()

  return (
    <LinearGradient colors={[colors["light"].LIGHT, colors["light"].BLUE_700]} style={styles.container}>
        <View style={styles.bottomBottomPart}>
            <View style={styles.bottomIcon}>
              {icon ||<Entypo name="open-book" size={28} color={colors["light"].BLUE} />}
            </View>
            <Text style={styles.bottomBottomPartSubText}>
                {topText || 'Library'}
            </Text>
            <Text style={styles.bottomTopPartText}>
                {subText || 'Library'}
            </Text>
        </View>
    </LinearGradient>
  )
}

export default HomeItemSmall
