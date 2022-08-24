import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero text-white">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-5">
            Oops!
          </h1>
          <h2 className='text-5xl text-light-400 mb-8'>
            404 - Page not Found
          </h2>
          <Link to={'/'} className='btn btn-primary btn-lg'>
            <FaHome className='mr-2'/>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound