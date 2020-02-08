
if (window.Worker) {

    let worker = new Worker("work.js")

    //传递文本
    worker.postMessage("hello")
    //传递对象
    worker.postMessage({ name: "xiaoming", age: 12 })
    //传递数组
    worker.postMessage(new Uint8Array([0x01, 0x02, 0x03, 0x04]))


    //以上传递都是值拷贝，通过Transferable Objects可以传递地址给worker,同理，在worker中也是一样的方式可以传递地址给主线程

    //Transferable Objects 格式
    //worker.postMessage(arrayBuffer, [arrayBuffer]);

    // 传递地址例子
    let ab = new ArrayBuffer(4);
    let dv = new DataView(ab);
    dv.setInt8(0, 5);
    dv.setInt8(1, 6);
    dv.setInt8(2, 7);
    dv.setInt8(3, 8);
    worker.postMessage(ab, [ab]);
    console.log(ab.byteLength)//结果为0，当传递地址后，ArrayBuffer转移到worker,原本的被清除

    var uInt8Array = new Uint8Array(8);
    for (var i = 0; i < uInt8Array.length; ++i) {
        uInt8Array[i] = i;
    }
    worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
    console.log(uInt8Array.byteLength)//结果为0，当传递地址后，ArrayBuffer转移到worker,原本的被清除


    //监听
    worker.onmessage = e => {
        console.log("receive message from worker :" + JSON.stringify(e.data))
    }

    worker.onerror = e => {
        console.log([
            'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
        ].join(''));
    }



    //worker.terminate() //Worker 完成任务以后，主线程就可以把它关掉

} else {
    console.log("浏览器不支持Worker")
}