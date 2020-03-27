import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import EmoOptions from './Options';
import ReviewModes from './ReviewModes';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent'
  }
}))

const stepperStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: 'black',
    color: 'white',
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: 'black',
    boxShadow: '0',
    // color: 'white'
  //   backgroundImage:
  //     'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
  }))

function StyleStepIcon(props) {
  const classes = stepperStyles();
  const { active, completed } = props;
  const icons = {
    1: '1',
    2: '2',
    3: '3',
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}


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
      <Stepper className={classes.stepper} activeStep={activeStep}>
          {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={StyleStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            All steps completed.
          </div>
        ) : (
          <div>
              {getStepContent(activeStep)}
          </div>
        )}
      </div>
    </div>
  )
}

export default HorizStepper;