import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import {capitalize, titleize} from 'underscore.string';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feathericon from 'react-native-vector-icons/Feather'
import { CSS_CONSTANTS } from '../constants/css-constants'
import Input from '../components/Input'
import { useAuth } from '../contexts/Auth';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
export default function AddToDoScreen({ navigation, route }: any) {
    const { item } = route?.params || {};
    console.log({item})
    const [visibleStatus, setVisibleStatus] = useState<boolean>(false);
    const [visibleDate, setVisibleDate] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');
    const [form, setForm] = useState<any>({"targetDate": "2022-11-23"});
    useEffect(()=>{
        if(item)
        setForm({...form, ...item })
    },[item])
    const { authData, signOut }: any = useAuth();
    const AddToDos = async()=>{
            try {
                // console.log({ authData })
                // console.log({ form })
                const config = {
                    headers: { Authorization: `Bearer ${authData.token}` }
                };
                console.log("form -> ",form)
                const payload = (({ description, status,title,targetDate }) => ({description, status,title,targetDate }))(form);
                console.log({payload})
                console.log("form -> ",form._id)
                if(form?._id){
                    // payload
                    var { data } = await axios.put('http://3.111.226.44:3020/api/v1/todos/'+form._id,payload, config);
                    console.log("1. ",data)
                }else{
                    var { data } = await axios.post('http://3.111.226.44:3020/api/v1/todos',payload, config);
                    console.log("2. ",data)

                }
                // const data = await getTodoList();
                console.log({data})
                setSuccess(data?.data);
                showMessage({
                    message: `Todo successfully ${form._id ? 'updated': 'created'}`,
                    description: data.message,
                    type: "success",
                    duration:1000
                });
                // setTodoPagination(data?.pagination)
            } catch (error:any) {
                console.log( {error: error.response})
            }
    }
    return (
        <>
            <View style={{ padding: CSS_CONSTANTS.padding.sm, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('List')}>
                    <Ionicon name="md-arrow-back" size={24} />
                </TouchableOpacity>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold', marginHorizontal: CSS_CONSTANTS.marginHorizontal }}>Add Todo</Text>
            </View>
            <ScrollView>
                {/* <Modal style={{width:'50%', height:200}} visibleStatus={visibleStatus}> */}
                <Input placeholder='Enter @title' onChange={(value: string) => setForm({ ...form, title: value })} value={form?.title}  />
                <Input placeholder='Enter @description' onChange={(value: string) => setForm({ ...form, description: value })} value={form?.description}  />
                {form?._id && (<View>
                <TouchableOpacity disabled={form?._id ? true : false} style={{
                    marginHorizontal: CSS_CONSTANTS.marginHorizontal * 1.5,
                    borderWidth: 0.5,
                    paddingHorizontal: CSS_CONSTANTS.paddingHorizontal,
                    paddingVertical: CSS_CONSTANTS.paddingVertical,
                    borderRadius: CSS_CONSTANTS.borderRadius.xs,
                    marginVertical: CSS_CONSTANTS.marginVertical,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    ...(form?._id && {backgroundColor: 'rgba(221, 221, 221, 0.65)'})
                }}
                    onPress={() => setVisibleStatus(true)}
                >
                    <Text style={{ fontSize: 16, ...(true && {flexDirection: 'row'}) }}>{form?.status ? titleize(form.status) : 'Choose @status'}</Text>
                    <Ionicon name='chevron-down-outline' size={25} />
                </TouchableOpacity>
                <Text 
                style={{
                    marginVertical: CSS_CONSTANTS.marginVertical,
                    marginHorizontal: CSS_CONSTANTS.marginHorizontal * 2,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    color:'red'
                }}
                >You can't edit status</Text>
                </View>)}
                {/* <TouchableOpacity style={{
                    marginHorizontal: CSS_CONSTANTS.marginHorizontal * 1.5,
                    borderWidth: 0.5,
                    paddingHorizontal: CSS_CONSTANTS.paddingHorizontal,
                    paddingVertical: CSS_CONSTANTS.paddingVertical,
                    borderRadius: CSS_CONSTANTS.borderRadius,
                    marginVertical: CSS_CONSTANTS.marginVertical,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                    onPress={() => setVisibleDate(true)}
                >
                    <Text style={{ fontSize: 16 }}>{form?.status ? titleize(form.status) : 'Choose @date'}</Text>
                    <Ionicon name='chevron-down-outline' size={25} />
                </TouchableOpacity> */}

                <TouchableOpacity style={{ marginHorizontal: CSS_CONSTANTS.marginHorizontal * 1.5, backgroundColor: '#7dffa0', borderColor: '#00e63d', borderWidth: 0.5, paddingHorizontal: CSS_CONSTANTS.paddingHorizontal, paddingVertical: CSS_CONSTANTS.paddingVertical, borderRadius: CSS_CONSTANTS.borderRadius.xs, marginVertical: CSS_CONSTANTS.marginVertical, justifyContent: 'center', alignItems: "center" }} onPress={()=>AddToDos()}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Click to submit</Text>
                </TouchableOpacity>
                {/* </Modal> */}

            </ScrollView>
            <Modal transparent={true}
                visible={visibleStatus}
                onRequestClose={() => setVisibleStatus(false)}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(87, 112, 110, 0.77)',
                    // opacity: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: CSS_CONSTANTS.padding.xlg
                }}>
                    <View style={{
                        width: 300,
                        height: 150,
                        maxHeight: 500,
                        backgroundColor: 'white',
                        paddingHorizontal: CSS_CONSTANTS.padding.sm,
                        paddingVertical: CSS_CONSTANTS.padding.xs,
                        borderWidth: 2, borderColor: 'rgba(78, 22, 94, 0.79)',
                        borderRadius: 8


                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold' }}>Choose Status</Text>
                            <Ionicon name='ios-close-circle-outline' size={24} color={'red'} onPress={() => setVisibleStatus(false)} />
                        </View>
                        <ScrollView style={{marginVertical:CSS_CONSTANTS.marginVertical}}>
                            {["SCHEDULED", "INPROGRESS", "COMPLETED"].map((item, index) => (
                                <View key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginVertical: CSS_CONSTANTS.marginVertical*0.5
                                }}>
                                    <TouchableOpacity onPress={()=>setForm({...form, status: item})}>
                                    <Text>{titleize(item)}</Text>
                                    </TouchableOpacity>
                                    {form?.status === item ? <Feathericon name='check-circle' color={'green'} />: ''}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal transparent={true}
                visible={visibleDate}
                onRequestClose={() => setVisibleDate(false)}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(87, 112, 110, 0.77)',
                    // opacity: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: CSS_CONSTANTS.padding.xlg
                }}>
                    <View style={{
                        width: 300,
                        height: 150,
                        maxHeight: 500,
                        backgroundColor: 'white',
                        paddingHorizontal: CSS_CONSTANTS.padding.sm,
                        paddingVertical: CSS_CONSTANTS.padding.xs,
                        borderWidth: 2, borderColor: 'rgba(78, 22, 94, 0.79)',
                        borderRadius: 8


                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold' }}>Choose Date</Text>
                            <Ionicon name='ios-close-circle-outline' size={24} color={'red'} onPress={() => setVisibleDate(false)} />
                        </View>
                        <View style={{marginVertical:CSS_CONSTANTS.marginVertical}}>
                            {["SCHEDULED_", "INPROGRESS", "COMPLETED"].map((item, index) => (
                                <View key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginVertical: CSS_CONSTANTS.marginVertical*0.5
                                }}>
                                    <TouchableOpacity onPress={()=>setForm({...form, status: item})}>
                                    <Text>{titleize(item)}</Text>
                                    </TouchableOpacity>
                                    {form?.status === item ? <Feathericon name='check-circle' color={'green'} />: ''}
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}