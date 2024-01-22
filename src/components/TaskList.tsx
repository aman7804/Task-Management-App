import { Button, List, ListItem, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { IAppState } from '../store/types'
import { deleteTask } from '../store/actionCreators'


const TaskList = () => {
    const Tasks = useSelector((state : IAppState) => state.tasks)
    const dispatch = useDispatch()
    

    
    return (
      <>
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List>
        {Tasks?.map((Task) => 
          <ListItem key={Task.Id} style={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{Task.Description}</Typography>
          <Button style={{ marginLeft: '8px' }} onClick={()=>dispatch({...deleteTask(Task)})}>Delete</Button>
        </ListItem>)}
      </List>
    </div>
    </>
  )
}

export default TaskList
