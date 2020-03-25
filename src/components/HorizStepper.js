import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmoOptions from './Options';
import Question from './Question'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}



export default function HorizStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState([0, false]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => [prevActiveStep[0] + 1, false]);
  };

  const makeDisappear = ()=>{
    setActiveStep(prevActiveStep => [prevActiveStep[0], true])
  }
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
        <div>
          {/* <Question n={1}/> */}
          <EmoOptions parentCallback= {handleNext}/>
        </div>)
      case 1:
        return(
        <div>
          <Question n={2} />
        </div>)
      case 2:
        return 'Last Step!';
      default:
        return 'Unknown stepIndex';
    }
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep[0]} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep[0] === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
          </div>
        ) : (
          <div>
            <Typography onClick={activeStep[1]? handleNext: ''}
             className={classes.instructions}>
              {getStepContent(activeStep[0])}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
// export default class HorizStepper extends React.Component{
//   constructor(){
//     super()
//     this.classes = useStyles();
//     this.state = {activeStep:0}
//     this.steps = getSteps();
//   }
//   handleNext = () => {
//     this.setState(prevActiveStep => prevActiveStep + 1);
//   };

//   handleBack = () => {
//     this.setState(prevActiveStep => prevActiveStep - 1);
//   };

//   // const handleReset = () => {
//   //   setActiveStep(0);
//   // };
//   render(){
//   return (
//     <div className={this.classes.root}>
//       <Stepper activeStep={this.state.activeStep} alternativeLabel>
//         {this.steps.map(label => (
//           <Step key={label}>
//             <StepLabel></StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {this.state.activeStep === this.steps.length ? (
//           <div>
//             <Typography className={this.classes.instructions}>All steps completed</Typography>
//             {/* <Button onClick={handleReset}>Reset</Button> */}
//           </div>
//         ) : (
//           <div>
//             <Typography onClick={this.handleNext} className={this.classes.instructions}>
//               {getStepContent(this.state.activeStep)}</Typography>
//           </div>
//         )}
//       </div>
//     </div>
//   );}
// }
