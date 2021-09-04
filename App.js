import 'react-native-gesture-handler';

import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={{title: 'Hommy'}} component={HomeScreen} />
                <Stack.Screen initialParams={{ itemId: 99 }}  name="Create Post" component={CreatePostScreen} />
                <Stack.Screen name="About" options={{title: 'Know Us Deep'}} component={AboutScreen} />
                <Stack.Screen name="Blog" options={{title: 'Read and decide'}} component={BlogScreen} />
                <Stack.Screen name="Services" options={{title: 'We can help you in different ways'}} component={ServicesScreen} />
                <Stack.Screen name="Expert" options={{title: 'Welcome me personally'}} component={ExpertScreen} />
            </Stack.Navigator>
            {/* <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home"  component={HomeScreen} />
                <Drawer.Screen name="Create Post" component={CreatePostScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Blog" component={BlogScreen} />
                <Drawer.Screen name="Services" component={ServicesScreen} />
                <Drawer.Screen name="Expert" component={ExpertScreen} /> 
            </Drawer.Navigator> */}
            {/* <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home"  component={HomeScreen} />
                <Tab.Screen name="Create Post" component={CreatePostScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
                <Tab.Screen name="Blog" component={BlogScreen} />
                <Tab.Screen name="Services" component={ServicesScreen} />
                <Tab.Screen name="Expert" component={ExpertScreen} />
                </Tab.Navigator> */}
            </NavigationContainer>
    )
}

function HomeScreen({navigation, route}) {
    let data = { itemId: 79 };
    const [topic, setTopic] = useState('default topic');
    const [content, setContent] = useState('default content');

    useEffect(() => {
        if(route.params?.topic && route.params?.content){
            setTopic(route.params?.topic);
            setContent(route.params?.content);
        }
}, [route.params?.post, route.params?.content]);

    return (
      
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="UXDesign" component={UXDesign} />
                <Tab.Screen name="Research" component={Research} />
                <Tab.Screen name="Code" component={Code} />
                </Tab.Navigator>
            <Button title="Create Post" onPress={() => navigation.navigate('Create Post', data)}/>
            <Text style={{fontSize: 30}}>Glad to see you by. Hi!</Text>
            <Text style={{ fontSize: 30 }}>{topic}</Text>
            <Text style={{ fontSize: 30 }}>{content}</Text>
            </View>
    );
}


function CreatePostScreen({navigation, route}) {
    const {itemId} = route.params;
    const [postTopic, setPostTopic] = useState('');
    const [postContent, setPostContent] = useState('');

    return (
        <View style={styles.container}>
            <Drawer.Navigator>
                <Drawer.Screen name="Research2" component={Research2} />
                <Drawer.Screen name="UXDesign2" component={UXDesign2} />
                <Drawer.Screen name="Code2" component={Code2} />
            </Drawer.Navigator>
            <Button title="lets know each other" onPress={() => navigation.navigate('About')}/>
            <Text style={{ fontSize: 30 }}>itemId: {itemId}</Text>
            <TextInput value={postTopic} onChangeText={setPostTopic} placeholder="write post topic here" style={{paddingVertical: 8, paddingHorizontal: 16, borderWidth: 1, borderColor: '#444', width: '20%' }} />
            <TextInput value={postContent} onChangeText={setPostContent} placeholder="write post content here" style={{ paddingVertical: 8, paddingHorizontal: 16, borderWidth: 1, borderColor: '#444', width: '20%' }} />
            <Button title="Post" onPress={() => navigation.navigate('Home', {topic: postTopic, content: postContent})}/>
            </View>
    );
}

function AboutScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Button title="looking for details?" onPress={() => navigation.navigate('Blog')}/>
            <Text style={{fontSize: 30}}>We are glad that you want to know more about us. We love people. We are a UX company that provides you the best not only in the market but from our side as well. If we can do more for you, trust us we will. Want to have only the best of the best and have the budget. Take sepcialized personal consultant service from me. Contact me at - arhan</Text>
            </View>
    );
}

function BlogScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Button title="what do we serve" onPress={() => navigation.navigate('Services')}/>
            <Text style={{fontSize: 30}}>We want you to make an informed decision. Here, find few blogs that interests you and read them along the way. Here are our best suggestions if you like:</Text>
            </View>
    );
}

function ServicesScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Button title="free yourself and leave everything on the expert" onPress={() => navigation.navigate('Expert')}/>
            <Text style={{fontSize: 30}}>Find all the rare and luxurious services on this page</Text>
            </View>
    );
}

function ExpertScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Button title="go to home" onPress={() => navigation.popToTop()}/>
            <Text style={{fontSize: 30}}>Get the expert view from me personally</Text>
            </View>
    );
}

function UXDesign({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We take care of the UXDesign</Text>
            </View>
    );
}

function Research({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We do Research</Text>
            </View>
    );
}

function Code({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We write Code</Text>
            </View>
    );
}

function UXDesign2({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We take care of the UXDesign</Text>
            <Button title="open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="close drawer" onPress={() => navigation.closeDrawer()} />
            <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
    );
}

function Research2({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We do Research</Text>
            <Button title="open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="close drawer" onPress={() => navigation.closeDrawer()} />
            <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
    );
}

function Code2({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>We write Code</Text>
            <Button title="open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="close drawer" onPress={() => navigation.closeDrawer()} />
            <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 60,
        backgroundColor: 'offwhite',
  }
});

export default App
