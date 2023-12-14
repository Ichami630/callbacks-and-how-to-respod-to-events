function anotherEventListener(typeOfEvent,callback){
  //detect event codes
var eventObject={
  eventType:"keypress",
  key:"p",
  duration:2
}
  if(eventObject.eventType==typeOfEvent){
    callback(eventObject);
  }
}

anotherEventListener("keypress",(e)=>{
  console.log(e);
}
