import { Toast, Indicator } from 'mint-ui';
 export default async function (thisV, page) {
    Indicator.open();
    let res=await thisV.$ajax.get('https://www.vue-js.com/api/v1/topics?tab=all&page=1')
        .then(function (response) {
            Indicator.close();
            console.log(response);
            return response;
        })
        .catch(function (error) {
            Indicator.close();
            console.log(error);
            return error;
        });

    return res;    
}
