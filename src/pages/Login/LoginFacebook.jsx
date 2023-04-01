import { FacebookOutlined } from '@ant-design/icons'
import React from 'react'
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatch } from 'react-redux'
import { userLoginFacebookApi } from '../../redux/reducers/UserReducer'

export default function LoginFacebook() {
    const dispatch = useDispatch();
    const responseFacebook = async (response) => {
        console.log("Facebook infor ạ: ",response)
        const action = userLoginFacebookApi(response.accessToken);
        await dispatch(action)
    }
    return (
        <div>
            <FacebookLogin
                appId="662685252140725"
                autoLoad={false}
                scope="public_profile, email, user_birthday"
                fields="id,name,email,gender,first_name,birthday,hometown,middle_name,albums,picture"
                callback={responseFacebook}
                render={(renderProps) => <button className='block m-auto px-5 py-2 rounded-xl mt-3 text-white bg-blue-600'  onClick={renderProps.onClick}><FacebookOutlined className='text-2xl mr-3'/>Đăng nhập</button>}
            />
            <a href="http://www.facebook.com/dialog/oauth?client_id=662685252140725&redirect_uri=http://localhost:8080/lecongtien/api/code&scope=email,public_profile">Login Facebook</a>
        </div>
    )
}
