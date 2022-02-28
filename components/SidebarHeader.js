import React from 'react'
import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdAddBox } from 'react-icons/md'
import sidebarHeaderStyles from '../styles/sidebarHeaderStyles.module.css'
import Link from 'next/link'

const SidebarHeader = (props) => {
  const id = '61fc1c3113c7a54fb2556030'
  const [brain, setBrain] = useState(0)

  const getBrain = (id) => {
    return fetch(`https://quizzlyapp222.herokuapp.com/api/brain/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  const getBrainNo = () => {
    getBrain(id).then((response) => {
      console.log(response)
      setBrain(response.brain)
    })
  }

  useEffect(() => {
    getBrainNo()
  })

  return (
    <>
      <Paper>
        <div style={{ height: '50px', marginTop: '4px' }}>
          <BiDotsVerticalRounded
            style={{ float: 'right', marginRight: '-1px', marginTop: '13px' }}
            size={30}
          />
          <Avatar style={{ float: 'right', marginTop: '8px' }} src='/5.jpg' />
          <h3
            style={{
              marginTop: '17px',
              width: '50%',
              float: 'left',
              marginLeft: '5px',
            }}
          >
            {props.title}
          </h3>
          <img
            style={{ marginTop: '22px', float: 'right', marginRight: '29px' }}
            height='20px'
            src='/brain.png'
          />
          <p
            style={{
              width: '11px',
              float: 'right',
              marginRight: '-35px',
              fontSize: '16px',
              marginTop: '24px',
              height: '15px',
            }}
          >
            {brain}
          </p>
          <div className={sidebarHeaderStyles.brainadd}>
            <IconButton color='success' size='small'>
              <Link href='/payment'>
                <MdAddBox />
              </Link>
            </IconButton>
          </div>
        </div>
      </Paper>
    </>
  )
}

export default SidebarHeader
