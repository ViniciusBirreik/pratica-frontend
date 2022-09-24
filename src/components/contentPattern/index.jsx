import { Typography, Box } from "@mui/material"

export default function ContentPattern({title: Title, text: Text}) {
    return (
        <>
            <Box sx={{display: 'flex', height: '100vh'}}>
                <Box sx={{width: '30%', heigth: '100%', backgroundColor: '#3C3B42', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Typography variant='h2' sx={{justifyContent: 'center'}}>
                        <Title/>
                    </Typography>
                </Box>
                <Box sx={{width: '70%', height: '100%'}}>
                    <Typography>
                        <Text/>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}