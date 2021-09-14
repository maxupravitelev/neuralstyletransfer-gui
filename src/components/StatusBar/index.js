import React from 'react'

import StatusLight from 'components/StatusBar/StatusLight'
// import Notification from 'components/Notification'

// import material ui components & styles
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const StatusBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.statusBar}>
            <StatusLight />
            {/* <Notification /> */}
        </div>
    )
}

export default StatusBar