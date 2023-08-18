import React from 'react'
import '../styles/MenuStyles.css';
import {MenuList} from '../data/data'
import Layout from '../Components/Layout/layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <div className='menu'>
    <Layout>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {
          MenuList.map(menu =>(
            <Card sx={{maxWidth:'390px', display:'flex', m:5}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body'>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
    </div>
  )
}

export default Menu
