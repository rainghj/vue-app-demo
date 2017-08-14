import { Toast, Indicator } from 'mint-ui';

const url = 'http://192.168.0.182:3001/api/login';
export default function (thisV, body) {    
    // console.log('ssssssssssssssssssssss');
    thisV.$http.post(
        url,
        body,  //body
       { before: function () { Indicator.open(); } }//option
    ).then(function (res) {       // success
        Indicator.close();
        console.log(res.data);
        if(res.data.status){
            thisV.$store.commit('login', res.data.data);   
        }else{
            Toast({
            message: '账号或密码错误！',
            iconClass: 'mintui mintui-field-error'     
        });
        }
           
    }, function () {             // error
        Indicator.close();
        Toast({
            message: '连接失败',
            iconClass: 'mintui mintui-field-error'     //.mintui-search,.mintui-more,.mintui-back,.mintui-field-error,.mintui-field-warning,.mintui-success:before,.mintui-field-success 
        });
    });
}