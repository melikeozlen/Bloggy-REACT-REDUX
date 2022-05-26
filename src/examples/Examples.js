import { createStore } from 'redux';
//1. Adım Store oluştur.
//store
const initialState = {
    count: 10

}

/*
AŞAĞIDA Kİ STORE'ı bir reducer olarak tanımladık ve store'a bu recerî ekledik.

const counterReducer=(state = initialState, action) => { 
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    case "GET_TEXT":
      return {
        text: state.text
      }
    case "RESET":
      return {
        count: 10
      }
    default:
      return state;
  }
}
const store = createStore(counterReducer);
*/
const store = createStore((state = initialState, action) => {  //create storeîn aldığı bilgi Bir reducer bilgisi. Store farklı reducer tutabilir
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        case "GET_TEXT":
            return {
                text: state.text
            }
        // case "RESET":
        //   return {
        //     count: 0
        //   }
        default:
            return state;
    }
});

//REDUCER

const kitap = {
    masal: {
        name: "mavi",
        page: 15,
        yazar: "melike"
    },
    roman: {
        name: "sarı",
        page: 120,
        yazar: "burak"
    }

}
const bookReducer = (state = kitap, action) => {
    switch (action.type) {
        case "GET_NAME":
            return {
                name: state.roman.name + " ozlen"
            }
    }

}
const bookStore = createStore(bookReducer);
//get state



//INCREMENT, DECREMENT, REST => ACTION (OBJ)
store.dispatch({
    type: "INCREMENT",
    incrementBy: 10

})
store.dispatch({
    type: "DECREMENT"

})
store.dispatch({
    type: "DECREMENT"

})
store.dispatch({
    type: "DECREMENT"

})
console.log(bookStore.getState())

bookStore.dispatch({
    type: "GET_NAME"

})
store.subscribe(() => {     //Soreda bir değişiklik olduğunda otamatik çalışır.
    console.log(store.getState())
})

console.log(bookStore.getState())
console.log(store.getState())


//DISPATCH

