import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

let questionData = {1:"How would you rate this item?",
                    2:"How'd you like to review?"}

class Question extends React.Component{
    constructor(){
        super()
        this.state = {questions:questionData}
    }
    render(){
        return (
            <div>
                <Container maxWidth="xs" style = {{marginBottom:'1vh'}}>
                    <Typography variant="h4" 
                    style={{
                     textAlign:'center',
                     margin:'0',
                     fontFamily: "Permanent Marker", 
                     fontSize:'5vh',
                }}>
                        {this.state.questions[this.props.n]}
                    </Typography> 
                </Container>  
            </div>
        )
    }
}

export default Question