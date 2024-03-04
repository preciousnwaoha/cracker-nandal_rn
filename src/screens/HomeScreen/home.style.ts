import { StyleSheet } from "react-native"
import { colors } from "../../constants/theme"

const styles = () =>
    StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["light"].BROWN,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },

    /**LIST */
    homeItemsContainer: {
        // marginTop: 20,
        // borderWidth: 1, 
    },

    contentContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 18,
        paddingVertical: 10,
      },
    
    bottomPinkBoxWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        // borderWidth: 1,
        paddingVertical: 12,
        // paddingHorizontal: 40,
      },
    bottomPinkBox: {
        width: (80 * 3) + (16 * 2),
        height: 36,
        borderRadius: 18,
        backgroundColor: colors["light"].PINK,
    },
    bottomWrapper: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
        padding: 20,
      },
    dots: {
        zIndex: 1,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors["light"].BLUE,
        shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
    }
})

export default styles