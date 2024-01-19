import { Button, List, ListItem, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../state/reducers/rootReducer";
import {DeleteTask} from '../state/action-creator/action';


const TaskList = () => {
    const Tasks = useSelector((state : RootState) => state.tasks)
    const dispatch = useDispatch()
    

  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List>
        {Tasks?.map((Task) => 
        <ListItem style={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{Task.Description}</Typography>
          <Button style={{ marginLeft: '8px' }} onClick={()=>dispatch(DeleteTask(Task.Id))}>Delete</Button>
        </ListItem>)}
      </List>
    </div>
    </>
  )
}

export default TaskList
