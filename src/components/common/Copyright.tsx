import { Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';

export default function Copyright(props){
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Разработка компании © '}
      <Link color="inherit" href="https://Fugustim.ru">
      ООО "АМРИТЭКС"
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
