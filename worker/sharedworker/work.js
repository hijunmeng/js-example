
let count=0

let data=''

self.onconnect=e=>{
    var port = e.ports[0];

  port.onmessage = function(e) {
    console.log("receive message from main:"+JSON.stringify(e.data))
    count++ //同源下的每个标签页都会使此值递增

    if (e.data === 'get') {
      port.postMessage(data)
    } else {
      data = e.data 
    }
    port.postMessage("reply: "+ count ); 
  }
}