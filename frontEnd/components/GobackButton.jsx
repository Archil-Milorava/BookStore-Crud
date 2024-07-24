import { Link } from 'react-router-dom'
import { GiFastBackwardButton } from "react-icons/gi";


function GobackButton() {
  return (
    <Link to={'/'}  >
    <GiFastBackwardButton className='m-4 text-blue-400 text-4xl hover:text-blue-300 ' />
    </Link>
  )
}

export default GobackButton