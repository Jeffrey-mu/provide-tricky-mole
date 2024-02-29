import "~/lib/style.css"

import { useEffect, useState } from "react"

function IndexPopup() {


  const [title, setTitle] = useState('')
  useEffect(() => {

    chrome.tabs.query(
      {
        active: true,
      },
      ([tab]) => {
        setTitle(tab.title)
        console.log('popupReady', tab)
      },
    )
  }, [])
  return (
    <div className="min-w-[350px] p-3">
      <h2>
        {title}
      </h2>
      <a href="/options.html" target="_blank">go options.html</a>
    </div>
  )
}

export default IndexPopup
