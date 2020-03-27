import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import EmoOptions from './Options';
import ReviewModes from './ReviewModes'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
}));



function HorizStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [1,2,3];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
        <div>
          <EmoOptions parentCallback= {handleNext}/>
        </div>)
      case 1:
        return(
        <div>
          <ReviewModes parentCallback={handleNext} />
        </div>)
      case 2:
        return 'Last Step!';
      default:
        return 'Unknown stepIndex';
    }
  }
  return (
    <div className={classes.root}>
      {/* /]<MuiThemeProvider muiTheme={muiTheme}> */}
      <Stepper style={classes.stepper} activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* </MuiThemeProvider> */}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default HorizStepper;