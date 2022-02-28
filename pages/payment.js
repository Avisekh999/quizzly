import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'



const payment = () => {



  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }

  function isObj(val) {
    return typeof val === 'object'
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)

   Object.keys(params)?.forEach((key) => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })

    return form
  }

  function post(details) {
    console.log(details,'details')
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

  const getData = (data) => {
    return fetch(`/api/payment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  const makePayment = () => {
    getData({ amount: 49, email: 'priyatample@gmail.com' }).then((response) => {
      console.log(response, 'response')
      var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response,
      }
      post(information)
      console.log(response, 'response')
    })
  }

  return (
    <>
      <Container>
        <h1>Payment Page</h1>
        <Card
          sx={{ maxWidth: '80%' }}
          style={{ height: '300px', marginTop: '100px', marginLeft: '20px' }}
        >
          <p style={{ fontSize: '15px', color: '#6d708d' }}>Basic</p>
          <CardContent>
            <Typography gutterBottom variant='p' component='div'>
              Brain Classic Pack
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              $ 49.00 Get 10 Brains
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color='primary' onClick={makePayment}>
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default payment
