import React from 'react'
import '../App.css'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Question from './Question';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

const useStyles = {
    root: {
    },
    inactive: {
        margin: '2vh 10%',
        padding: '0',
        border: '5px solid black',
        borderRadius: '10px',
        width: '80%'
    },
    active: {
        margin: '2vh 10%',
        padding: '0',
        border: '5px solid white',
        borderRadius: '10px',
        width: '80%',
        color: 'white',
        backgroundColor: 'black'
      },
    video: {
        fontSize: '8vh',
        margin: '0',
        marginLeft:'40%',
    },
    pos:{
        margin:'0',
        padding: '0',
        marginLeft:'36%'
    },
    camera:{
        margin: '0',
        fontSize: '8vh',
        marginLeft:'40%'
    },
    pos1: {
        marginLeft: '27%'
    },
    checkmarks:{
        marginLeft:'0',
        marginRight: '10%'
    },
    listItem:{
        margin: '0',
        padding: '0',
        width: '100%',
    },
    grid:{
        // height: '100%',
    },
    divider:{
        color: 'black',
    }

    }

class ReviewModes extends React.Component{
    constructor(){
        super()
        this.state = {clicked: [false, false]}
    }
    sendData(){
        this.props.parentCallback()
    }
    handleClick(n){
        if (this.state.clicked[n]){
            // console.log("Disappearing")
            this.sendData()   
        }else{
            this.setState(state=> {
                // console.log("Changing state")
                let newState = [false, false]
                newState[n] = true
                return ({clicked: newState})
            })
            // console.log("Array should be printed")
            // console.log(this.state.clicked)
            // console.log(this.state)
        }}
        
    videoOpt(){
            const classes = useStyles;
            return (
            <Card
            onClick={()=>this.handleClick(0)} 
            style={this.state.clicked[0] ? useStyles.active: useStyles.inactive} 
            variant="outlined">
                <CardContent>
                    <VideoCallIcon style={classes.video}/>
                    <div style = {classes.pos}>
                    by Video
                    </div>
                    <hr style = {classes.divider}/>
                    <List style={classes.root}>
                        <ListItem style={classes.listItem}>
                            <CheckCircleSharpIcon style={classes.checkmarks}/>
                            <ListItemText 
                            primary="Get a 10% discount on Cheerble" />
                        </ListItem>
                        <ListItem style={classes.listItem}>
                            <ShoppingCartRoundedIcon style={classes.checkmarks}/>
                            <ListItemText 
                            primary="Get a 10% discount on other brands you might also like" />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
            )
          }
        imgOpt(){
            const classes = useStyles;
            return (
            <Card
            onClick={()=>this.handleClick(1)} 
            style={this.state.clicked[1] ? useStyles.active: useStyles.inactive} 
            variant="outlined">
                <CardContent>
                    <PhotoCameraSharpIcon style={classes.camera}/>
                    <div style = {classes.pos1}>
                    by Text & Image
                    </div>
                    <hr style = {classes.divider}/>
                    <List style={classes.root}>
                        <ListItem>
                            <CheckCircleSharpIcon style={classes.checkmarks} />
                            <ListItemText primary="Get a 10% discount on Cheerble"/>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
            )
          }    
    render(){
        return(
        <div>
            <Question n={2}/>
            <Container maxWidth="xs">
                {this.videoOpt()}
                {this.imgOpt()}
            </Container>
        </div>) }  
}
export default ReviewModes