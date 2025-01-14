import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from axios;

export default class MeteorScreen extends Component {
    constructor(props){
        super(props);
        this.state={meteors:{},};
    }

    componentDidMount(){
        this.gateMeteors()
    }

    gateMeteors=()=>{
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ")
        .then(Response => {
            this.setState({meteors:Response.data.near_hearth_objet}
                .catch(error=>{
                    Alert.alert(error.message)
                })
            )
        })
    }


    render() {

        if (object.keys(this.state).leng==0)

            {

                return (
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                       <Text>cargando</Text> 
                    </View>
                )

            }

            else{let meteor_arr=Object.case(this.state.meteors).map(meteor_date=>{

                return this.state.meteors[meteor_date]

            })
        
            let meteors=[].concat.apply([],meteor_arr);
            meteors.forEach (element);{
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score = threatScore;
            }
                
            };

        }

        return (
            <View

                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}