import "~/lib/style.css"

import { useEffect } from "react"
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
    <div className="min-w-[350px] p-3">
      <a href="/options.html" target="_blank">go options.html</a>
    </div>
  )
}

export default IndexPopup
