import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ReactCrop from 'react-image-crop'
import swal from 'sweetalert'
import FadeIn from 'react-fade-in'
import 'react-image-crop/dist/ReactCrop.css'

import Edit from './Edit'
import Favorite from './Favorite'
import Coupon from './Coupon'
import History from './History'
import Cart from '../../Cart'

import Breadcrumb from '../../../components/Breadcrumb'
import LobbyTitle from '../../../components/member/LobbyTitle'
import LobbyCard from '../../../components/member/LobbyCard'
import Login from '../Login'
import Home from '../../Home'
import Product from '../../Product'
import About from '../../About'
import NotFoundPage from '../../NotFoundPage'

import { CardGroup, Row, Col, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { FaEdit } from 'react-icons/fa'

import LoginValidate from '../../../components/LoginValidate'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
function Member(props) {
  //ReactCrop: 參數
  const [imageRef, setImageRef] = useState(null) //原始圖檔<img>
  const [croppedImageUrl, setCroppedImageUrl] = useState(null) //blobURL
  const [src, setSrc] = useState(null) //原始圖檔(base64)
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 })

  const [open, setOpen] = useState(false)
  //modal: 開啟&關閉
  const handleOpen = (event) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => setSrc(reader.result))
    reader.readAsDataURL(event.target.files[0])

    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    // setImageRef(null)
    // setCroppedImageUrl(null)
    //清空input欄位
    document.getElementById('upload_img').value = ''
  }

  const classes = useStyles()
  //避免重複載入初始頭像
  const [loadImg, setLoadImg] = useState(true)
  const [name, setName] = useState('')
  const [point, setPoint] = useState('')
  const [uploadImg, setUploadImg] = useState('')

  if (LoginValidate() === false) {
    return (
      <>
        <Redirect to="/login" />
      </>
    )
  } else {
    var memberID = LoginValidate().userID
    // var valid = LoginValidate.isLogged
    //獲取登入時間: localStorage
    var loginTime = LoginValidate().loginTime
  }

  var url = 'http://localhost:6001/Member/' + memberID
  // console.log(url)
  fetch(url)
    .then(function (resopnse) {
      return resopnse.json()
    })
    .then(function (userdata) {
      setName(userdata.cName)
      setPoint(userdata.rewardsPoints)
      // console.log(userdata.cName)
    })

  //處理base64圖檔:
  function arrayBufferToBase64(buffer) {
    var binary = ''
    var bytes = [].slice.call(new Uint8Array(buffer))

    bytes.forEach((b) => (binary += String.fromCharCode(b)))

    return window.btoa(binary)
  }
  //下載頭像:
  if (loadImg === true) {
    doGetImg()
  }

  function doGetImg() {
    fetch('http://localhost:6001/api/image/' + memberID, {
      method: 'GET',
    })
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          var base64Flag = 'data:image/jpeg;base64,'
          var imageStr = arrayBufferToBase64(buffer)
          // console.log(base64Flag + imageStr)
          setUploadImg(base64Flag + imageStr)
        })
      })
  }

  //預設頭像:
  function addDefaultSRC(event) {
    setLoadImg(false)
    event.target.src = '../../images/interface.svg'
  }

  //打開資料夾: 模擬點擊
  function handleClick() {
    // alert('處理上傳')
    document.getElementById('upload_img').click()
  }

  //上傳頭像: 讀取檔案
  async function handleUpload(event) {
    // console.log(croppedImageUrl)
    // 再從url變回file!
    let postBlob = await fetch(croppedImageUrl).then((r) => r.blob())
    var formData = new FormData()
    formData.append('avatar', postBlob)
    fetch('http://localhost:6001/api/image/' + memberID, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        doGetImg()
        handleClose()
        swal({
          title: '提示訊息',
          text: '頭像已上傳成功!',
          icon: 'success',
        })
        console.log('Success:', response)
      })
  }

  //處理圖片裁切：
  function onImageLoaded(image) {
    //base64
    // console.log(image)
    setImageRef(image)
  }
  //抓取範圍變更時讀crop值:
  function onCropChange(crop) {
    setCrop(crop)
  }
  //抓完後表現crop值:
  function onCropComplete(crop) {
    // console.log(crop)
    makeClientCrop(crop)
  }

  //預覽顯示:
  async function makeClientCrop(crop) {
    if (imageRef && crop.width && crop.height) {
      const croppedResult = await getCroppedImg(
        imageRef,
        crop,
        memberID + '.jpeg'
      )
      //已確定圖片裁剪成功: [object Blob]進去src
      setCroppedImageUrl(croppedResult)
      console.log(croppedImageUrl)
    }
  }

  //顯示裁剪後結果於螢幕
  function getCroppedImg(image, crop, fileName) {
    // console.log(image, crop, fileName)
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        blob.name = fileName
        //file轉成URL以顯示
        resolve(window.URL.createObjectURL(blob))
      }, 'image/jpeg')
    })
  }

  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/lobby">
              <div className="all-page-title page-breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 " align="center">
                      {/* <h1>賣家介紹</h1> */}
                      <p className="text-white">~歡迎來到最棒的會員中心！~</p>
                    </div>
                  </div>
                  <FadeIn>
                    <LobbyTitle
                      string={'會員中心'}
                      isAuth={props.isAuth}
                      setIsAuth={props.setIsAuth}
                    />
                    <div
                      className="container bg-secondary"
                      style={{ overflow: 'auto' }}
                    >
                      <div className="row" style={{ minHeight: '100vh' }}>
                        <div className="col-8 lobbyL">
                          <Breadcrumb />
                          <Row style={{ marginBottom: '1em' }}>
                            <Col lg={8} className="pr-0 lobbyBannerL">
                              <div
                                className="bg-white"
                                style={{
                                  border: '0.5px solid lightgrey',
                                  // borderRight: 0,
                                  height: '100%',
                                }}
                              >
                                <div
                                  className="container"
                                  style={{
                                    borderBottom: '0.5px solid lightgray',
                                    height: 'auto',
                                  }}
                                >
                                  <h2>您好, 會員{name}</h2>
                                  <h6>您登入的時間為：{loginTime}</h6>
                                </div>
                                <div className="container">
                                  <h4>
                                    您目前累積的紅利點數：
                                    <code
                                      style={{
                                        fontSize: '1.5em',
                                        color: '#fab5b5',
                                      }}
                                    >
                                      {point}
                                    </code>
                                  </h4>
                                </div>
                              </div>
                            </Col>

                            {/* 上傳頭像: 表單 */}
                            <Col lg={4} className="pl-0 lobbyBannerR">
                              <div
                                className="bg-white changeBorder"
                                style={{
                                  border: '0.5px solid lightgrey',
                                  borderLeft: 0,
                                  minHeight: '20vh',
                                }}
                              >
                                <Form encType="multipart/form-data">
                                  <input
                                    id="upload_img"
                                    type="file"
                                    name="avatar"
                                    // 預設只接受圖檔
                                    accept="image/*"
                                    hidden
                                    onChange={handleOpen}
                                  />
                                  <div className="container profileDiv">
                                    <Image
                                      className="profile"
                                      src={uploadImg}
                                      roundedCircle
                                      onClick={handleClick}
                                      onError={addDefaultSRC} //Image fallback
                                    />
                                    <FaEdit
                                      className="profileEdit"
                                      onClick={handleClick}
                                    />
                                  </div>
                                </Form>
                              </div>
                            </Col>
                            {/* 上傳頭像: 表單(end) */}
                          </Row>
                          <CardGroup>
                            <LobbyCard
                              title="修改會員資料"
                              content="修改信箱、住址、姓名等註冊資料。"
                              to="/lobby/edit"
                              img="FaUserEdit"
                            />
                            <LobbyCard
                              title="連絡客服"
                              content="您的寶貴意見將徹底反映給我們"
                              to="/about#mm5"
                              img="IoMdMail"
                            />
                            <LobbyCard
                              title="查看購物車"
                              content="查看您準備購買的商品。"
                              to="/cart"
                              img="FaCartArrowDown"
                            />
                          </CardGroup>

                          <CardGroup>
                            <LobbyCard
                              title="交易紀錄"
                              content="觀看過去在吉利馬札羅的消費紀錄。"
                              to="/lobby/history"
                              img="FaCreditCard"
                            />
                            <LobbyCard
                              title="喜好清單"
                              content="過去引起您注目，並可能進行購買的商品。"
                              to="/lobby/favorite"
                              img="MdFavorite"
                            />
                            <LobbyCard
                              title="折扣券"
                              content="確認目前擁有可以使用的折扣。"
                              to="/lobby/coupon"
                              img="GiTicket"
                            />
                          </CardGroup>
                        </div>
                        <div className="col-4 lobbyR" align="center">
                          <br />
                          <img
                            src="../../images/ad1.png"
                            alt="ad1"
                            width="80%"
                          ></img>
                          <br />
                          <img
                            src="../../images/ad2.png"
                            alt="ad2"
                            width="80%"
                          ></img>
                        </div>
                      </div>
                      <br />
                    </div>
                    {/* 裁剪大頭貼之modal😜 */}
                  </FadeIn>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <h2 id="transition-modal-title">編輯頭像</h2>
                        <Row>
                          <Col>
                            {src === null ? null : (
                              <ReactCrop
                                src={src}
                                crop={crop}
                                ruleOfThirds
                                onImageLoaded={onImageLoaded}
                                onComplete={onCropComplete}
                                onChange={onCropChange}
                              />
                            )}
                          </Col>
                          <Col>
                            {croppedImageUrl === null ? null : (
                              <img
                                alt="Crop"
                                style={{ maxWidth: '100%' }}
                                src={croppedImageUrl}
                              />
                            )}
                          </Col>
                        </Row>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleUpload}
                        >
                          送出頭像
                        </Button>
                      </div>
                    </Fade>
                  </Modal>

                  {/* 裁剪大頭貼之modal😜 */}
                </div>
              </div>
            </Route>

            <Route path="/lobby/edit">
              <div className="all-page-title page-breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 " align="center">
                      <p className="text-white">~歡迎來到最棒的會員中心！~</p>
                    </div>
                  </div>
                  <Edit />
                </div>
              </div>
            </Route>
            <Route path="/lobby/coupon">
              <div className="all-page-title page-breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 " align="center">
                      <p className="text-white">~歡迎來到最棒的會員中心！~</p>
                    </div>
                  </div>
                  <Coupon />
                </div>
              </div>
            </Route>
            <Route path="/lobby/history">
              <div className="all-page-title page-breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 " align="center">
                      <p className="text-white">~歡迎來到最棒的會員中心！~</p>
                    </div>
                  </div>
                  <History />
                </div>
              </div>
            </Route>
            <Route path="/lobby/favorite">
              <div className="all-page-title page-breadcrumb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 " align="center">
                      <p className="text-white">~歡迎來到最棒的會員中心！~</p>
                    </div>
                  </div>
                  <Favorite />
                </div>
              </div>
            </Route>
            <Router path="/cart">
              <Cart />
            </Router>
            <Router path="/about">
              <About />
            </Router>

            {/* 原有的路由(想合併) */}
            <Route path="/login">
              <Redirect from="/login" to="/login/entrance"></Redirect>
              <Login />
            </Route>
            <Route path="/product/:id?">
              <Product />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default Member
