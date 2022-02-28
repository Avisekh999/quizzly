import formidable from 'formidable'
import https from 'https'
import Brain from '../../../models/brainModel'
import PaytmChecksum from '../payment/Paytm/PaytmChecksum'
import initDB from '../../../helpers/initDB'

// Initialize DB
initDB()

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm()

    form.parse(req, (err, fields, file) => {
      const paytmChecksum = fields.CHECKSUMHASH
      delete fields.CHECKSUMHASH

      var isVerifySignature = PaytmChecksum.verifySignature(
        fields,
        process.env.KEY,
        paytmChecksum
      )
      if (isVerifySignature) {
        console.log('verifiedSignature') // TODO: remove this

        var paytmParams = {}
        paytmParams['MID'] = fields.MID
        paytmParams['ORDERID'] = fields.ORDERID

        /*
         * Generate checksum by parameters we have
         * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
         */
        PaytmChecksum.generateSignature(paytmParams, process.env.KEY).then(
          function (checksum) {
            paytmParams['CHECKSUMHASH'] = checksum

            var post_data = JSON.stringify(paytmParams)

            var options = {
              /* for Staging */
              hostname: 'securegw-stage.paytm.in',

              /* for Production */
              // hostname: 'securegw.paytm.in',

              port: 443,
              path: '/order/status',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length,
              },
            }

            var response = ''
            var post_req = https.request(options, function (post_res) {
              post_res.on('data', function (chunk) {
                response += chunk
              })

              post_res.on('end', async function () {
                // res.json(response);
                let result = JSON.parse(response)
                console.log(result.TXNAMOUNT) // TODO: remove this
                try {
                  if (result.TXNAMOUNT === '49.00') {
                    console.log('== reached here ==') // TODO: remove this
                    let id = '61fc1c3113c7a54fb2556030'

                    const getBrain = await Brain.findById(id) // PROBLEM: occurring here
                    console.log('getBrain:', getBrain)
  
                    if (getBrain) {
                      getBrain.brain += 10
                      await getBrain.save()

                      res.redirect(`http://localhost:3000/dashboard`)
                      // res.redirect(`https://quiz-app-bshal.vercel.app/dashboard`)
                    }
                  }
                } catch(err) {
                  console.log(`Error: ${err.message}`)
                }
              })
            })

            post_req.write(post_data)
            post_req.end()
          }
        )
      } else {
        console.log('Not verifiedSignature')
      }
    })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
