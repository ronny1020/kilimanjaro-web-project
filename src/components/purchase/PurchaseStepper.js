import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

export default function PurchaseStepper(props) {
  const classes = useStyles()

  const steps = ['購物車', '運送方式', '付款方式', '最後確認', '訂單完成']

  return (
    <div className="container">
      <div className={classes.root}>
        <Stepper activeStep={props.activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  )
}
