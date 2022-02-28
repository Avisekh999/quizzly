import PaytmChecksum from './Paytm/PaytmChecksum'
const { v4: uuidv4 } = require("uuid")

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, email } = req.body
    const txtAmt = JSON.stringify(amount)

    var params = {}

    /* initialize an array */
    params["MID"] = process.env.MID
    params["WEBSITE"] = process.env.WEBSITE
    params["CHANNEL_ID"] = process.env.CHANNEL_ID
    params["INDUSTRY_TYPE_ID"] = process.env.INDUSTRY_TYPE_ID
    params["ORDER_ID"] = uuidv4()
    params["CUST_ID"] = process.env.CUST_ID
    params["TXN_AMOUNT"] = txtAmt
    params["CALLBACK_URL"] = "http://localhost:3000/api/callback" // Changed this
    params["EMAIL"] = email
    params["MOBILE_NO"] = "9876773210"

    /**
     * Generate checksum by parameters we have
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */

    var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.KEY)
    paytmChecksum
      .then(function (checksum) {
        let paytmParams = {
          ...params,
          CHECKSUMHASH: checksum,
        }
        res.json(paytmParams)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
