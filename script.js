document.addEventListener('DOMContentLoaded', () => {
  const countriesData = [
    {"country": "Afghanistan", "iso": "AF"},
    {"country": "Albania", "iso": "AL"},
    {"country": "Algeria", "iso": "DZ"},
    {"country": "Andorra", "iso": "AD"},
    {"country": "Angola", "iso": "AO"},
    {"country": "Antigua & Deps", "iso": "AG"},
    {"country": "Argentina", "iso": "AR"},
    {"country": "Armenia", "iso": "AM"},
    {"country": "Australia", "iso": "AU"},
    {"country": "Austria", "iso": "AT"},
    {"country": "Azerbaijan", "iso": "AZ"},
    {"country": "Bahamas", "iso": "BS"},
    {"country": "Bahrain", "iso": "BH"},
    {"country": "Bangladesh", "iso": "BD"},
    {"country": "Barbados", "iso": "BB"},
    {"country": "Belarus", "iso": "BY"},
    {"country": "Belgium", "iso": "BE"},
    {"country": "Belize", "iso": "BZ"},
    {"country": "Benin", "iso": "BJ"},
    {"country": "Bhutan", "iso": "BT"},
    {"country": "Bolivia", "iso": "BO"},
    {"country": "Bosnia Herzegovina", "iso": "BA"},
    {"country": "Botswana", "iso": "BW"},
    {"country": "Brazil", "iso": "BR"},
    {"country": "Brunei", "iso": "BN"},
    {"country": "Bulgaria", "iso": "BG"},
    {"country": "Burkina", "iso": "BF"},
    {"country": "Burundi", "iso": "BI"},
    {"country": "Cambodia", "iso": "KH"},
    {"country": "Cameroon", "iso": "CM"},
    {"country": "Canada", "iso": "CA"},
    {"country": "Cape Verde", "iso": "CV"},
    {"country": "Central African Rep", "iso": "CF"},
    {"country": "Chad", "iso": "TD"},
    {"country": "Chile", "iso": "CL"},
    {"country": "China", "iso": "CN"},
    {"country": "Colombia", "iso": "CO"},
    {"country": "Comoros", "iso": "KM"},
    {"country": "Congo", "iso": "CG"},
    {"country": "Congo {Democratic Rep}", "iso": "CD"},
    {"country": "Costa Rica", "iso": "CR"},
    {"country": "Croatia", "iso": "HR"},
    {"country": "Cuba", "iso": "CU"},
    {"country": "Cyprus", "iso": "CY"},
    {"country": "Czech Republic", "iso": "CZ"},
    {"country": "Denmark", "iso": "DK"},
    {"country": "Djibouti", "iso": "DJ"},
    {"country": "Dominica", "iso": "DM"},
    {"country": "Dominican Republic", "iso": "DO"},
    {"country": "East Timor", "iso": "TL"},
    {"country": "Ecuador", "iso": "EC"},
    {"country": "Egypt", "iso": "EG"},
    {"country": "El Salvador", "iso": "SV"},
    {"country": "Equatorial Guinea", "iso": "GQ"},
    {"country": "Eritrea", "iso": "ER"},
    {"country": "Estonia", "iso": "EE"},
    {"country": "Ethiopia", "iso": "ET"},
    {"country": "Fiji", "iso": "FJ"},
    {"country": "Finland", "iso": "FI"},
    {"country": "France", "iso": "FR"},
    {"country": "Gabon", "iso": "GA"},
    {"country": "Gambia", "iso": "GM"},
    {"country": "Georgia", "iso": "GE"},
    {"country": "Germany", "iso": "DE"},
    {"country": "Ghana", "iso": "GH"},
    {"country": "Greece", "iso": "GR"},
    {"country": "Grenada", "iso": "GD"},
    {"country": "Guatemala", "iso": "GT"},
    {"country": "Guinea", "iso": "GN"},
    {"country": "Guinea-Bissau", "iso": "GW"},
    {"country": "Guyana", "iso": "GY"},
    {"country": "Haiti", "iso": "HT"},
    {"country": "Honduras", "iso": "HN"},
    {"country": "Hungary", "iso": "HU"},
    {"country": "Iceland", "iso": "IS"},
    {"country": "India", "iso": "IN"},
    {"country": "Indonesia", "iso": "ID"},
    {"country": "Iran", "iso": "IR"},
    {"country": "Iraq", "iso": "IQ"},
    {"country": "Ireland {Republic}", "iso": "IE"},
    {"country": "Israel", "iso": "IL"},
    {"country": "Italy", "iso": "IT"},
    {"country": "Ivory Coast", "iso": "CI"},
    {"country": "Jamaica", "iso": "JM"},
    {"country": "Japan", "iso": "JP"},
    {"country": "Jordan", "iso": "JO"},
    {"country": "Kazakhstan", "iso": "KZ"},
    {"country": "Kenya", "iso": "KE"},
    {"country": "Kiribati", "iso": "KI"},
    {"country": "Korea North", "iso": "KP"},
    {"country": "Korea South", "iso": "KR"},
    {"country": "Kosovo", "iso": "XK"},
    {"country": "Kuwait", "iso": "KW"},
    {"country": "Kyrgyzstan", "iso": "KG"},
    {"country": "Laos", "iso": "LA"},
    {"country": "Latvia", "iso": "LV"},
    {"country": "Lebanon", "iso": "LB"},
    {"country": "Lesotho", "iso": "LS"},
    {"country": "Liberia", "iso": "LR"},
    {"country": "Libya", "iso": "LY"},
    {"country": "Liechtenstein", "iso": "LI"},
    {"country": "Lithuania", "iso": "LT"},
    {"country": "Luxembourg", "iso": "LU"},
    {"country": "Macedonia", "iso": "MK"},
    {"country": "Madagascar", "iso": "MG"},
    {"country": "Malawi", "iso": "MW"},
    {"country": "Malaysia", "iso": "MY"},
    {"country": "Maldives", "iso": "MV"},
    {"country": "Mali", "iso": "ML"},
    {"country": "Malta", "iso": "MT"},
    {"country": "Marshall Islands", "iso": "MH"},
    {"country": "Mauritania", "iso": "MR"},
    {"country": "Mauritius", "iso": "MU"},
    {"country": "Mexico", "iso": "MX"},
    {"country": "Micronesia", "iso": "FM"},
    {"country": "Moldova", "iso": "MD"},
    {"country": "Monaco", "iso": "MC"},
    {"country": "Mongolia", "iso": "MN"},
    {"country": "Montenegro", "iso": "ME"},
    {"country": "Morocco", "iso": "MA"},
    {"country": "Mozambique", "iso": "MZ"},
    {"country": "Myanmar, {Burma}", "iso": "MM"},
    {"country": "Namibia", "iso": "NA"},
    {"country": "Nauru", "iso": "NR"},
    {"country": "Nepal", "iso": "NP"},
    {"country": "Netherlands", "iso": "NL"},
    {"country": "New Zealand", "iso": "NZ"},
    {"country": "Nicaragua", "iso": "NI"},
    {"country": "Niger", "iso": "NE"},
    {"country": "Nigeria", "iso": "NG"},
    {"country": "Norway", "iso": "NO"},
    {"country": "Oman", "iso": "OM"},
    {"country": "Pakistan", "iso": "PK"},
    {"country": "Palau", "iso": "PW"},
    {"country": "Panama", "iso": "PA"},
    {"country": "Papua New Guinea", "iso": "PG"},
    {"country": "Paraguay", "iso": "PY"},
    {"country": "Peru", "iso": "PE"},
    {"country": "Philippines", "iso": "PH"},
    {"country": "Poland", "iso": "PL"},
    {"country": "Portugal", "iso": "PT"},
    {"country": "Qatar", "iso": "QA"},
    {"country": "Romania", "iso": "RO"},
    {"country": "Russian Federation", "iso": "RU"},
    {"country": "Rwanda", "iso": "RW"},
    {"country": "St Kitts & Nevis", "iso": "KN"},
    {"country": "St Lucia", "iso": "LC"},
    {"country": "Saint Vincent & the Grenadines", "iso": "VC"},
    {"country": "Samoa", "iso": "WS"},
    {"country": "San Marino", "iso": "SM"},
    {"country": "Sao Tome & Principe", "iso": "ST"},
    {"country": "Saudi Arabia", "iso": "SA"},
    {"country": "Senegal", "iso": "SN"},
    {"country": "Serbia", "iso": "RS"},
    {"country": "Seychelles", "iso": "SC"},
    {"country": "Sierra Leone", "iso": "SL"},
    {"country": "Singapore", "iso": "SG"},
    {"country": "Slovakia", "iso": "SK"},
    {"country": "Slovenia", "iso": "SI"},
    {"country": "Solomon Islands", "iso": "SB"},
    {"country": "Somalia", "iso": "SO"},
    {"country": "South Africa", "iso": "ZA"},
    {"country": "South Sudan", "iso": "SS"},
    {"country": "Spain", "iso": "ES"},
    {"country": "Sri Lanka", "iso": "LK"},
    {"country": "Sudan", "iso": "SD"},
    {"country": "Suriname", "iso": "SR"},
    {"country": "Swaziland", "iso": "SZ"},
    {"country": "Sweden", "iso": "SE"},
    {"country": "Switzerland", "iso": "CH"},
    {"country": "Syria", "iso": "SY"},
    {"country": "Taiwan", "iso": "TW"},
    {"country": "Tajikistan", "iso": "TJ"},
    {"country": "Tanzania", "iso": "TZ"},
    {"country": "Thailand", "iso": "TH"},
    {"country": "Togo", "iso": "TG"},
    {"country": "Tonga", "iso": "TO"},
    {"country": "Trinidad & Tobago", "iso": "TT"},
    {"country": "Tunisia", "iso": "TN"},
    {"country": "Turkey", "iso": "TR"},
    {"country": "Turkmenistan", "iso": "TM"},
    {"country": "Tuvalu", "iso": "TV"},
    {"country": "Uganda", "iso": "UG"},
    {"country": "Ukraine", "iso": "UA"},
    {"country": "United Arab Emirates", "iso": "AE"},
    {"country": "United Kingdom", "iso": "GB"},
    {"country": "United States", "iso": "US"},
    {"country": "Uruguay", "iso": "UY"},
    {"country": "Uzbekistan", "iso": "UZ"},
    {"country": "Vanuatu", "iso": "VU"},
    {"country": "Vatican City", "iso": "VA"},
    {"country": "Venezuela", "iso": "VE"},
    {"country": "Vietnam", "iso": "VN"},
    {"country": "Yemen", "iso": "YE"},
    {"country": "Zambia", "iso": "ZM"},
    {"country": "Zimbabwe", "iso": "ZW"}
  ];

  const _ = (id) => document.getElementById(id);
  let currentIndex = 0;
  let score = 0;
  let round = 1;
  let timer;

  const populateDropdown = () => {
    const dropdown = _('guess-input');
    countriesData.forEach(({country}) => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      dropdown.appendChild(option);
    });
  };

  const startTimer = () => {
    let timeLeft = 30;
    _('timer').textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      _('timer').textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        _('feedback').textContent = `Time's up! The correct answer was ${countriesData[currentIndex].country}.`;
        updateRound();
      }
    }, 1000);
  };

  const displayFlag = (index) => {
    console.log('Displaying flag:', index, countriesData[index].iso);
    const cardHtml = `<div class="card" id="card${index}" style="background-image:url('../images/${countriesData[index].iso}.png')"></div>`;
    _('demo').innerHTML = cardHtml;
    clearInterval(timer);
    startTimer();
  };

  const checkGuess = () => {
    const userGuess = _('guess-input').value.trim().toLowerCase();
    const correctAnswer = countriesData[currentIndex].country.toLowerCase();

    if (userGuess === correctAnswer) {
      score += 10;
      _('feedback').textContent = 'Correct!';
    } else {
      _('feedback').textContent = `Wrong! The correct answer was ${countriesData[currentIndex].country}.`;
    }
    updateRound();
  };

  const updateRound = () => {
    clearInterval(timer);
    round++;
    if (round > 10) {
      _('feedback').textContent = `Game over! Your final score is ${score}.`;
      return;
    }

    _('score').textContent = `Score: ${score}`;
    _('round').textContent = `Round: ${round}/10`;

    setTimeout(() => {
      _('feedback').textContent = '';
      nextFlag();
    }, 2000);
  };

  const pass = () => {
    _('feedback').textContent = `Passed! The correct answer was ${countriesData[currentIndex].country}.`;
    updateRound();
  };

  const nextFlag = () => {
    _('guess-input').value = '';
    currentIndex = (currentIndex + 1) % countriesData.length;
    displayFlag(currentIndex);
  };

  _('submit-guess').addEventListener('click', checkGuess);
  _('guess-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });

  _('pass').addEventListener('click', pass);

  populateDropdown();
  displayFlag(currentIndex);
});
