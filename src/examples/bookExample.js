import { createStore, combineReducers} from 'redux';

//SATATE BELİRLEDİK
const state = {
  blogs: [
    {
      id: 1,
      title: 'blog title 1',
      description: 'blog description 1',
      dateAdded: 0
    },
  ],
  auth: {
    userid: 1,
    username: 'melikeozlen',
    email: 'info@sadikturan.com'
  }
}

//REDUCER OLUŞTURUYORUZ
const blogState = []

/*
ŞEKLİNDE TANIMLANABİLİRDİ.
const blogState=blogs:[
    {
      id:1,
      title: 'blog title 1',
      description: 'blog description 1',
      dateAdded:0
    },
  ]
*/
const blogReducer = (state = blogState, action) => { //SATATE BOŞ BİR DİZİ TUTUYOR
  switch (action.type) {


    default:
      return state;
  }
}


//İKİNCİ BİR REDUCER OLUŞTURUYORUZ

const autState = {};
const autReducer = (state = autState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

//İKİ FARKLI REDUCER SAHİBİ OLDUK. STORE'DA SADECE BLOG REDUCER VAR. 
//BUNLARI BİRLEŞTİRMELİYİZ "combineReducers"

//const store = createStore(autReducer);

const store = createStore(
  combineReducers({
    blogs:blogReducer,
    auth:autReducer
  })

);
console.log(store.getState());

