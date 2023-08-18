import React from 'react'
import Layout from '../Components/Layout/layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore facere impedit, illum voluptates obcaecati assumenda corrupti necessitatibus explicabo laboriosam veniam! Porro placeat quaerat, unde soluta similique culpa quis aspernatur?</p>
      </Box>
      <Box sx={{m:3, width:'600px', ml:10, "@media (max-width:600px)": {
        width:'250px',
      }}}>
        <TableContainer component={Paper}>
           <Table aria-aria-label='contact table'>
             <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact Details</TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt:1}}/>+101-800-3654(TorollFree)
                </TableCell>
              
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color:'skyblue', pt:1}}/>ankitpal3106@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green', pt:1}}/>+919690046135
                </TableCell>
              </TableRow>
             </TableBody>
           </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
