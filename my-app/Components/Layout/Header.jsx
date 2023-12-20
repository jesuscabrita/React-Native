import { Text, View } from "react-native"

export const Header = ({activeScreen}) => {
    return(
        <View style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(103, 80, 164)', height:'80px'}}>
            <Text style={{fontSize:'20px', color:'white', fontFamily: 'Montserrat_700Bold' }}>
                {activeScreen === 'Home' ? 'Home' : 'Productos'}
            </Text>
        </View>
    )
}