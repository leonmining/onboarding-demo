const QUESTIONS = [
  {
    q: "In welk jaar werd SNP Natuurreizen opgericht?",
    options: ["1965", "1973", "1981", "1990"],
    correct: 1,
    explain: "SNP ontstond in 1973 in Nijmegen, oorspronkelijk gericht op de Pyreneeën — vandaar de naam Stichting Natuurreizen Pyreneeën."
  },
  {
    q: "Wat is het belangrijkste kenmerk van een SNP-reis?",
    options: [
      "Zo groot mogelijke groepen, maximale efficiëntie",
      "All-inclusive luxe in vijfsterren resorts",
      "Kleinschalig, actief en met respect voor de natuur",
      "Eigen vervoer en losse hotelboekingen"
    ],
    correct: 2,
    explain: "SNP staat voor kleinschaligheid, actieve natuurbeleving en duurzaamheid. Geen massa, wel diepgang."
  },
  {
    q: "Een deelnemer zegt halverwege de dag 'het gaat wel' over haar voet. Wat doe je?",
    options: [
      "Doorlopen — ze is volwassen en kan voor zichzelf opkomen",
      "Stoppen, doorvragen en eventueel meteen blaarpreventie toepassen",
      "Haar tempo aanpassen en hopen dat het beter wordt",
      "Kantoor bellen voor advies"
    ],
    correct: 1,
    explain: "'Het gaat wel' is vaak een understatement. Stop, kijk, plak. Een vroeg verzorgde blaar bespaart een hele dag ellende."
  },
  {
    q: "Welke geldt NIET als een SNP-kernwaarde?",
    options: ["Duurzaam", "Persoonlijk", "Deskundig", "Luxe"],
    correct: 3,
    explain: "Onze kernwaarden zijn duurzaam, persoonlijk, deskundig en eigenzinnig. Luxe past niet bij ons DNA — echtheid wel."
  },
  {
    q: "Wanneer moet je je declaraties uiterlijk inleveren na terugkomst?",
    options: ["Binnen 48 uur", "Binnen 1 week", "Binnen 2 weken", "Binnen 1 maand"],
    correct: 2,
    explain: "Bonnetjes lever je binnen 2 weken digitaal in via het reisleidersportaal. Bewaar ze goed onderweg."
  },
  {
    q: "Wat is het eerste principe van 'Leave No Trace'?",
    options: [
      "Neem alle afval mee terug",
      "Plan vooruit en bereid je voor",
      "Respecteer wilde dieren",
      "Minimaliseer impact van vuur"
    ],
    correct: 1,
    explain: "Goede voorbereiding voorkomt de meeste impact. Daarna volgen de andere zes principes."
  },
  {
    q: "Je co-reisleider wordt ziek op dag 3 van een 8-daagse reis. Wat is je eerste stap?",
    options: [
      "Bel meteen de 24/7 SNP-noodlijn",
      "Stuur de groep alvast op pad en regel het onderweg",
      "Wacht af tot na het ontbijt en kijk hoe het gaat",
      "Vraag een deelnemer om bij te springen"
    ],
    correct: 0,
    explain: "Direct contact met de noodlijn. Kantoor schakelt mee, regelt vervanging of een aangepast programma. Jij houdt de groep gerust."
  },
  {
    q: "Welke trainingen volg je als nieuwe reisleider in je eerste jaar?",
    options: [
      "Alleen een online introductie",
      "Basistraining + EHBO-buiten + meelopen als co-reisleider",
      "Een week stage op kantoor",
      "Niks verplichts — al doende leer je"
    ],
    correct: 1,
    explain: "Je eerste jaar bestaat uit de tweedaagse basistraining, een EHBO-buiten module en minimaal één reis als co-reisleider met een ervaren collega."
  }
];

const ENCOURAGEMENT = [
  { min: 0,    title: "Welkom in de leerstand", text: "Geen zorgen — daar is deze onboarding voor. Loop de secties hierboven nog eens door en probeer het opnieuw." },
  { min: 50,   title: "Aardig op weg!", text: "Je hebt de basis te pakken. Een paar puntjes verdienen nog wat aandacht — vooral de praktische procedures." },
  { min: 75,   title: "Goed bezig, reisleider!", text: "Sterke score. Je voelt SNP goed aan. Nog even de fijne kneepjes en je bent er helemaal klaar voor." },
  { min: 100,  title: "Een natuurtalent 🌿", text: "Perfect. Je hebt de geest, de details én het noodprotocol op een rij. De Pyreneeën wachten." }
];

let current = 0;
let score = 0;

const card = document.getElementById('quiz-card');
const bar = document.getElementById('quiz-bar');
const counter = document.getElementById('quiz-counter');
const result = document.getElementById('quiz-result');

function render() {
  const q = QUESTIONS[current];
  counter.textContent = `Vraag ${current + 1} van ${QUESTIONS.length}`;
  bar.style.width = `${(current / QUESTIONS.length) * 100}%`;

  card.innerHTML = `
    <h3>${q.q}</h3>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join('')}
    </div>
  `;

  card.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => answer(parseInt(btn.dataset.i, 10)));
  });
}

function answer(i) {
  const q = QUESTIONS[current];
  const buttons = card.querySelectorAll('.quiz-option');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });

  const correct = i === q.correct;
  if (correct) score++;

  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';
  feedback.innerHTML = `<strong>${correct ? '✓ Juist' : '✗ Bijna'}</strong> — ${q.explain}`;
  card.appendChild(feedback);

  const next = document.createElement('div');
  next.className = 'quiz-next';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-primary';
  nextBtn.textContent = current === QUESTIONS.length - 1 ? 'Bekijk uitslag' : 'Volgende vraag';
  nextBtn.addEventListener('click', () => {
    current++;
    if (current >= QUESTIONS.length) showResult();
    else render();
  });
  next.appendChild(nextBtn);
  card.appendChild(next);
}

function showResult() {
  card.hidden = true;
  result.hidden = false;
  bar.style.width = '100%';
  counter.textContent = 'Klaar!';

  const pct = Math.round((score / QUESTIONS.length) * 100);
  const msg = [...ENCOURAGEMENT].reverse().find(e => pct >= e.min);

  document.getElementById('quiz-score').textContent = `${score} / ${QUESTIONS.length}`;
  document.getElementById('quiz-result-title').textContent = msg.title;
  document.getElementById('quiz-result-text').textContent = msg.text;
}

document.getElementById('quiz-restart').addEventListener('click', () => {
  current = 0;
  score = 0;
  card.hidden = false;
  result.hidden = true;
  render();
});

render();
