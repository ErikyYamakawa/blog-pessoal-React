import { Box, Grid, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center"></Box>
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.linkedin.com/in/eriky-yamakawa-2bb00a1b3/" target="_blank">
                            <LinkedIn style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://github.com/ErikyYamakawa" target="_blank">
                            <GitHub style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>

                </Grid>
            </Grid>

        </>
    )
}

export default Footer;