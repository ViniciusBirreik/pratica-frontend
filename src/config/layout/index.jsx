import { AppBar, Box, Toolbar, Typography} from '@mui/material'
import { ColorButton } from '../../components/button'

export default function AppBarComponent({title: Title, main: Main}) {
  return (
    <>
      <Box>
        <AppBar position='static' color='transparent' sx={{width: '100%', boxShadow: 'none', backgroundColor: '#24232A'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'end', flexDirection: 'row'}}>
            <ColorButton
              size='large'
              edge='start'
              color='primary'
              href='/registration'>
              cadastro
            </ColorButton>
            <ColorButton
              size='large'
              color='info'
              href='/'>
              sair
            </ColorButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{display: 'flex', height: '100vh'}}>
      <Box sx={{width: '30%', heigth: '100%', backgroundColor: '#3C3B42', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Typography variant='h2' sx={{justifyContent: 'center'}}>
              <Title/>
          </Typography>
      </Box>
      <Box sx={{width: '70%', height: '100%'}}>
          <Typography>
              <Main/>
          </Typography>
      </Box>
    </Box>
  </>
  )
}


