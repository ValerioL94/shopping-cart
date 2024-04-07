import '../styles/home.css';

export default function Home() {
  const quotes = [
    '"We have everything you need and more"',
    '"You need it, We got it"',
    `"If you don't find it, just keep looking"`,
    'Why buy tomorrow what you can buy today?',
    'Your satisfaction is our priority',
  ];

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getQuote(array) {
    return array[randomInt(array.length)];
  }

  return (
    <div id="home-page">
      <h1 className="quote">{getQuote(quotes)}</h1>
    </div>
  );
}
