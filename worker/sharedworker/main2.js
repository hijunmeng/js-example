if (window.SharedWorker) {

    let sharedWorker=new SharedWorker("work.js");
    sharedWorker.port.postMessage("get");
    sharedWorker.port.onmessage=e=>{
    console.log("receive message from sharedworker:"+JSON.stringify(e.data))
    }


}else{
    console.log("浏览器不支持SharedWorker")
}