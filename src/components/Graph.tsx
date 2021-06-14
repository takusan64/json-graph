import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Container,
  TextField,
  Box,
  Typography
} from '@material-ui/core'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { DataContext } from '../utils/context'
import styled from "styled-components"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4)
    },
    chart: {
      marginBottom: theme.spacing(8),
      width: '100%',
      height: '400px',
      display: 'block'
    },
    date_container: {
      marginBottom: theme.spacing(1)
    },
    chart_container: {
      marginBottom: theme.spacing(2)
    },
    datetime: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      justify: 'right'
    },
    typography: {
      fontSize: 18
    },
  }
))

const GrathItem = styled.div`
display: ${props => !props.hidden ? "none" : "block"};
`;

const Graph: React.FC = () => {
  const classes = useStyles()
  const context = useContext(DataContext)

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth={false} className={classes.date_container}>
          <Box display="flex" justifyContent="flex-end">
            <TextField
              id="from"
              label="from"
              type="datetime-local"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue="2021-06-13T00:00"
            />
            <TextField
              id="to"
              label="to"
              type="datetime-local"
              className={classes.datetime}
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue="2021-06-14T00:00"
            />
          </Box>
        </Container>
        {context.context.map((item, index) => (
          <GrathItem key={index} className={classes.chart} hidden={item.status}>
            <Container maxWidth={false} className={classes.chart_container}>
              <Typography variant="body1" gutterBottom className={classes.typography}>
                {item.name}
              </Typography>
            </Container>
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={item.value}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="予測" dataKey="forecast" stroke="#8884d8" />
                <Line type="monotone"　name="実績" dataKey="performance" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </GrathItem>
        ))}
      </div>
    </>
  )
}

export default Graph