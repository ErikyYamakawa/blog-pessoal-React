import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { buscaId, deleteId } from "../../../services/Service";
import "./DeletarTema.css" ;
import {toast} from "react-toastify";

function DeletarTema() {
    let history = useHistory();
    const {id} = useParams<{id: string}>();
    const [token,setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>()

    useEffect(() =>{
        if(token == "") {
            toast.error("Você precisa estar logado",{
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme:"colored",
                progress: undefined,
            });
            history.push("/login")
        }
    },[token])

    useEffect(() =>{
        if(id!= undefined)
        findById(id) 
    },[id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`,setTema,{
            headers: {
                "Authorization":token
            }
        })
    }
    function sim() {
        history.push("/temas")
        deleteId(`/tema/${id}`,{
            headers: {
                "Authorization" : token
            }
        });
        toast.success("Tema deletado com sucesso",{
            position: "top-right",
            autoClose:2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:"colored",
            progress: undefined,
        });
    }
    function nao() {
        history.push("/temas")
    }


        return(
        <>
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                            Deseja deletar o Tema:
                        </Typography>
                        <Typography color="textSecondary">
                            tema?.descricao
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                        <Box mx={2}>
                            <Button onClick={sim} variant="contained" className="marginLeft" size="large" color="primary">
                                sim
                            </Button>
                        </Box>
                        <Box mx={2}>
                            <Button onClick={nao} variant="contained" size="large" color="secondary">
                                Não
                            </Button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>
      </> 
    )
}

export default DeletarTema;