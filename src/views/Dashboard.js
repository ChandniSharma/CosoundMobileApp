import {Component} from "react";
import styles from "../stylesheet/Dashboard.style";
import {SafeAreaView} from 'react-navigation';
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity} from "react-native";
import {Icon} from "native-base";


export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={
            text:"Write Something...",
            music:[
                {
                    id:1,
                    music:"o mere dil ke chain",
                    time:"5.20"
                },
                {
                    id:2,
                    music:"o mere dil ke chain",
                    time:"5.20"
                },
                {
                    id:3,
                    music:"o mere dil ke chain",
                    time:"5.20"
                },
            ],
            images:[
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image:require('../assets/homepage-video-placeholder.jpg')
                },
            ],

            post:[
                {
                    type:"video",
                    like:"10",
                    comment:"56",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                    "ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur " +
                    "adipisicing elit, sed do eiusmod tempor incididunt ut",
                    endTime:"5.02",
                    startTime:"0.00",
                    name:"Bryan Garza",
                    occupation:"Job Title/Artist Name.",
                    image:require('../assets/signup-type-pro.png'),

                },
                {
                    type:"music",
                    like:"10",
                    comment:"56",
                    endTime:"5.02",
                    startTime:"0.00",
                    name:"Bryan Garza",
                    occupation:"Job Title/Artist Name.",
                    image:require('../assets/signup-type-pro.png'),
                    song:"Kygo",
                    description:"Of Monsters and Men - Dirty Paws (Kygo remix)",


                },

                {
                    type:"video",
                    like:"10",
                    comment:"56",
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                    "ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur " +
                    "adipisicing elit, sed do eiusmod tempor incididunt ut",
                    endTime:"5.02",
                    startTime:"0.00",
                    name:"Bryan Garza",
                    occupation:"Job Title/Artist Name.",
                    image:require('../assets/signup-type-pro.png'),

                },

            ]


        }


    }

    renderItem = (music) =>{


        return(
            <View style={{paddin:10}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:9,flexDirection:"row"}}>
                        <Text style={{}}>{music.item.id}.</Text>
                        <Text style={{}}>{music.item.music}</Text>

                    </View>

                    <Text style={{flex:1}}>{music.item.time}</Text>
                </View>

                <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                </View>
            </View>
        )
    };

    renderImage = (music) =>{


        return(
            <View style={{padding:10}}>

                <Image style={{
                    width:100,
                    height:100,
                    borderRadius:10,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffset: {
                        width: 0.8,
                        height: 0.8
                    },
                    shadowOpacity: 0.2,
                    zIndex:-1
                }}
                       source={require('../assets/homepage-video-placeholder.jpg')}>

                </Image>
            </View>
        )
    };


    renderPost = (post) =>{


        return(
            <View style={{marginBottom:"3%"}}>
                {post.item.type==="music"?<View style={{
                    width:"100%",
                    backgroundColor:"white",
                    marginTop:10,
                    padding:10,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowOpacity: 0.2,
                }}>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row"}}>

                            <View style={{flex:9,flexDirection:"row",marginTop:5}}>
                                <View style={{
                                    height:40,width:40,
                                    borderRadius:20,
                                    elevation:3,
                                    backgroundColor:"white",
                                    alignSelf:"center",
                                    shadowColor: 'rgba(0,0,0,1)',
                                    shadowOffset: {
                                        width: 1,
                                        height: 1
                                    },
                                    shadowOpacity: 0.8,
                                }}/>
                                <View style={{paddingLeft:10,marginTop:3}}>
                                    <Text>{post.item.name}</Text>
                                    <Text>{post.item.occupation}</Text>

                                </View>



                            </View>
                            <Text style={{flex:1,colo:"black",fontSize:30}}>...</Text>

                        </View>

                        <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                        </View>

                        <View style={{padding:5,marginBottom:"5%"}}>
                            <View style={{flexDirection:"row",padding:10}}>

                                <View style={{flex:4,}}>

                                    <Image style={{
                                        width:100,
                                        height:100,
                                        borderRadius:10,
                                        shadowColor: 'rgba(0,0,0,1)',
                                        shadowOffset: {
                                            width: 0.8,
                                            height: 0.8
                                        },
                                        shadowOpacity: 0.2,
                                        zIndex:-1
                                    }}
                                           source={require('../assets/homepage-video-placeholder.jpg')}>

                                    </Image>

                                    <Image style={{
                                        width:60,
                                        height:60,
                                        borderRadius:10,
                                        shadowColor: 'rgba(0,0,0,1)',
                                        shadowOffset: {
                                            width: 0.8,
                                            height: 0.8
                                        },
                                        shadowOpacity: 0.2,
                                        position:"relative",
                                        right:"-50%",
                                        top:"-20%",
                                        zIndex:999
                                    }}
                                           source={require('../assets/close.png')}>

                                    </Image>

                                </View>

                                <View style={{flex:6}}>
                                    <Text style={{color:"#d3d3d3",fontSize:20}}>Kygo</Text>

                                    <Text style={{color:"black",fontSize:20}}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>


                                </View>

                            </View>

                            <View style={{width:"100%",backgroundColor:"#d3d3d6"}}>
                                <Image style={{width:"100%",height:50}} source={require('../assets/rename.gif')}/>
                            </View>

                            <View style={{width:"100%",justifyContent:"center",flexDirection:"row",marginTop:"5%",marginBottom:"5%"}}>

                                <Text style={{flex:8.5,colo:"black",fontSize:15,marginTop:5}}>0.00</Text>
                                <Text style={{flex:1.5,colo:"black",fontSize:15}}>2.03</Text>

                            </View>
                        </View>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row",marginTop:"5%",marginBottom:"5%"}}>

                            <View style={{flex:9,flexDirection:"row"}}>
                                <View style={{borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,justifyContent:'center',
                                    alignItems:"center",flexDirection:'row',height:40,width:80}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                    <Text>10</Text>
                                </View>

                                <View style={{marginLeft:10,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                    justifyContent:'center',alignItems:"center",flexDirection:'row',height:40,width:80}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                    <Text>56</Text>

                                </View>
                            </View>

                            <View style={{flex:1,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                justifyContent:'center',alignItems:"center",height:40}}>

                                <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>

                            </View>


                        </View>

                        <View style={{marginTop:"5%",marginBottom:'5%',alignItems:"center",flexDirection:'row'}}>

                            <View style={{flex:1,height:1,backgroundColor:"#d3d3d3"}}>

                            </View>

                            <View style={{borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,justifyContent:'center',
                                alignItems:"center",flexDirection:'row',height:40,width:160}}>

                                <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                <Text>9 Comments</Text>

                                <View style={{marginLeft:10,flex:1,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                    justifyContent:'center',alignItems:"center",height:40,width:160}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>

                                </View>
                            </View>


                            <View style={{flex:1,height:1,backgroundColor:"#d3d3d3"}}>

                            </View>

                        </View>



                </View>
                    :
                    <View style={{
                        width:"100%",
                        backgroundColor:"white",
                        marginTop:10,
                        padding:10,
                        shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowOpacity: 0.2,
                    }}>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row"}}>

                            <View style={{flex:9,flexDirection:"row",marginTop:5}}>
                                <Image style={{
                                    height:40,width:40,
                                    borderRadius:20,
                                    elevation:3,
                                    backgroundColor:"white",
                                    alignSelf:"center",
                                    shadowColor: 'rgba(0,0,0,1)',
                                    shadowOffset: {
                                        width: 1,
                                        height: 1
                                    },
                                    shadowOpacity: 0.8,
                                }} resizeMode={"contain"} source={post.item.image}/>


                                <View style={{paddingLeft:10,marginTop:3}}>
                                    <Text>{post.item.name}</Text>
                                    <Text>{post.item.occupation}</Text>

                                </View>



                            </View>
                            <Text style={{flex:1,colo:"black",fontSize:30}}>...</Text>

                        </View>

                        <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                        </View>

                        <View >
                            <Text style={{fontSize:18}}>{post.item.text}</Text>
                        </View>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row",marginTop:"5%",marginBottom:"5%"}}>

                            <View style={{flex:9,flexDirection:"row"}}>
                                <View style={{borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,justifyContent:'center',
                                    alignItems:"center",flexDirection:'row',height:40,width:80}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                    <Text>10</Text>
                                </View>

                                <View style={{marginLeft:10,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                    justifyContent:'center',alignItems:"center",flexDirection:'row',height:40,width:80}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                    <Text>56</Text>

                                </View>
                            </View>

                            <View style={{flex:1,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                justifyContent:'center',alignItems:"center",height:40}}>

                                <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>

                            </View>


                        </View>

                        <View style={{marginTop:"5%",marginBottom:'5%',alignItems:"center",flexDirection:'row'}}>

                            <View style={{flex:1,height:1,backgroundColor:"#d3d3d3"}}>

                            </View>

                            <View style={{borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,justifyContent:'center',
                                alignItems:"center",flexDirection:'row',height:40,width:160}}>

                                <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>
                                <Text>9 Comments</Text>

                                <View style={{marginLeft:10,flex:1,borderRadius:20,borderWidth:1,borderColor:"#d3d3d3",padding:10,
                                    justifyContent:'center',alignItems:"center",height:40,width:160}}>

                                    <Image style={{width:20,height:20,tintColor:"#d3d3d3"}} resizeMode={"contain"} source={require("../assets/tickMark.png")}/>

                                </View>
                            </View>


                            <View style={{flex:1,height:1,backgroundColor:"#d3d3d3"}}>

                            </View>

                        </View>




                </View>}

                <View style={{width:"100%",flexDirection:"row",backgroundColor:"#d3d3d3"}}>
                    <Image style={{
                        height:40,
                        width:40,
                        marginLeft:10,
                        borderRadius:20,
                        elevation:3,
                        backgroundColor:"white",
                        alignSelf:"center",
                        shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 1,
                            height: 1
                        },
                        shadowOpacity: 0.8,
                    }} resizeMode={"contain"} source={post.item.image}/>
                    <TextInput
                        style={{height: 100,justifyContent:"flex-start",padding:10 }}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
            </View>
        )
    };

    render(){
        return(
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{backgroundColor:'rgb(248,249,248)'}}>
                <View style={{ backgroundColor: 'rgb(37,182,173)', height:64}}>

                <View style={{ flexDirection: 'row', flex: 1, backgroundColor:'white', marginTop:'2%' }}>
                            {/* <Text style={homeStyle.textSideTitle}>cosound</Text> */}
                            <Image style={styles.imgSideTitle} />
                            <View style={{flex:0.6}}/>
                            <TouchableOpacity style={styles.btnMenuBar}>
                                {/* <Image style={homeStyle.imgMenuBar} source={require('../assets/close.png')} /> */}
                            </TouchableOpacity>
                        </View>
</View>
                        <View style={styles.viewUserPhoto}>
                         <Image />
                        </View>


                    <View style={{alignItems:"center",marginTop:25}}>
                        <Text style={styles.textUserName}>Megan Impey</Text>
                        <Text style={{fontSize:18}}>Service Director</Text>
                        
                    </View>

                    <View style={styles.viewLoginButton}>

                        <TouchableHighlight style={[styles.loginButton]}>
                            <Text style={styles.textLoginButtonTitle}>Follow</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={null} style={[styles.imageButton]}>
                            <Text></Text>
                        </TouchableHighlight>

                    </View>

                    <View style={{
                            width:"100%",
                            backgroundColor:"white",
                            marginTop:10,
                            padding:10,
                            shadowColor: 'rgba(0,0,0,1)',
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowOpacity: 0.2,
                        }}>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row"}}>

                            <Text style={{flex:9,colo:"black",fontSize:25,marginTop:5}}>My Music</Text>
                            <Text style={{flex:1,colo:"black",fontSize:30}}>+</Text>

                        </View>

                        <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                        </View>

                        <View>

                            <View style={{padding:5,marginBottom:"5%"}}>
                                <View style={{flexDirection:"row",padding:10}}>

                                    <View style={{flex:4,}}>

                                        <Image style={{
                                            width:100,
                                            height:100,
                                            borderRadius:10,
                                            shadowColor: 'rgba(0,0,0,1)',
                                            shadowOffset: {
                                                width: 0.8,
                                                height: 0.8
                                            },
                                            shadowOpacity: 0.2,
                                            zIndex:-1
                                        }}
                                               source={require('../assets/homepage-video-placeholder.jpg')}>

                                        </Image>

                                        <Image style={{
                                            width:60,
                                            height:60,
                                            borderRadius:10,
                                            shadowColor: 'rgba(0,0,0,1)',
                                            shadowOffset: {
                                                width: 0.8,
                                                height: 0.8
                                            },
                                            shadowOpacity: 0.2,
                                            position:"relative",
                                            right:"-50%",
                                            top:"-20%",
                                            zIndex:999
                                        }}
                                               source={require('../assets/close.png')}>

                                        </Image>

                                    </View>

                                    <View style={{flex:6}}>
                                        <Text style={{color:"#d3d3d3",fontSize:20}}>Kygo</Text>

                                        <Text style={{color:"black",fontSize:20}}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>


                                    </View>

                                </View>

                                <View style={{width:"100%",backgroundColor:"#d3d3d6"}}>
                                    <Image style={{width:"100%",height:50}} source={require('../assets/noise.gif')}/>
                                </View>

                                <View style={{width:"100%",justifyContent:"center",flexDirection:"row",marginTop:"5%",marginBottom:"5%"}}>

                                    <Text style={{flex:8.5,colo:"black",fontSize:15,marginTop:5}}>0.00</Text>
                                    <Text style={{flex:1.5,colo:"black",fontSize:15}}>2.03</Text>

                                </View>
                            </View>

                            <FlatList
                                data={this.state.music}
                                renderItem={this.renderItem}
                                keyExtractor={ (item, index) => index.toString()}
                            />

                            <View style={{padding:10,justifyContent:"center",alignItems:"center"}}>

                                <Text style={{flex:1.5,colo:"black",fontSize:20}}>View More...</Text>

                            </View>

                        </View>

                    </View>


                    <View style={{
                        width:"100%",
                        backgroundColor:"white",
                        marginTop:20,
                        padding:10,
                        shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowOpacity: 0.2,
                    }}>

                        <View style={{width:"100%",justifyContent:"center",flexDirection:"row"}}>

                            <Text style={{flex:9,colo:"black",fontSize:25,marginTop:5}}>My Images</Text>
                            <Text style={{flex:1,colo:"black",fontSize:30}}>+</Text>

                        </View>

                        <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                        </View>

                        <View>

                            <FlatList
                                numColumns={3}
                                data={this.state.images}
                                renderItem={this.renderImage}
                                keyExtractor={ (item, index) => index.toString()}
                            />

                            <View style={{padding:10,marginTop:10,justifyContent:"center",alignItems:"center"}}>

                                <Text style={{flex:1.5,colo:"black",fontSize:20}}>View More...</Text>

                            </View>

                        </View>

                    </View>



                    <View style={{
                        width:"100%",
                        backgroundColor:"white",
                        marginTop:20,
                        padding:10,
                        shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowOpacity: 0.2,
                    }}>

                        <TextInput
                            style={{height: 100,justifyContent:"flex-start" }}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />


                        <View style={{marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"}}>

                        </View>


                        <View style={{flexDirection:'row',height:30,alignItems:"center"}}>

                            <Icon name = 'ios-locate' style={{color:"green"}} />
                            <Text style={{color:"black",fontSize:20,paddingLeft:5}}>Music</Text>

                            <Icon name = 'ios-locate' style={{color:"green",paddingLeft:15}} />
                            <Text style={{color:"black",fontSize:20,paddingLeft:5}}>Video</Text>

                            <Icon name = 'ios-locate' style={{color:"green",paddingLeft:15}} />
                            <Text style={{color:"black",fontSize:20,paddingLeft:5}}>Images</Text>
                        </View>

                    </View>


                    <View style={styles.viewPostButton}>

                        <TouchableHighlight style={[styles.postButton]}>
                            <Text style={styles.textLoginButtonTitle}>Post -></Text>
                        </TouchableHighlight>


                    </View>


                    <View>

                        <FlatList
                            data={this.state.post}
                            renderItem={this.renderPost}
                            keyExtractor={ (item, index) => index.toString()}
                        />


                    </View>

                    <View style={{width:"100%",height:"15%",backgroundColor:"rgb(52,52,52)",marginBottom:"15%",padding:5,justifyContent:"center",alignItems:"center"}}>

                        <View style={{flexDirection:"row",backgroundColor:"rgb(52,52,52)",marginTop:"5%"}} >
                            <Text style={{flex:8,color:"#fff",fontSize:20}}>   (c)elit.Nulla 2018</Text>
                            <Text style={{flex:2,color:"#fff",fontSize:20}}>+ - +</Text>
                        </View>

                    </View>


                </KeyboardAwareScrollView>
            </SafeAreaView>


        )
    }
}