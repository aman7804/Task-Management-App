import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import {useState} from 'react'

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () =>{
        setAnchorEl(null)
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton size="large" edge="start" color='inherit' aria-label='logo'>
                        <CatchingPokemon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                        MyTask
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'> About</Button>
                        <Button
                            color='inherit'
                            id='resources-button'
                            onClick={handleClick}
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-haspopup = 'true'
                            aria-expanded = {open ? 'true' : undefined}
                        >
                            Resources
                        </Button>
                        <Button color='inherit'> Signup</Button>
                        <Button color='inherit'> login</Button>
                    </Stack>
                    <Menu
                        id='resources-menu'
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                        'aria-labelledby' : 'resources-button',
                        }}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Blog</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </div>
    )
}

