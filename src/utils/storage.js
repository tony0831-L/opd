async function privateGetsta(){
  let data ;
  await fetch('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
  .then(res=>{
    return res.json();
  })
  .then(res=>{
    data =  res.result.records
  })
  return data
}

async function privateGetbike(){
  let data ;
  await fetch('https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2')
  .then(res=>{
    return res.json();
  })
  .then(res=>{
    data =  res.retVal
  })
  return data
}

function toString(){
  return {Bike:getBike().length,Sta:getSta().length}
}

async function init(){
  await privateGetsta().then(res=>{
    setSta(res);
  })
  await privateGetbike().then(res=>{
    setBike(res)
  })
  return(toString())
}

function setSta(data){
  localStorage.setItem("sta",JSON.stringify(data))
}

function setBike(data){
  localStorage.setItem("Bike",JSON.stringify(data))
}

function setChoise(data){
  localStorage.setItem("choise",JSON.stringify(data))
}

function getSta(){
  return JSON.parse(localStorage.getItem("sta"))
}

function getBike(){
  return JSON.parse(localStorage.getItem("Bike"))
}



module.exports = {
    init,setSta,setBike,getSta,getBike,setChoise,toString
}