import React, { useEffect } from 'react'
import CardSecondary from '../../components/CardSecondary'
import PurchaseStepper from '../../components/purchase/PurchaseStepper'

function PurchaseComplied() {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace('./')
    }, 3000)
  }, [])

  return (
    <>
      <PurchaseStepper activeStep={5} />
      <CardSecondary>
        <h1>訂單完成</h1>
        <p>感謝您的訂購本產品，將於3秒後轉跳回首頁。</p>
        <p>若無自動轉跳，請點下方按鈕回到首頁。</p>
        <div className="form-inline">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.replace('./')
            }}
          >
            首頁
          </button>
        </div>
      </CardSecondary>
    </>
  )
}

export default PurchaseComplied
