import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

let questionData = {1:"How would you rate this item?",
                    2:"How would you like to review this item?"}

class Question extends React.Component{
    constructor(){
        super()
        this.state = {questions:questionData}
    }
    render(){
        return (
            <div>
                <Container maxWidth="xs">
                    <Typography variant="h4" style={{textAlign:'center', margin:'0 5vh'}}>
                        {this.state.questions[this.props.n]}
                    </Typography> 
                </Container>  
            </div>
        )
    }
}

export default Question