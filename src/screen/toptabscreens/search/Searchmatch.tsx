import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Search_Style from './Style';
import Colors from '../../../shared/Strings/Colors';
import CustomMatchesDetail from '../../../shared/Components/CustomMatchesDetail';
import SearchDetails from './SearchDetails';


export default function Searchmatch() {
    return (
        <View style={Search_Style.container}>

            <View style={Search_Style.subContainer}>
                <Text style={Search_Style.subTitle}>Personalize your search</Text>

                <FlatList
                    data={SearchDetails}
                    renderItem={({ item }) => <CustomMatchesDetail text1={item.title} text2={item.title} ischeck={item.isCheck} />}
                />
            </View>
        </View>
    )
}