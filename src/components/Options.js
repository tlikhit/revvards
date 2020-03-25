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
import Question from './Question';

const useStyles = {
    inactive: {
        fontSize: '15vh',
        marginBottom: '2vh',
        color:'purple'
    },
    active: {
        fontSize: '15vh',
        marginBottom: '2vh',
        color:'red'
      }}


class EmoOptions extends React.Component{
    constructor(){
        super()
        this.state = {clicked: [false, false, false]}
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
                let newState = [false, false, false]
                newState[n] = true
                return ({clicked: newState})
            })
            // console.log("Array should be printed")
            // console.log(this.state.clicked)
            // console.log(this.state)
        }}
        
    render(){
        return(
                <Grid container
                direction="column"
                justify="space-around"
                alignItems="center"
                height='100%'>
                    <Question n={1}/>
                    <Grid item xs={12}>
                        <ThumbUpOutlinedIcon onClick={()=>this.handleClick(0)} 
                        style={this.state.clicked[0] ? useStyles.active: useStyles.inactive} />
                    </Grid>
                    <Grid item xs={12}>
                        <FaceOutlinedIcon onClick={()=>this.handleClick(1)} 
                        style={this.state.clicked[1] ? useStyles.active: useStyles.inactive} />
                    </Grid>
                    <Grid item xs={12}>
                        <ThumbDownOutlinedIcon onClick={()=>this.handleClick(2)} 
                        style={this.state.clicked[2] ? useStyles.active: useStyles.inactive} />
                    </Grid>                                
                </Grid>)        
    }
}

export default EmoOptions