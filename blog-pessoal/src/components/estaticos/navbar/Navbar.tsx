import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import React from "react";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor">

                        <Typography variant="h6" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    LogOut
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;