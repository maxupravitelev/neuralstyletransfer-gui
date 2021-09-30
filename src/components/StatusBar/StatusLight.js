import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

import imagesService from 'services/images'

const StatusLight = () => {
    const [backgroundColor, setBackgroundColor] = useState('red')
    const [statusDescription, setStatusDescription] =
        useState('Trying to reach server...')

    // sent a ping request for waking up the backend when the frontend is loaded
    useEffect(() => {
        const checkState = async () => {
            const sessionState = await imagesService.getPingFromBackend()

            if (sessionState === 'ping') {
                setBackgroundColor('green')
                setStatusDescription('Server is online.')
            } else {
                setBackgroundColor('red')
                setStatusDescription(
                    'Server could not be reached. Please contact the admin.'
                )
            } 
        }
        checkState()
    }, [])

    const styleCircle = {
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        height: '2em',
        width: '2em',
        display: 'inline-block',
        margin: 'auto',
        marginRight: 5,
    }

    return (
        <div
            style={{
                // display: 'flex',
                // marginTop: 30,
                // marginBottom: 10,
                alighItems: 'center',
            }}
        >
            <div style={styleCircle}></div>
            <Typography>{statusDescription}</Typography>
        </div>
    )
}

export default StatusLight
