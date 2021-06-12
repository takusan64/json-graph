import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  Paper,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Settings as SettingsIcon
} from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

const TopBar = () => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Json-Graph
          </Typography>
          <IconButton
            aria-label="setting"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Check List</FormLabel>
          <FormGroup row>
            <List>
              <ListItem>
                <Paper elevation={3} className={classes.paper}>
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleCheck} name="gilad" />}
                  label="Machine0001"
                />
                </Paper>
              </ListItem>
            </List>
          </FormGroup>
        </FormControl>
      </Drawer>
    </div>
  )
}

export default TopBar