import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import IndexScreen from "./src/screens/IndexScreen";
//import { BlogProvider } from './src/Context/BlogContext';
import { Provider } from './src/Context/BlogContext';
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Index: IndexScreen,
    Show:ShowScreen,
    Create:CreateScreen,
    Edit:EditScreen

  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Crud Operation"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  // return <BlogProvider>
  //   <App />
  // </BlogProvider>
  return <Provider>
    <App />
  </Provider>

};
