import React from 'react'
import Layout from '../Components/Layout/layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
        },
        "& p":{
          textAlign:'justify',
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem',
          }
        }
      }}>
       <Typography variant='h4'>
        Welcome To My Resturant
       </Typography>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta necessitatibus omnis sunt sed soluta hic a totam veritatis iusto unde, blanditiis eum suscipit perferendis, eligendi iure ex fuga deserunt possimus voluptatum delectus qui nobis rem modi. Dolores, eligendi fuga recusandae doloremque dolore velit vel nihil assumenda obcaecati explicabo quos quia et sit ipsa accusamus amet. Illum atque soluta totam officiis, animi iure fugit fuga quia nostrum molestiae delectus aliquam? Expedita facilis est, rerum, enim sequi magni iusto, voluptatibus amet ut laborum alias aliquid ipsa vel perspiciatis tempora voluptas adipisci doloremque tempore natus ullam! Quasi nemo aperiam quae ullam excepturi? Soluta!
       </p>
       <br/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas perferendis est debitis beatae eveniet illo natus explicabo quod rerum. Ipsa expedita quis soluta quia reprehenderit? Delectus deserunt consequuntur sint similique accusantium hic distinctio veniam deleniti, porro vel sequi doloremque beatae repellendus mollitia ea inventore, aperiam maiores! Nam tempore quod reiciendis earum maiores dolore ratione architecto doloremque officia asperiores, atque commodi velit ad debitis libero aut quaerat cum inventore fugit voluptates incidunt, harum amet? Illum facilis natus deleniti, repudiandae ea libero aperiam saepe, ratione nulla rerum, alias quam velit possimus. Aperiam numquam nostrum similique ex dolorem quos amet magnam iure!</p>
      </Box>
    </Layout>
  )
}

export default About
