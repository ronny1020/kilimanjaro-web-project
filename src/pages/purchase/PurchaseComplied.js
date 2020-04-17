import React from 'react'
import CardSecondary from '../../components/CardSecondary'

function PurchaseComplied() {
  return (
    <>
      <CardSecondary>
        <h1>訂單完成</h1>
        <p>感謝您的訂購本產品，將於3秒後轉跳回首頁。</p>
        <p>若無自動轉跳，請點下方按鈕回到首頁。</p>
        <button className="btn btn-primary">首頁</button>
      </CardSecondary>
    </>
  )
}

export default PurchaseComplied
