import React, {Component} from "react"
import "./App.css"

class Profile extends Component{
    render(){
        let artist = {
            name: "",
            followers: {total: ''},
            images: [{url: ''}],
            genres: [],
        }
       artist = this.props.artist !== null ? this.props.artist : artist
      
        return(
                                   
            <div className="profile">
                <img src={artist.images[0].url} alt="Profile" className="profile-img"/>

                <div className="profile-info">
                    <div className="profile-name">{artist.name}</div>
                    <div className="profile-followers">{artist.followers.total} followers</div>
                    <div className="profile-generes">
                         Generes :: 
                        {
                            artist.genres.map((gener,index) => {
                                gener = gener !== artist.genres[artist.genres.length-1] ? ` ${gener}, ` : ` & ${gener}`
                            return(
                                    <span key={index}>{gener}</span>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
