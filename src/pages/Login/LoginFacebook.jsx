import { FacebookOutlined } from '@ant-design/icons'
import React from 'react'
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default function LoginFacebook() {
    const responseFacebook = (response) => {
        console.log("Facebook infor ạ: ",response)
    }
    const componentClicked = () => {
        return <div>Hello</div>
    }
    return (
        <div>
            <FacebookLogin
                appId="662685252140725"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => <button className='block m-auto px-5 py-2 rounded-xl mt-3 text-white bg-blue-600'  onClick={renderProps.onClick}><FacebookOutlined className='text-2xl mr-3'/>Đăng nhập</button>}
            />
        </div>
    )
}
