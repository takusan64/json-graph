import React, { useState, useContext } from 'react'
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
import { DataContext } from '../utils/context'
import SettingDialog from './SettingDialog'
import ItemSettingDialog from './ItemSettingDialog'

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
  const context = useContext(DataContext)
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [settingOpen, setSettingOpen] = useState(false)
  const [itemSettingOpen, setItemSettingOpen] = useState(false)
  const [itemName, setItemName] = useState("")

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleCheck = (id: number) => {
    const newData = [...context.context]
    let newItem = context.context[id]
    newItem.status = !newItem.status
    newData.splice(id, 1, newItem)
    context.setContext(newData)
  }

  const handleSettingOpen = () => {
    setSettingOpen(true)
  }

  const handleSettingClose = () => {
    setSettingOpen(false)
  }

  const handleItemSettingOpen = (name:string) => {
    setItemName(name)
    setItemSettingOpen(true)
  }
  const handleItemSettingClose = () => {
    setItemSettingOpen(false)
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
            Json Graph
          </Typography>
          <IconButton
            aria-label="setting"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleSettingOpen}
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
              {context.context.map((item, index) => (
                <ListItem key={index}>
                  <Paper elevation={3} className={classes.paper}>
                    <FormControlLabel
                      control={<Checkbox checked={item.status} onChange={() => handleCheck(index)} name="item" />}
                      label={item.name}
                    />
                  </Paper>
                  <IconButton
                    color="inherit"
                    onClick={() => handleItemSettingOpen(item.name)}
                  >
                    <SettingsIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </FormGroup>
        </FormControl>
      </Drawer>
      <SettingDialog open={settingOpen} onClose={() => handleSettingClose()} />
      <ItemSettingDialog name={itemName} open={itemSettingOpen} onClose={() => handleItemSettingClose()} />
    </div>
  )
}

export default TopBar