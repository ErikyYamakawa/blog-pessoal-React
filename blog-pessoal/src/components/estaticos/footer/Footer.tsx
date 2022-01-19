import { Box, Grid, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import"./Footer.css";
import React from "react"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center"></Box>
                        <Typography variant="h5" align="center" gutterBottom className=".textos">Siga-nos nas redes sociais</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.linkedin.com/in/eriky-yamakawa-2bb00a1b3/" target="_blank">
                            <LinkedIn className="redes" />
                        </a>
                        <a href="https://github.com/ErikyYamakawa" target="_blank">
                            <GitHub className="redes" />
                        </a>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos"> 2020 Copyrigth:</Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

        </>
    )
}

export default Footer;