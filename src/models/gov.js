import {govList,addGov} from '../services'
export default {
    namespace:'gov',
    state:{
        list:[],
        type:'',
        info:{}
    },
    effects:{
        *getGovList({payload},{call,put}){
            let res=yield call(govList,1,2);
            yield put({
                type:'changeList',
                payload:res.data.list
            })
        },
        * addGov({payload},{call,put,select}){
            let {type}=yield select(state=>state.gov);
    
            if(type==='new'){
                let res=yield call(addGov,payload);
                console.log('res...',res)
            }else if(type==='edit'){
    
            }
        },
    }
    ,
    reducers:{
        changeList(state,{payload}){
            return {...state,list:payload}
        },
        goDetail(state,{payload}){
            let {type, info} = payload;
            return {...state, type, info}
        }
    }
}