import React from 'react'
import "./NotFound.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
const NotFoundPage = () => {
  return (
    <div id='notfound'>
      <h1>Not Found</h1>
      <FontAwesomeIcon className="cry" icon={faSadCry} />
    </div>
  )
}

export default NotFoundPage