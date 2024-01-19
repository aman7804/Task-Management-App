import {
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {AddTask} from "../state/action-creator/action"
import { useState } from "react";
import Task from "../state/Task";

export default function CreateTask() {
  
  const generateId: () => number = () => {
    const uniquePart = Math.floor(Math.random() * 100);
    const timestampPart = Date.now();
  
    return Number(`${timestampPart}${uniquePart}`);
  };

  const dispatch = useDispatch();
  
  let [task, setTask] = useState<Task>({
    Id: 0,
    Description: ""
  });

  const handleClick = () => {
      dispatch(AddTask(task))
      setTask({Id: 0, Description: ""})
      }
    
      const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({
          Id: generateId(),
          Description: e.target.value
        });
      };
    
    

    return (
      <>
          <Box sx={{mt:10}}>
            {/* <form> */}
              <Stack direction={'row'} spacing={3} sx={{mx:'auto', width:500}}>
                  <TextField size="small" id="outlined-basic" label="note" variant="outlined" value={task.Description} onChange={(e)=>handleOnChange(e)} sx={{width: 400}}/>
                  <Button variant="contained" color="primary" onClick={handleClick}> save </Button>
              </Stack>
                
            {/* </form> */}
          </Box>
      </>
    );
}
