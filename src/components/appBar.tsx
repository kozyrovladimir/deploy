import React from 'react';
import logo from '../img/logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ItemMultipleMenu from "./ItemMultipleMenu";
import AccordionMenu from "./AccordionMenu";

export type PageType = {
    title: string,
    id: string
}

type SubpagesType = {
    [key: string]: Array<string>
}

type ResponsiveAppBarPropsTytpe = {
    pages: Array<PageType>,
    subPages: SubpagesType,
    settings: Array<string>
}

const ResponsiveAppBar = (props: ResponsiveAppBarPropsTytpe) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{boxShadow:'none', backgroundColor:'white', pb: 4, borderBottom: '1px solid whitesmoke'}} position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box component="img" src={logo} sx={{height: '94px', mr: 2, display: {xs: 'none', md: 'flex'}}}>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {props.pages.map((page) => (
                                <AccordionMenu menuItem={page.title} key={page.id}
                                               subMenuItem={props.subPages[page.id]}
                                                handleCloseNavMenu={handleCloseNavMenu}
                                />
                            ))}
                            {/*{props.pages.map((page) => (*/}
                            {/*    <MenuItem key={page.id} onClick={handleCloseNavMenu}>*/}
                            {/*        <Typography textAlign="center">{page.title}</Typography>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        YOQI-RESOURCE
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'center'}}}>
                        {props.pages.map((page) => {
                            return (
                                <ItemMultipleMenu
                                    key={page.id}
                                    menuItem={page.title}
                                    subMenuItem={props.subPages[page.id]}
                                    handleCloseNavMenu={handleCloseNavMenu}
                                />
                            )
                        })}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            className="MobileMenu"
                            sx={{mt: '45px', paddingTop: 0, paddingBottom: 0}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {props.settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
