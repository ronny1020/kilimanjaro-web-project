import jwt from 'jsonwebtoken'

const LoginValidate = function () {
  //登入驗證檢查:
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    //只要壞掉就給我滾
    try {
      var decrypt = jwt.verify(token, 'himitsu')
    } catch (err) {
      localStorage.removeItem('token')
      //verify出error: false
      return false
    }

    if (jwt.verify(token, 'himitsu')) {
      decrypt = jwt.verify(token, 'himitsu')
      return {
        isLogged: decrypt.isLogged,
        userID: decrypt.user_id,
        loginTime: decrypt.loginTime,
      }
    } //沒辦法verify: false
    else return false
  }
  //沒token: false
  return false
  //檢查結束
}

export default LoginValidate
