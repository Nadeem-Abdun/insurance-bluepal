import React from 'react'
import { Box, Button } from "@mui/material";

export default function RenewBtn() {
    return (
        <>
            <Box flex={6} p={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained'>Renew Insurance</Button>
            </Box>
        </>
    )
}
