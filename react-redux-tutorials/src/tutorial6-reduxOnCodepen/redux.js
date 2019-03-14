console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Actions
    type: 'CREATE_POLICY',
    payload:{
      name: name,
      amount: amount
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type:'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // return assign({},oldListOfClaims,action.payload)??
    return [...oldListOfClaims, action.payload]
  }
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100,action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }
  else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }
  else if(action.type === 'DELETE POLICY'){
    return listOfPolicies.filter((name)=>{
        return name !== action.payload.name
    })
  }
  return listOfPolicies;
}


// console.log(Redux)
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  // there keys are identical to state names
  accounting: accounting,
  policies: policies,
  claimsHistory: claimsHistory
})

const store = createStore(ourDepartments);

store.dispatch(createPolicy('ray',30));
store.dispatch(createPolicy('jim',20));
store.dispatch(createPolicy('bob',40));

store.dispatch(createClaim('ray',120));
console.log(store.getState())
