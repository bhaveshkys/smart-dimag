import Particles from 'react-particles-js';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import { Component } from 'react';
import FaceRecog from './Components/FaceRecog/FaceRecog';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';


const particlesOption ={ 
  particles:{
    number:{
      value:185,
        density :{
        enable:true,
        value_area: 800
      }
    }
  }
}
const initialState={
  
    input :'',
    imageurl:'',
    box:'',
    route:'signin',
    isSignedin:false,
    user :{
      id:' ',
      name:' ',
      email:' ',
      entries:' ',
      date:' ',
    }
  
}
class App extends Component {
  
  constructor(){
    super();
    this.state= initialState
  }
  loadUser=(data)=>{
    this.setState({user :{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      date:data.date,
    }})
  }
  calculateFaceLocation=(data)=>{
    const clarifai=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height =Number(image.height);
    return{
      leftCol: clarifai.left_col*width,
      topRow:clarifai.top_row *height,
      rightCol:width-(clarifai.right_col*width),
      bottomRow:height-(clarifai.bottom_row*height)
    }
  }
  makeBox =(box)=>{
    console.log(box);
    this.setState({box});
  }
  onInputChange =(event)=>{
    this.setState({input :event.target.value});
  }
  onButtonClick=()=>{
    if(this.state.input.length===0){
      return(console.log("empty input"))
    } else{
    this.setState({imageurl: this.state.input});
    fetch('https://murmuring-bayou-87293.herokuapp.com/imageURL',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body : JSON.stringify({
          input : this.state.input
      })
    })
    .then(response=>response.json())
    .then(response =>{
      if(response){
        fetch('https://murmuring-bayou-87293.herokuapp.com/image',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({
                id : this.state.user.id
            })
        }).then(response => response.json())
          .then(count =>{
            this.setState(Object.assign(this.state.user,{entries:count}))
          })
      }
      this.makeBox(this.calculateFaceLocation(response))
    });
  }
  }
  onRouteChange=(route  )=>{
    if (route==='home') {
      this.setState({isSignedin:true})
    } else if(route==='signin' || route==='register'){
      this.setState(initialState)
    }
    this.setState({route:route})
  }
  render(){
    return (
      <div className="App">
          <Particles className="part" params={{particlesOption}} />
          <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange}/>
          {this.state.route=== 'home'
          ?<div>
            <Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onButtonClick={this.onButtonClick}
            onInputChange={this.onInputChange}/>
            <FaceRecog box={this.state.box} imageurl={this.state.imageurl}/>
          </div> 
          : 
            (this.state.route==='signin'
            ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
          
          }   
          
        
      </div>
    );
  }
}

export default App;
