'use client';

export default function Test() {
  const submitHandler = (e: any) => {
    e.preventDefault();
    fetch('https://jm3eia.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer u_b2f78d5c_ab6e_478e_9d75_9ca31a4a6844',
      },
      body: JSON.stringify({
        payment_method: 'knet',
        amount: '10.000',
        token: 'u_b2f78d5c_ab6e_478e_9d75_9ca31a4a6844',
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('response: #1', response);
        }
        return response.text();
      })
      .then((response) => console.log('response #2: ', response))
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="hidden" name="payment_method" value="knet" />
      <input type="hidden" name="amount" value="10.000" />
      <input
        type="hidden"
        name="token"
        value="u_b2f78d5c_ab6e_478e_9d75_9ca31a4a6844"
      />
      <input type="submit" value="Send" />
    </form>
  );
}
