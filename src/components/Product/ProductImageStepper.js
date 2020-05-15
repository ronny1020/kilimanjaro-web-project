import React, { useEffect } from 'react'

import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import Magnifier from 'react-magnifier'

export default function ProductImageStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0)
  const [maxSteps, setMaxSteps] = React.useState(1)
  const [check1, SetCheck1] = React.useState(true)
  const [check2, SetCheck2] = React.useState(true)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  useEffect(() => {
    setMaxSteps(1)
    if (check1) setMaxSteps(2)
    if (check2) setMaxSteps(3)
  }, [check1, check2])

  console.log(maxSteps)
  return (
    <div>
      <Magnifier
        src={
          maxSteps === 1
            ? '../images/products/default.jpg'
            : '../images/products/' +
              props.productID +
              '/' +
              activeStep +
              '.jpg'
        }
        className="w-100 productImage mb-1"
      />

      <div className="row">
        <img
          src={'../images/products/' + props.productID + '/0.jpg'}
          alt=""
          onError={(event) => {
            event.target.src = '../images/products/default.jpg'
          }}
          className="productImageItem col-4"
          onClick={() => {
            setActiveStep(0)
          }}
        />
        <img
          src={'../images/products/' + props.productID + '/1.jpg'}
          alt=""
          onError={(event) => {
            event.target.style.display = 'none'
            SetCheck1(false)
          }}
          className="productImageItem col-4"
          onClick={() => {
            setActiveStep(1)
          }}
        />
        <img
          src={'../images/products/' + props.productID + '/2.jpg'}
          alt=""
          onError={(event) => {
            event.target.style.display = 'none'
            SetCheck2(false)
          }}
          className="productImageItem col-4"
          onClick={() => {
            setActiveStep(2)
          }}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          className="w-100 mt-1"
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </div>
  )
}
