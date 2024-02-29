import { useEffect } from "react"
import "~/lib/style.css"
function IndexPopup() {
  useEffect(() => {

    chrome.tabs.query(
      {
        active: true,
      },
      ([tab]) => {
        console.log('popupReady')
      },
    )
  }, [])
  return (
    <div
      className="w-20 h-20 bg-red-200">
      <a href="/options.html" target="_blank">go options.html</a>
    </div>
  )
}

export default IndexPopup
