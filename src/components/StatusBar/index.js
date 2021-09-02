import React from 'react'

import StatusLight from './StatusLight'

// import material ui components & styles
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const StatusBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.elevatedDiv}>
            <StatusLight />
        </div>
    )
}

export default StatusBar