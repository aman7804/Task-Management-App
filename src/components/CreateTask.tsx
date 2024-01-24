import {
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../store/task/actions";

const CreateTask = () => {
  const dispatch = useDispatch();
  let [task, setTask] = useState<string>("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({...addTask(task)})
    setTask("")
  }
    
  const handleOnChange =
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setTask(e.target.value)
        
    return (
      <>
          <Box component={'form'} onSubmit={(e)=>{handleOnSubmit(e)}} sx={{mt:10}}>
              <Stack direction={'row'} spacing={3} sx={{mx:'auto', width:500}}>
                  <TextField size="small" id="outlined-basic" label="note" variant="outlined" value={task} onChange={(e)=>handleOnChange(e)} sx={{width: 400}}/>
                  <Button variant="contained" color="primary"> save </Button>
              </Stack>
          </Box>
      </>
    );
  };

  export default CreateTask