import React from "react"
import {Typography, Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
))


const Copyright: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © 2021 @takusan64 All Rights Resarved.
        </Typography>
      </Container>
    </>
  )
};

export default Copyright