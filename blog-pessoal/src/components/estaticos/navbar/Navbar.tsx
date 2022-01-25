import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";
import React from "react";

function Navbar() {
    const [token, setToken] = useLocalStorage("token");
    let history = useHistory();

    function goLogout(){
        setToken("")
        alert("usuario deslogado")
        history.push("/login")

}
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
                        <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formilarioTema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className="cursor " onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    LogOut
                                </Typography>
                            </Box>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;