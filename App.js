import "react-native-gesture-handler";

import * as SMS from "expo-sms";

import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  createDrawerNavigator,
  useIsDrawerOpen,
} from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(55, 145, 185)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const LogoTitle = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://picsum.photos/id/160/50/50" }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};
function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme !== "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({ navigation, route }) => ({
          //   headerStyle: { backgroundColor: "#222" },
          headerTitle: () => <LogoTitle />,
          //   headerTintColor: "pink",
          headerTitleStyle: {
            fontFamily: "Verdana",
            fontSize: 18,
            letterSpacing: 1,
            fontStyle: "italic",
            fontWeight: 700,
          },
          headerShown: true,
          headerTitleAlign: "left",
          headerTransparent: false,
        })}
      >
        <Stack.Screen
          name='Home'
          options={{ title: "Hommy" }}
          component={HomeScreen}
        />
        <Stack.Screen
          initialParams={{ itemId: 99 }}
          name='Create Post'
          component={CreatePostScreen}
          options={({ navigation }) => ({
            title: "Create the Post",
          })}
        />
        <Stack.Screen
          name='About'
          options={{ title: "Know Us Deep" }}
          component={AboutScreen}
        />
        <Stack.Screen
          name='Blog'
          options={{ title: "Read and decide" }}
          component={BlogScreen}
        />
        <Stack.Screen
          name='Services'
          options={{ title: "We can help you in different ways" }}
          component={ServicesScreen}
        />
        <Stack.Screen
          name='Expert'
          options={{ title: "Welcome me personally" }}
          component={ExpertScreen}
        />
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
  );
}

function HomeScreen({ navigation, route }) {
  let data = { itemId: 79 };
  const [topic, setTopic] = useState("default topic");
  const [content, setContent] = useState("default content");
  const { colors } = useTheme();

  useEffect(() => {
    if (route.params?.topic && route.params?.content) {
      setTopic(route.params?.topic);
      setContent(route.params?.content);
    }
  }, [route.params?.post, route.params?.content]);

  return (
    <View style={styles.container}>
      <Icon name='md-analytics' size={30} color='red' />
      <View style={{ width: 200, justifyContent: "center" }}>
        <Icon.Button
          name='md-analytics-sharp'
          color='red'
          backgroundColor='black'
          size={30}
          borderRadius={0}
          iconStyle={{ marginRight: 30, color: "white" }}
        >
          <Text style={{ color: "yellow", fontWeight: 700 }}>md-analytics</Text>
        </Icon.Button>
      </View>
      <Button
        title='Create Post'
        onPress={() => navigation.navigate("Create Post", data)}
      />
      <Text style={{ fontSize: 30, color: colors.text }}>
        Glad to see you by. Hi!
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>{topic}</Text>
      <Text style={{ fontSize: 30, color: colors.text }}>{content}</Text>
    </View>
  );
}

function CreatePostScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params;
  const [postTopic, setPostTopic] = useState("");
  const [postContent, setPostContent] = useState("");
  const { colors } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener("drawerOpen", e => {
      // Do something when drawer is open
      alert("drawer is open");
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("drawerClose", e => {
      // Do something when drawer is closed
      alert("drawer is closed");
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName='Code2'
        backBehavior='order'
        openByDefault={true}
        drawerPosition='left'
        drawerType='front'
        drawerStyle={{ backgroundColor: "lightgray", width: 240 }}
        overlayColor='rgba(200, 200, 200, 0.1)'
        drawerContentOptions={{
          activeTintColor: "black",
          activeBackgroundColor: "white",
          inactiveTintColor: "grey",
          inactiveBackgroundColor: "black",
        }}
      >
        <Drawer.Screen name='Research2' component={Research2} />
        <Drawer.Screen name='UXDesign2' component={UXDesign2} />
        <Drawer.Screen name='Code2' component={Code2} />
      </Drawer.Navigator>
      <Button
        title='lets know each other'
        onPress={() => navigation.navigate("About")}
      />
      <Text style={{ fontSize: 30 }}>itemId: {itemId}</Text>
      <TextInput
        value={postTopic}
        onChangeText={setPostTopic}
        placeholder='write post topic here'
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: colors.border,
          width: "20%",
        }}
      />
      <TextInput
        value={postContent}
        onChangeText={setPostContent}
        placeholder='write post content here'
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: colors.border,
          width: "20%",
        }}
      />
      <Button
        title='Post'
        onPress={() =>
          navigation.navigate("Home", {
            topic: postTopic,
            content: postContent,
          })
        }
      />
    </View>
  );
}

function AboutScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <Button
        title='looking for details?'
        onPress={() => navigation.navigate("Blog")}
      />
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We are glad that you want to know more about us. We love people. We are
        a UX company that provides you the best not only in the market but from
        our side as well. If we can do more for you, trust us we will. Want to
        have only the best of the best and have the budget. Take sepcialized
        personal consultant service from me. Contact me at - arhan
      </Text>
    </ScrollView>
  );
}

function BlogScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Button
        title='what do we serve'
        onPress={() => navigation.navigate("Services")}
      />
      <Text style={{ fontSize: 30, color: colors.text }}>
        We want you to make an informed decision. Here, find few blogs that
        interests you and read them along the way. Here are our best suggestions
        if you like:
      </Text>
    </View>
  );
}

function ServicesScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Button
        title='free yourself and leave everything on the expert'
        onPress={() => navigation.navigate("Expert")}
      />
      <Text style={{ fontSize: 30, color: colors.text }}>
        Find all the rare and luxurious services on this page
      </Text>
    </View>
  );
}

function ExpertScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='UXDesign' component={UXDesign} />
        <Tab.Screen name='Research' component={Research} />
        <Tab.Screen name='Code' component={Code} />
      </Tab.Navigator>
    </View>
  );
}

function UXDesign({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We take care of the UXDesign
      </Text>
    </View>
  );
}

function Research({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>We do Research</Text>
    </View>
  );
}

function Code({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>We write Code</Text>
    </View>
  );
}

function UXDesign2({ navigation }) {
  const { colors } = useTheme();

  const isDrawerOpen = useIsDrawerOpen();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>
        We take care of the UXDesign
      </Text>
      {!isDrawerOpen ? (
        <Button title='open drawer' onPress={() => navigation.openDrawer()} />
      ) : (
        <Button title='close drawer' onPress={() => navigation.closeDrawer()} />
      )}
    </View>
  );
}

function Research2({ navigation }) {
  const { colors } = useTheme();

  const isDrawerOpen = useIsDrawerOpen();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>We do Research</Text>
      {!isDrawerOpen ? (
        <Button title='open drawer' onPress={() => navigation.openDrawer()} />
      ) : (
        <Button title='close drawer' onPress={() => navigation.closeDrawer()} />
      )}
    </View>
  );
}

function Code2({ navigation }) {
  const { colors } = useTheme();

  const isDrawerOpen = useIsDrawerOpen();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: colors.text }}>We write Code</Text>
      {!isDrawerOpen ? (
        <Button title='open drawer' onPress={() => navigation.openDrawer()} />
      ) : (
        <Button title='close drawer' onPress={() => navigation.closeDrawer()} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 60,
  },
});

export default App;
