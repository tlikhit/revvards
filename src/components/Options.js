import React from 'react'
import '../App.css'
import Question from './Question';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import {Grid} from '@material-ui/core'
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = {
    inactive: {
        fontSize: '13vh',
        margin: '2vh',
        padding:'1vw',
        border: '5px solid black',
        boxShadow: '3px 4px',
        borderRadius: '10px',
    },
    active: {
        fontSize: '15vh',
        margin: '2vh',
        border: '5px solid black',
        boxShadow: '-5px -5px',
        borderRadius: '90%',
        padding: '2vw',
      }}

function TapAgainBanner(props) {
    const [open, setOpen] = React.useState(props.isOpen)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            open= {open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Tap again to confirm"
            action={
            <React.Fragment>
                <IconButton size="small" aria-label="close" 
                color="secondary" onClick={handleClose}>
                <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
            }
        />
    );
}
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
                        <ThumbUpAltRoundedIcon onClick={()=>this.handleClick(0)} 
                        style={this.state.clicked[0] ? useStyles.active: useStyles.inactive} />
                    </Grid>
                    <Grid item xs={12}>
                        <FaceRoundedIcon onClick={()=>this.handleClick(1)} 
                        style={this.state.clicked[1] ? useStyles.active: useStyles.inactive} />
                    </Grid>
                    <Grid item xs={12}>
                        <ThumbDownAltRoundedIcon onClick={()=>this.handleClick(2)} 
                        style={this.state.clicked[2] ? useStyles.active: useStyles.inactive} />
                    </Grid> 
                    {this.state.clicked.includes(true) &&
                    <TapAgainBanner 
                    isOpen={this.state.clicked.includes(true)}/>}                          
                </Grid>) 
    
    }
}

export default EmoOptions