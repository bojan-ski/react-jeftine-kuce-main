import { Link } from "react-router-dom"
// utils func 
import scrollToTop from "../../../utils/scrollToTop.js"


const RightsFooter = () => {
  return (
    <div className="container">
      <div className='rights-footer my-4'>
        <p className='mb-0 text-center text-white'>
          Autorsko Pravo © 2022 - 2024 .
          <Link to='/' className="text-orange-hover mx-1" onClick={() => scrollToTop()}>
            Portal JEFTINE KUĆE
          </Link>
          <span>
            | Sva prava su zadržana | Code & Design
          </span>
          <Link to='https://msdagencija.rs/' target="_blank" className="text-orange-hover mx-1">
            msd
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RightsFooter