import { Toast, Indicator } from 'mint-ui';

 export default function (thisV,url, body,todos) {    

    thisV.$http.post(
        url,
        body,  //body
       { before: function () { Indicator.open(); } }//option
    ).then(function (res) {       // success
        Indicator.close();
        let todo=todos(res);
        thisV.$store.commit(todo.type, todo.data);      
    }, function () {             // error
        Indicator.close();
        Toast({
            message: '连接失败',
            iconClass: 'mintui mintui-field-error'     //.mintui-search,.mintui-more,.mintui-back,.mintui-field-error,.mintui-field-warning,.mintui-success:before,.mintui-field-success 
        });
    });
}