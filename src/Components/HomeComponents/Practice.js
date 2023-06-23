import { Box, Stack } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Practice() {
    return (
        <>
            <Box>
                <Stack direction="row" spacing={2}>
                    <Box>
                      <Box>
                        <Link to='https://codeforces.com/problemset/problem/1841/A'></Link>
                      </Box>
                    </Box>

                    <Box>
                        <FormGroup>
                            <FormControlLabel  control={<Checkbox defaultChecked />} label="800-1000" />
                            <FormControlLabel  control={<Checkbox />} label="1000-1200" />
                            <FormControlLabel  control={<Checkbox />} label="1200-1400" />
                            <FormControlLabel  control={<Checkbox />} label="1400-1600" />
                            <FormControlLabel  control={<Checkbox />} label="1600-1800" />
                            <FormControlLabel  control={<Checkbox />} label="1800-2000" />
                        </FormGroup>
                    </Box>
                </Stack>

            </Box>
        </>
    )
}

export default Practice