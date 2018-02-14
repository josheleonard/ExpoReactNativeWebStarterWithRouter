import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  BackHandler
} from 'react-native';
import logo from './logo.png'
import { 
  MemoryRouter as NativeRouter,
  Route,
} from 'react-router';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

let TheRouter = Router;
if(Platform.OS === "web") {
  TheRouter = Router;
} else {
  TheRouter = NativeRouter;
}

class StartPage extends React.Component {
constructor(props) {
  super(props)
  this.browserHistory;
  if(Platform.OS === "web") {
    this.browserHistory = createBrowserHistory();
  } else {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.history.push('/')
      return true; //prevent app close
    });
  }  
}
  render() {
    return <View>
    <Text>
      To get started, edit src/App.js and save to reload.
    </Text>
  </View>    
  }
}

const HomePage = props => <View>
  <View>
    <Image source={logo} style={{width: 100, height: 100}} />
    <Text>Welcome to React</Text>
    <Text onPress={()=>props.history.push('/start')}>
        To get started, edit src/App.js and save to reload.
    </Text>
  </View>
</View>

const LogoPage = props => <View>
  <View>
    <Image source={logo} style={{width: 100, height: 100}} />
    <Text>Welcome to React</Text>
  </View>
</View>

class TheApp extends Component {
  render() {
    return (<TheRouter history={this.browserHistory}><View>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/logo" component={LogoPage} />
      <Route exact path="/start" component={StartPage} />
    </View></TheRouter>);
  }
}



export default TheApp;
