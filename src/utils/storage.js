//類內部初始化getter(景點資訊)不對外暴露
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

//類內部初始化getter(ubike)不對外暴露
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

//類內部初始化(初始化sta,bike在storge中的資料)不對外暴露
function privateinit(){
  setSta({});
  setBike({})
}

//重寫toString方法(後續較驗使用)
function toString(){
  return {Bike:getBike().length,Sta:getSta().length}
}

//初始化方法
function init(){
  privateinit()
  privateGetsta().then(res=>{
    setSta(res);
  })
  privateGetbike().then(res=>{
    setBike(res)
  })
  return(toString())
}

//景點Setter
function setSta(data){
  localStorage.setItem("sta",JSON.stringify(data))
}
//UbikeSetter
function setBike(data){
  localStorage.setItem("Bike",JSON.stringify(data))
}
//景點Setter
function getSta(){
  return JSON.parse(localStorage.getItem("sta"))
}
//Ubikegetter
function getBike(){
  return JSON.parse(localStorage.getItem("Bike"))
}



module.exports = {
    init,setSta,setBike,getSta,getBike,setChoise,toString
}