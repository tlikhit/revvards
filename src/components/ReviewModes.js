import React from 'react'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import FaceIcon from '@material-ui/icons/Face';
import {Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import '../App.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Question from './Question';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

const useStyles = {
    inactive: {
        color:'#3F51B5',
        margin: '10%',
        padding: 0,
    },
    active: {
        color:'white',
        margin:'10%',
        padding: 0,
        background: '#3F51B5'
      },
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    video: {
        fontSize: '10vh',
        marginLeft: '40%'
    },
    camera:{
        fontSize: '10vh',
        marginLeft:'40%'
    },
    checkmarks:{
        marginRight: 4
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
                    <Divider variant="inset"/>
                    <List style={classes.root}>
                        <ListItem>
                            <CheckCircleSharpIcon style={classes.checkmarks}/>
                            <ListItemText primary="Get a 10% discount on Cheerble"/>
                        </ListItem>
                        <ListItem>
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
                    <Divider variant="inset"/>
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
        <Grid container
        direction="column"
        justify="space-around"
        alignItems="center"
        height='100%'>
            <Question n={2}/>
            <Grid item xs={12}>
                {this.videoOpt()}
            </Grid>
            <Grid item xs={12}>
                {this.imgOpt()}
            </Grid>                                
        </Grid>) }  
}
export default ReviewModes