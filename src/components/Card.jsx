import '../styles/Card.css';

function Card() {
  const monsteraCost = 8;
  const lierreCost = 10;
  const bouquetDeFleurCost = 15;

  return (
    <div className="lmj-card">
      <h2>Panier</h2>
      <ul>
        <li>monstera: {monsteraCost}€</li>
        <li>lierre: {lierreCost}€</li>
        <li>bouquet de fleur: {bouquetDeFleurCost}€</li>
      </ul>
      <p>Total: {monsteraCost + lierreCost + bouquetDeFleurCost}€ </p>
    </div>
  );
}
export default Card;
