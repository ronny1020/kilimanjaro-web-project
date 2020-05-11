// import React from 'react'

function DateStyle(props) {
  const JSDateArray = JSON.stringify(props).split(' ')

  let year = JSDateArray[3] + '年'
  let day = JSDateArray[2].replace('0', '') + '日'
  let month = ''
  let week = ''
  let time = JSDateArray[4]
  switch (JSDateArray[1]) {
    case 'Jan':
      month = '1月'
      break
    case 'Feb':
      month = '2月'
      break
    case 'Mar':
      month = '3月'
      break
    case 'Apr':
      month = '4月'
      break
    case 'May':
      month = '5月'
      break
    case 'Jun':
      month = '6月'
      break
    case 'Jul':
      month = '7月'
      break
    case 'Aug':
      month = '8月'
      break
    case 'Sep':
      month = '9月'
      break
    case 'Oct':
      month = '10月'
      break
    case 'Nov':
      month = '11月'
      break
    case 'Dec':
      month = '12月'
      break
    default:
      console.log(`Your date(month) is corrupted.`)
  }
  switch (JSDateArray[0]) {
    case '"Mon':
      week = '(一)'
      break
    case '"Tue':
      week = '(二)'
      break
    case '"Wed':
      week = '(三)'
      break
    case '"Thu':
      week = '(四)'
      break
    case '"Fri':
      week = '(五)'
      break
    case '"Sat':
      week = '(六)'
      break
    case '"Sun':
      week = '(日)'
      break
    default:
      console.log(`Your date(week) is corrupted.`)
  }
  //   return console.log(JSDateArray)
  return year + month + day + week + ' ' + time
}

export default DateStyle
