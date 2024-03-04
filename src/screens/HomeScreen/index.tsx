import { FlatList, StatusBar, Text, View } from 'react-native'
import React from 'react'
import styling from './home.style'
import HomeItem from '../../components/HomeItem';
import HomeItemSmall from '../../components/HomeItemSmall';
import { colors } from '../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/ui/Header/header.component';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const HOME_ITEMS = [
  {
    id: "1",
    topText: "Home",
    bottomText: "Library",
    topIcon: <MaterialCommunityIcons name="home" size={30} color={colors["light"].PINK} />,
    routeName: "HomeScreen"
  },
  {
    id: "2",
    topText: "Search",
    bottomText: "Explore",
    topIcon: <Feather name="search" size={30} color={colors["light"].BLUE_700} />,
    routeName: "ExploreScreen"

  },
  {
    id: "3",
    topText: "Profile",
    bottomText: "Account",
    topIcon: <MaterialCommunityIcons name="window-closed-variant" size={24} color="black" />,
    routeName: "ProfileScreen"
  },
]

const HOME_ITEMS_SMALL = [
  {
    id: "1",
    topText: "id - 1 - 01",
    subText: "Exam 1",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
  {
    id: "2",
    topText: "id - 2 - 02",
    subText: "Exam 2",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
  {
    id: "3",
    topText: "id - 2 - 02",
    subText: "Exam 3",
    icon: <Entypo name="open-book" size={30} color={colors["light"].BLUE} />,
  },
]

const HomeScreen = () => {

    const styles = styling()    

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        translucent={false}
        backgroundColor={colors["light"].BROWN}
      />
      <LinearGradient colors={[colors["light"].BROWN, colors["light"].PURPLE_700]} style=
      {styles.contentContainer} >
        
      <Header />

      <View style={styles.bottomWrapper}>

        <View style={styles.dots} />

        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colors["light"].PINK,
          }}>Home</Text>
        </View>

        <View style={styles.dots} />
        
      </View>

      <View style={{
        height: 8
      }} />

      <View>
        <FlatList
          style={styles.homeItemsContainer}
          data={HOME_ITEMS}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => <HomeItem {...item} />}
          keyExtractor={item => item.id}
          // horizontal
        
        />
      </View>

      <View>
        <FlatList
          style={styles.homeItemsContainer}
          data={HOME_ITEMS_SMALL}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => <HomeItemSmall {...item} />}
          keyExtractor={item => item.id}
          // horizontal
        
        />
      </View>
      
      <View style={styles.bottomPinkBoxWrapper}>
        <View
        style={styles.bottomPinkBox} />
      </View>

      
      
      
    </LinearGradient>
    </SafeAreaView>
    
    
  )
}

export default HomeScreen

