import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
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

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
]
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4)
    },
    chart: {
      marginBottom: theme.spacing(5),
      width: '100%',
      height: '300px',
      display: 'block'
    }
  }
  ))

const Graph: React.FC = () => {
  const classes = useStyles()
  const context = useContext(DataContext)

  return (
    <>
      <div className={classes.root}>
        {context.context.map((item, index) => (
          <div key={index} className={classes.chart}>
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
                <Line type="monotone" dataKey="forecast" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </>
  )
}

export default Graph