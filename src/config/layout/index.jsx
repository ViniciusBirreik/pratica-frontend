import { AppBar, Box, Toolbar, Button } from '@mui/material'

export default function AppBarComponent({component: Component}) {
  return (
    <Box>
      <AppBar position='static' color='transparent' sx={{width: '100%', boxShadow: 'none', backgroundColor: 'coral'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'end', flexDirection: 'row'}}>
          <Button
            size='large'
            edge='start'
            color='inherit'
            href='/registration'>
            cadastro
          </Button>
          <Button
            size='large'
            color='inherit'
            href='/'>
            sair
          </Button>
        </Toolbar>
      </AppBar>
      <Component/>
    </Box>
  )
}


