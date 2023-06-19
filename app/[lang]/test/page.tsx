export default function Test() {
  return (
    <form action="https://jm3eia.com/checkout" method="POST">
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
