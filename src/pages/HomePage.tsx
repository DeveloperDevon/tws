import React from 'react'
import { Typography } from '@material-ui/core'

export const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/closet.jpeg',
          height: 270,
          backgroundSize: 'cover',
          opacity: 0.85,
        }}
      />
      <div style={{ marginBottom: 78 }}>
        <Typography style={{ padding: 15 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
          atque expedita corporis facilis ut quasi rem suscipit, delectus
          corrupti eaque.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          aspernatur magni? Et officia aut dolores aspernatur minus unde
          deleniti sapiente consectetur, error ipsum maxime vel natus in dolorem
          ea ut iure doloribus voluptates tempore, reprehenderit hic ipsam eos
          similique dolorum.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
          velit! Culpa, dolore maiores modi magnam consequuntur repellendus
          animi pariatur alias architecto blanditiis impedit voluptates.
          Deserunt ipsa accusantium dolores doloribus impedit.
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: 'lightblue',
          bottom: 0,
          marginTop: 'auto',
          //   position: 'fixed',
          width: '100%',
        }}
      >
        <Typography
          variant="body1"
          style={{ padding: 15, textAlign: 'center' }}
        >
          Roseville, CA | (916) 555-2234 | something@email.com
        </Typography>
      </div>
    </>
  )
}
