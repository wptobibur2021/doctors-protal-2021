import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import {IconButton,AppBar, Box, Button, ListItemButton, Grid, ListItemIcon, ListItemText, Divider, Drawer, CssBaseline, List, ListItem,Toolbar,Typography } from '@mui/material';
import {Inbox,Mail,Menu,Send,Person,AccountCircle  } from '@mui/icons-material';
import {Link,useNavigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useNotification from "../../Hooks/useNotification";
const drawerWidth = 240;
function Dashboard(props) {
    const {user,logOut, admin} = useAuth()
    const navigate = useNavigate()
    const {userLogout} = useNotification()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider sx={{mb: 5}} />
            <ListItemButton >
                <Link style={{display: 'flex', alignItems: 'center', color: '#000'}} to={`/dashboard`}>
                    <ListItemIcon>
                        <Send />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </Link>
            </ListItemButton>
            { admin &&
                <Box>
                    <ListItemButton >
                        <Link style={{display: 'flex', alignItems: 'center', color: '#000'}} to={`/dashboard/makeAdmin`}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Make An Admin" />
                        </Link>
                    </ListItemButton>

                    <ListItemButton >
                        <Link style={{display: 'flex', alignItems: 'center', color: '#000'}} to={`/dashboard/add-doctors`}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Add Doctors" />
                        </Link>
                    </ListItemButton>
                </Box>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Button onClick={()=>logOut(navigate,userLogout)} color="inherit" sx={{color: '#ffffff'}}>Logout</Button>
                    <Link to="/"><Button color="inherit" sx={{color: '#ffffff'}}>Home Page</Button></Link>
                    <Button>Home Page</Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
