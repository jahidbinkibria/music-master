import React, {Component} from "react";
import "./App.css";
import {FormGroup, FormControl, InputGroup, Glyphicon} from "react-bootstrap";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            query: ''
        }
    }

    search(){
        console.log(this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        fetch(FETCH_URL, {
            methos: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const artists = json.artists.items[0]
            console.log(artists)
        })
    }


    render(){
        return(
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                         <FormControl type="text" placeholder="Search an Artist....." 
                         value={this.state.query} onChange={event=>{this.setState({query: event.target.value})}}
                         onKeyPress={event => {
                             if(event.key === "Enter"){
                                 this.search()
                             }
                         }}
                         />

                          <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                          </InputGroup.Addon>
                    </InputGroup>

                </FormGroup>
                 <div className="profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div>
                    Gallery
                </div>
            </div>
        )
    }
}

export default App