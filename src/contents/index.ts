chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name === "requestHTML") {
    sendResponse(document.documentElement.outerHTML)
    console.log('requestHTML')
  } else if (msg.name === "requestPageRSS") {
    console.log('requestPageRSS')
    return true
  }
})
// 测试
console.log('log')
export {}
