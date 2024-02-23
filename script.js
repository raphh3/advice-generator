function fetchApi() {
  const api = 'https://api.adviceslip.com/advice';
  const adviceId = document.getElementById('adv-id');
  const adviceQuote = document.getElementById('adv-quote');

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceJson = data['slip'];

      adviceId.innerHTML = adviceJson['id'];
      adviceQuote.innerHTML = adviceJson['advice'];
    });
}

function main() {
  const dr = setInterval(function () {
    if (document.readyState === 'complete') {
      return;
    }
    // clearInterval(dr);
  }, 100);

  fetchApi();
}

const randomDice = document.getElementById('random');

randomDice.addEventListener('click', function () {});

main();
