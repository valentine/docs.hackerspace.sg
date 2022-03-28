import React from 'react'

const paypalSubscribeHTML = `
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick-subscriptions">
  <input type="hidden" name="business" value="3ZFSDSWWTBA6C">
  <input type="hidden" name="lc" value="SG">
  <input type="hidden" name="item_name" value="HackerspaceSG Recurring Payment">
  <input type="hidden" name="no_note" value="1">
  <input type="hidden" name="no_shipping" value="1">
  <input type="hidden" name="src" value="1">
  <p><input type="text" name="a3" style="
  background: #f7f7f7;
  border: 0px;
  border-radius: 40px;
  color: #606770;
  font-size: 1rem;
  font-weight: 500;
  height: 36px;
  padding: 0px 8px;
  " placeholder="Enter an amount"></p>
  <input type="hidden" name="p3" value="1">
  <input type="hidden" name="t3" value="M">
  <input type="hidden" name="currency_code" value="SGD">
  <input type="hidden" name="bn" value="PP-SubscriptionsBF:btn_subscribe_SM.gif:NonHosted">
  <p><input type="image" src="/img/paypal-subscribe.png" border="0" name="submit" alt="Subscribe with PayPal"></p>
</form>
`

function PayPalSubscribeForm() {
    return (
      <div dangerouslySetInnerHTML={{ __html: paypalSubscribeHTML }} />
    )
}

export default PayPalSubscribeForm
