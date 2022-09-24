import { styled, Button } from '@mui/material'

export const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    '&:hover': {
      backgroundColor: 'grey'
    },
  }));