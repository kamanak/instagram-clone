// @ts-nocheck
import React,{createContext,useEffect,useReducer,useContext} from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom'
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import SignUp from './components/screens/SignUp';
import CreatePost from './components/screens/CreatePost';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import {reducer,initialState} from './reducer/userReducer'
import UserProfile from './components/screens/UserProfile';
import SuscribesUserPosts from './components/screens/SuscribesUserPosts';
export const UserContext = createContext()
const Routing =() =>{
  const history = useHistory()
  const{state,dispatch} = useContext(UserContext)
  useEffect(() =>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type:"USER",payload:user})
        
      }else{
        history.push('/login')
      }
  },[])
   return(
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
          <Route path="/profile/:userid" component={UserProfile} />
          <Route path="/myfollowerpost" component={SuscribesUserPosts} />


      </Switch>  
   )
}

function App() {
  const[state,dispatch]= useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar />
      <Routing />
    </Router>
   </UserContext.Provider>
  );
}

export default App;
