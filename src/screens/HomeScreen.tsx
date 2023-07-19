import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { styles } from './styles';
import { useAuth, } from '../contexts/Auth';
import Intro from '../components/Intro';
import axios from 'axios';
import { CSS_CONSTANTS } from '../constants/css-constants';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getTodoList } from '../services/todoService';
import { Loading } from '../components/Loading';
import MatIcon from 'react-native-vector-icons/MaterialIcons'

export const HomeScreen = ({ navigation }: any) => {
    const { authData, signOut }: any = useAuth();
    const [todoData, setTodoData] = useState<any>([]);
    const [todoPagination, setTodoPagination] = useState<any>({});
    const [refreshing, setRefreshing] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [limit, setLimit] = React.useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const _signOut = () => {
        signOut();
    };
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

    const onRefresh =
    //  React.useCallback(
        () => {
        setRefreshing(true);
        console.log({currentPage})
        if(currentPage){
            setTodoData([])
        }
        setCurrentPage(0);
        setRefreshing(false);
    }
    // , [currentPage]);



    // Unsubscribe
    unsubscribe();

    const getTodos = async () => {
        try {
            // console.log({ authData })
            const config = {
                headers: { Authorization: `Bearer ${authData.token}` }
            };
            console.log(`http://3.111.226.44:3020/api/v1/todos?currentPage=${currentPage}&limit=${limit}`)
            const { data } = await axios.get(`http://3.111.226.44:3020/api/v1/todos?currentPage=${currentPage}&limit=${limit}`, config);
            // const data = await getTodoList();
            console.log("pagination ",data?.pagination, )
            console.log("data ",  data.data.length )
            setTodoData([...todoData, ...data?.data]);
            // setTodoData(data?.data);
            setTodoPagination(data?.pagination)
            console.log({todoData:todoData.length})
        } catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {
        getTodos()
    }, [currentPage])

    const renderLoader = () => {
        return (
          isLoading ?
            <View style={{  marginVertical: 16,
                alignItems: "center",}}>
              <ActivityIndicator size="large" color="#aaa" />
            </View> : null
        );
      };
    
      const loadMoreItem = () => {
        if((todoPagination?.totalPages-1) > currentPage){

            setCurrentPage(currentPage + 1);
        }
      };
    
    const renderItem = ({item, index}:any)=>{
        
           return (<TouchableOpacity style={{
                borderRadius: CSS_CONSTANTS.borderRadius.sm,
                // IOS
                shadowColor: 'black',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                // Android
                elevation: 20,
                backgroundColor: CSS_CONSTANTS.colors.lapis_lazuli,
                // width: "100%", 
                padding: CSS_CONSTANTS.padding.sm,
                marginVertical: CSS_CONSTANTS.marginVertical,
                marginHorizontal: CSS_CONSTANTS.marginHorizontal
            }}
            onPress={()=> navigation.navigate('AddTodo', {item})}>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.lg }}>({index+1}) {item?.title}</Text>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.md }}>{item?.description}</Text>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.targetDate}</Text>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.status}</Text>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.createdAt}</Text>
                <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.updatedAt}</Text>
            </TouchableOpacity>)
            //  : (
            // <View>
            //     <Text>No Data Found</Text>
            // </View>
        // )
    }
    return (
        <View style={styles.container}>
           
            <Intro navigation={navigation} name={authData?.user?.name || '👋'} />
            {/* <Text>HOME SCREEN {authData?.user?.name}</Text>
      <Button title="Sign Out" onPress={_signOut} /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', width: "100%", padding: CSS_CONSTANTS.padding.sm, marginVertical: CSS_CONSTANTS.marginVertical }}>
                <Text style={{color: CSS_CONSTANTS.colors.dark_pink, fontWeight: 'bold', backgroundColor: CSS_CONSTANTS.colors.tran_pink, padding: CSS_CONSTANTS.padding.xs*0.75, borderRadius: CSS_CONSTANTS.borderRadius.xs*0.5}}>Todo: {todoPagination?.totalRecords}</Text>
                <Text style={{color: CSS_CONSTANTS.colors.dark_green, fontWeight: 'bold', backgroundColor: CSS_CONSTANTS.colors.tran_green, padding: CSS_CONSTANTS.padding.xs*0.75, borderRadius: CSS_CONSTANTS.borderRadius.xs*0.5}}>Pages: {todoPagination?.totalPages}</Text>
                <Text style={{color: CSS_CONSTANTS.colors.dark_orange, fontWeight: 'bold', backgroundColor: CSS_CONSTANTS.colors.tran_orange, padding: CSS_CONSTANTS.padding.xs*0.75, borderRadius: CSS_CONSTANTS.borderRadius.xs*0.5}}>Page: {currentPage+1}</Text>
                {/* <Text style={{color: CSS_CONSTANTS.colors.dark_orange, fontWeight: 'bold'}}>{todoData.length}</Text> */}
                <TouchableOpacity onPress={() => navigation.navigate('AddTodo')}>
                    <AntIcon name="addfile" size={24} color={'green'} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', flex:1 }}
                // refreshControl={
                //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                // }

            >

            <FlatList
            //  refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
            refreshControl={<RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={refreshing}
                onRefresh={onRefresh} />}
                    data={todoData}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                    // refreshing={refreshing} // Added pull to refesh state
                    // onRefresh={onRefresh} 
                />
               
            </View>
        </View>
    );
};
 export default  HomeScreen