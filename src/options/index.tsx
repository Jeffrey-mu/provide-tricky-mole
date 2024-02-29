import { Link, MemoryRouter } from "react-router-dom"
import { Routing } from "~/options/routes"
function Options() {

  return (
    <div
      className="w-20 h-20 bg-red-200">

      <MemoryRouter>
        <Link to="/about">
          <span>About</span>
        </Link>
        <div className="flex sm:gap-20 h-full sm:flex-row flex-col">
          <div className="flex-1">
            <Routing />
          </div>
        </div>
      </MemoryRouter>
    </div>
  )
}

export default Options
