let getData = fetch("time.json")
let getDataWResponce = getData.then(response => response.json())
let GDFJ = getDataWResponce.then(data => {let ctvar = data.time;})	//GDFJ means GatherdDataFromJson

function main(){
}
function count(ct) {
  ct = ct + 0.0000000000000001
}
function updateP(){
}
