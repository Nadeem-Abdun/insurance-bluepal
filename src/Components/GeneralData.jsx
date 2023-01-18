import React, { useState } from 'react'
import { Box, Card, CardContent, Typography, Button, TextField, Stack, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CancelIcon from '@mui/icons-material/Cancel';

export default function GeneralData() {
    const [value, setValue] = useState('09/30/1990');
    const [add, setAdd] = useState(false);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box flex={2} p={2}>
                <Card >
                    <CardContent>
                        <Typography variant='h6' component='h3' ml={2.5} my={2}>General</Typography>
                        <Stack direction='row' spacing={9} ml={2.5} my={2}>
                            <TextField id="outlined-required" label="Insurance type" defaultValue=" " />
                        </Stack>
                        <Stack direction='row' spacing={1} ml={2.5} my={2}>
                            <DatePicker label="Insurance start date" value={value} onChange={(newValue) => { setValue(newValue); }}
                                renderInput={(params) =>
                                    <TextField {...params} />
                                } />
                        </Stack>
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mb={2.5} mr={3}>
                        <Button variant='contained' sx={{ background: 'grey', textTransform: 'capitalize' }}>Change</Button>
                    </Box>
                </Card>
                <Box my={5}></Box>
                <Card sx={{ minHeight: 280 }}>
                    <CardContent>
                        <Typography variant='h6' component='h3' ml={2.5} my={1}>Driver's Details</Typography>
                        <Stack direction='row' spacing={3} mx={2.5} my={2}>
                            <TextField id="outlined-required" label="Main driver name" defaultValue=" " fullWidth />
                            <TextField id="outlined-required" label="Main driver age" defaultValue=" " />
                        </Stack>
                        {add && <Stack direction='row' spacing={3} mx={2.5} mt={2}>
                            <TextField id="outlined-required" label="Secondary driver name" defaultValue=" " fullWidth />
                            <TextField id="outlined-required" label="Secondary driver age" defaultValue=" " />
                        </Stack>}
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mt={0} mb={1} mr={3}>
                        <Stack direction='row' spacing={1} >
                            <Fab size='small' color="primary" onClick={(e) => { add ? setAdd(false) : setAdd(true) }} >
                                {add ? <CancelIcon /> : <AddIcon />}
                            </Fab>
                            <Button variant='contained' sx={{ background: 'grey', textTransform: 'capitalize' }}>Change</Button>
                        </Stack>
                    </Box>
                </Card>
            </Box>
        </LocalizationProvider>
    )
}
