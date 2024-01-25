import { Button, List, ListItem, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { IAppState } from '../store/task/types'
import { deleteTask } from '../store/task/actions'
import { RootState } from '../store'
import { getAuthSelector } from '../store/auth/selector'


const TaskList = () => {
    // const Tasks = useSelector((state : RootState) => state.tasks)
    // const dispatch = useDispatch()
    

    
    return (
      <>
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      <List>
          {/* {Tasks?.length ? (
            Tasks.map((Task) => (
              <ListItem key={Task.Id} style={{ display: 'flex', alignItems: 'center' }}>
                <Typography>{Task.Description}</Typography>
                <Button style={{ marginLeft: '8px' }} onClick={() => dispatch({...deleteTask(Task)})}>
                  Delete
                </Button>
              </ListItem>
            ))
          ): (<h1>NO DATA</h1>)} */}
      </List>
    </div>
    </>
  )
}

export default TaskList
