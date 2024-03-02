import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/theme'
import styling from './explore.style'
import Header from '../../components/ui/Header/header.component'
import HomeItemSmall from '../../components/HomeItemSmall'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from 'react-native-linear-gradient'
import { ExploreScreenNavProp } from '@/navigation/types'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  navigation: ExploreScreenNavProp;
};

const ExploreScreen = ({navigation}: Props) => {

  

  const styles = styling()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={colors["light"].BROWN}
      />
      <LinearGradient colors={[colors["light"].BROWN, colors["light"].PURPLE_700]} style=
      {styles.contentContainer} >

      <Header text={"Explore"} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen")
        }} 

        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 100,
        }}
      >
        <HomeItemSmall 
          topText={"go"}
          subText={"Home"}
          icon={<MaterialCommunityIcons name="home" size={30} color={colors["light"].BLUE_700} />}
        />
      </TouchableOpacity>

      <View style={styles.bottomWrapper}>

      <View style={styles.dots} />

        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colors["light"].PINK,
          }}>Explore</Text>
        </View>

        <View style={styles.dots} />
      </View>

    </LinearGradient>
    </SafeAreaView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})