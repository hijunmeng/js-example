if (window.SharedWorker) {

    let sharedWorker=new SharedWorker("work.js");
    sharedWorker.port.postMessage("Hello from main");
    sharedWorker.port.onmessage=e=>{
    console.log("receive message from sharedworker:"+JSON.stringify(e.data))
    }


}else{
    console.log("浏览器不支持SharedWorker")
}