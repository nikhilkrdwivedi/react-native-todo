import React, { useEffect, useState } from 'react';
import { Button, RefreshControl, ScrollView, Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { styles } from './styles';
import { useAuth, } from '../contexts/Auth';
import Intro from '../components/Intro';
import axios from 'axios';
import { CSS_CONSTANTS } from '../constants/css-constants';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getTodoList } from '../services/todoService';

export const HomeScreen = ({ navigation }: any) => {
    const { authData, signOut }: any = useAuth();
    const [todoData, setTodoData] = useState<any>([]);
    const [todoPagination, setTodoPagination] = useState<any>({});
    const [refreshing, setRefreshing] = React.useState(false);
    const _signOut = () => {
        signOut();
    };
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getTodos()
        
          setRefreshing(false);
        
      }, []);
    
    

    // Unsubscribe
    unsubscribe();

    const getTodos = async () => {
        try {
            console.log({ authData })
            const config = {
                headers: { Authorization: `Bearer ${authData.token}` }
            };
            const { data } = await axios.get('http://3.111.226.44:3020/api/v1/todos', config);
            // const data = await getTodoList();
            console.log(data)
            setTodoData(data?.data);
            setTodoPagination(data?.pagination)
        } catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <View style={styles.container}>
            <Intro name={authData?.user?.name || '👋'} />
            {/* <Text>HOME SCREEN {authData?.user?.name}</Text>
      <Button title="Sign Out" onPress={_signOut} /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', width: "100%", padding: CSS_CONSTANTS.padding.sm, marginVertical: CSS_CONSTANTS.marginVertical }}>
                <Text>Total Todo: {todoPagination?.totalRecords}</Text>
                <Text>Total Todo: {todoData?.length}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddTodo')}>
                    <AntIcon name="addfile" size={24} color={'green'} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} 
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }

            >

                {todoData ? todoData.map((item: any, index: number) => (
                    (<View key={index} style={{ backgroundColor: CSS_CONSTANTS.colors.lapis_lazuli, width: "100%", padding: CSS_CONSTANTS.padding.sm, marginVertical: CSS_CONSTANTS.marginVertical }}>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.lg }}>{item?.title}</Text>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.md }}>{item?.description}</Text>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.targetDate}</Text>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.status}</Text>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.createdAt}</Text>
                        <Text style={{ color: 'white', fontSize: CSS_CONSTANTS.fontSize.sm }}>{item?.updatedAt}</Text>
                    </View>)
                )) : (
                    <View>
                        <Text>No Data Found</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};
