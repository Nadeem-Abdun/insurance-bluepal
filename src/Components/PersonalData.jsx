import React from 'react'
import { Box, Card, CardContent, Typography, Button, TextField, Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export default function PersonalData() {

    return (
        <Box flex={4} p={2}>
            <Card >
                <CardContent>
                    <Typography variant='h6' component='h3' ml={2.5} my={2}>Personal Data</Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mx={2.5} my={2}>
                        <TextField id="outlined-required" label="Full name" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="ID Number" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="Driving license issued year" defaultValue=" " fullWidth />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mx={2.5} my={2}>
                        <TextField id="outlined-required" label="Email" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="Phone number" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="Age of the youngest driver" defaultValue=" " fullWidth />
                    </Stack>
                    <Typography variant='h6' component='h3' ml={2.5} my={2}>Car Data</Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mx={2.5} my={2}>
                        <TextField id="outlined-required" label="Car model code" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="Car license plate" defaultValue=" " fullWidth />
                        <TextField id="outlined-required" label="Car make and model" defaultValue=" " fullWidth />
                    </Stack>
                    <Typography variant='h6' component='h3' ml={2.5} mt={2}>Insurance History</Typography>
                    <Stack direction='row' ml={2.5}>
                        <FormGroup >
                            <FormControlLabel control={<Checkbox />} label="I have no insurance claims in last 3 years" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="I use my car for private use only" />
                            <FormControlLabel control={<Checkbox />} label="The car contains an anti-theft device" />
                            <FormControlLabel control={<Checkbox />} label="I agree to the terms of use" />
                        </FormGroup>
                    </Stack>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mb={2.5} mr={3}>
                    <Button variant='contained' sx={{ background: 'grey', textTransform: 'capitalize' }}>Change</Button>
                </Box>
            </Card>
        </Box>
    )
}
