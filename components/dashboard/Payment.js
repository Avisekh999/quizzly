import { BsCheck } from "react-icons/bs";
import paymentStyles from './Payment.module.css'

const Payment = () => {
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

    Object.keys(params).forEach((key) => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })

    return form
  }

  function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

  const getData = async (data) => {
    return await fetch(`http://localhost:3000/api/payment`, { // Changed this
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
      // == USECASE: uncomment this console.log to view the response ==
      // console.log('== response ==:', response);
      var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response,
      }
      post(information)
    })
  }
	
	return (
		<div className={paymentStyles.paymentCard}>
			<div className={paymentStyles.cardHeader}>
				<h3 className={paymentStyles.cardHeaderTitle}>Premium</h3>
				<div className={paymentStyles.pricing}>
					<span className={paymentStyles.pricingText}>₹49.00 </span>
					<span className={paymentStyles.pricingSubText}>/ Premium Quiz</span>
				</div>
				<button className={paymentStyles.subscribeButton} onClick={makePayment}>Subscribe</button>
			</div>
			<div className={paymentStyles.cardContent}>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
				<p className={paymentStyles.cardText}>
					<BsCheck size={25} />
					<span>Lorem ipsum dolor sit ammet</span>
				</p>
			</div>
		</div>
	)
}
export default Payment