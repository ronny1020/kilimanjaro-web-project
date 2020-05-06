import React from 'react'
import $ from 'jquery'

class JqueryComClass extends React.Component {
  constructor() {
    super()
    this.state = {
      // messageHide: '動畫結束，隱藏',
      // messageShow: '動畫結束，呈現',
    }
  }

  componentDidMount() {
    // const messageHide = this.state.messageHide
    // const messageShow = this.state.messageShow

    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#clickme').click(function () {
      $('#book').hide('slow', function () {
        // alert(messageHide)
      })
    })
    $('#nothank').click(function () {
      $('#nothank2').hide('slow', function () {
        // alert(messageHide)
      })
      $('#nothank3').hide('slow', function () {
        // alert(messageHide)
      })
      $('#nothank4').hide('slow', function () {
        // alert(messageHide)
      })
      $('#nothank5').hide('slow', function () {
        // alert(messageHide)
      })
    })

    $('#clickme2').click(function () {
      $('#book').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#giri').click(function () {
      $('#nothank2').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#shop').click(function () {
      $('#nothank2').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#giri2').click(function () {
      $('#nothank3').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#shop2').click(function () {
      $('#nothank4').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#photo').click(function () {
      $('#nothank5').show('slow', function () {
        // alert(messageShow)
      })
    })
    $('#clickme3').click(function () {
      $('#book').fadeIn('slow', function () {
        // alert(messageShow)
      })
    })
    $('#clickme4').click(function () {
      $('#book').fadeOut('slow', function () {
        // alert(messageShow)
      })
    })
    $('#clickme5').click(function () {
      $('div').animate({ left: '250px' })
    })
    $(document).ready(function () {
      $('button2').click(function () {
        $('div').animate({
          height: 'toggle',
        })
      })
    })
  }

  render() {
    return (
      <>
        {/* <button2>Start Animation</button2>
        <div id="clickme">點我隱藏</div>
        <div id="clickme2">點我顯示</div>
        <div id="clickme3">點我入</div>
        <div id="clickme4">點我出</div>
        <div id="clickme5">飛</div>

        <img
          id="book"
          src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/168/81/F011688130.jpg&v=5dc27e63&w=250&h=250"
          alt=""
          width="100"
          height="123"
        ></img> */}
      </>
    )
  }
}

export default JqueryComClass
