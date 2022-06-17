function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
    const slow = await resolveAfter2Seconds() // Nếu giá trị của biểu thức theo sau await không phải là 1 Promise => thì nó sẽ trả về 1 resolved Promise => console.log("slow promise is done")
    console.log(slow) 
    const fast = await resolveAfter1Second() // Chỗ này sẽ thực hiện sau khi slow đã kết thúc
    console.log(fast) 
  }
  
  async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds()  // Bắt đầu cài đặt thời gian
    const fast = resolveAfter1Second() 
    console.log(await slow) 
    console.log(await fast)  // đợi slow để kết thúc, mặc dù fast đã xong trước đó
  }
  
  function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]) 
      console.log(messages[1])
  })
  }
  
  async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(), // Chỗ này hiểu đơn giản là in ra function resolveAfter2Seconds()
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }
  
  sequentialStart() // chỗ này tốn tổng cộng 2000ms + 1000ms
  // Đợi cái trên hoàn thành
  setTimeout(concurrentStart, 4000) // Mất tổng cộng 2000ms
  // Tiếp tục đợi
  setTimeout(concurrentPromise, 7000) // Giống trước
  // Đợi lần nữa
  setTimeout(parallel, 10000) //  Kết quả của parallel() sẽ nằm cuối cùng