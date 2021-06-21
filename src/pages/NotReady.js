import React from 'react'
import {withRouter} from 'react-router-dom'

function NotReady() {
    return (
        <div className='container'>
            준비중
        </div>
    )
}

export default withRouter(NotReady)
