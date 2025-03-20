// zodiac
const kaitoButton = document.getElementById('kaito')
const lukaButton = document.getElementById('luka')
const lenButton = document.getElementById('len')
const gumiButton = document.getElementById('gumi')
const mikuButton = document.getElementById('miku')
const tetoButton = document.getElementById('teto')
const mayuButton = document.getElementById('mayu')
const seeuButton = document.getElementById('seeu')
const rinButton = document.getElementById('rin')
const mewButton = document.getElementById('mew')
const meikoButton = document.getElementById('meiko')
const lilyButton = document.getElementById('lily')




//sounds
const soundboard = document.getElementById('soundboard');
function play_audio(src) {
  let audio_element = new Audio();
  if (!audio_element.paused) {
    audio_element.paused();
    audio_element.currentTime = 0;
  }
  audio_element.src = src;
  audio_element.play();
}

document.getElementById('kaito').addEventListener('click', function() {
    play_audio('sounds/kaito.mp3');
});

document.getElementById('luka').addEventListener('click', function() {
    play_audio('sounds/luka.mp3');
});

document.getElementById('len').addEventListener('click', function() {
  play_audio('sounds/len.mp3');
});

document.getElementById('gumi').addEventListener('click', function() {
  play_audio('sounds/gumi.mp3');
});

document.getElementById('miku').addEventListener('click', function() {
  play_audio('sounds/miku.mp3');
});

document.getElementById('teto').addEventListener('click', function() {
  play_audio('sounds/teto.mp3');
});

document.getElementById('mayu').addEventListener('click', function() {
  play_audio('sounds/mayu.mp3');
});

document.getElementById('seeu').addEventListener('click', function() {
  play_audio('sounds/seeu.mp3');
});

document.getElementById('rin').addEventListener('click', function() {
  play_audio('sounds/rin.mp3');
});

document.getElementById('mew').addEventListener('click', function() {
  play_audio('sounds/mew.mp3');
});

document.getElementById('meiko').addEventListener('click', function() {
  play_audio('sounds/meiko.mp3');
});

document.getElementById('lily').addEventListener('click', function() {
  play_audio('sounds/lily.mp3');
});


function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Megpoid GUMI';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Kagamine Rin';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'MEW';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'MAYU';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Lily';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Kasane Teto';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Kagamine Len';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Hatsune Miku';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'MEIKO';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Megurine Luka';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'SeeU';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'KAITO';
    } else return null;
  }



const zodiac = [
//1
    {
        name: 'Megurine Luka',
        img: "img/luka.webp",
        text: 'You got Megurine Luka!',
        sound: "audio/luka.mp3"
    },
   
//2
    {
        name: 'MEIKO',
        img: "img/meiko.webp",
        text: 'You got MEIKO!',
        sound: "audio/meiko.mp3"
    },

//3
    {
        name: 'Hatsune Miku',
        img: "img/miku.webp",
        text: 'You got Hatsune Miku!',
        sound: "audio/miku.mp3"
    },

//4
    {
        name: 'Kagamine Len',
        img: "img/len.webp",
        text: 'You got Kagamine Len!',
        sound: "audio/len.mp3"
    },

//5
    {
        name: 'Kasane Teto',
        img: "img/teto.webp",
        text: 'You got Kasane Teto!',
        sound: "audio/teto.mp3"
    },

//6
    {
        name: 'Lily',
        img: "img/lily.webp",
        text: 'You got VOCALOID Lily!',
        sound: "audio/lily.mp3"
    },

 //7
    {
        name: 'MAYU',
        img: "img/MAYU.webp",
        text: 'You got VOCALOID MAYU!',
        sound: "audio/mayu.mp3"
    },

 //8   
    {
        name:'MEW',
        img: "img/mew.webp",
        text: 'You got VOCALOID MEW!',
        sound: "audio/mew.mp3"
    },

//9
    {
        name: 'Kagamine Rin',
        img: "img/rin.webp",
        text: 'You got Kagamine Rin!',
        sound: "audio/rin.mp3"
    },

 //10
    {
        name: 'Megpoid GUMI',
        img: "img/gumi.webp",
        text: 'You got Megpoid GUMI!',
        sound: "audio/gumi.mp3"
    },

//11
    {
        name:'KAITO',
        img: "img/kaito.webp",
        text: 'You got KAITO!',
        sound: "audio/kaito.mp3"
    },

//12
    {
        name: 'SeeU',
        img: "img/seeu.webp",
        text: 'You got SeeU!',
        sound: "audio/seeu.mp3"
    }
]

function playSound(index) {
  const audio = new Audio(zodiac[index].sound);
  audio.play();
}


function displayZodiac(index) {
  const zodiacDetails = zodiac[index];
  document.getElementById('zodiac-name').textContent = zodiacDetails.name;
  document.getElementById('zodiac-description').textContent = zodiacDetails.text;
  document.getElementById('zodiac-image').src = zodiacDetails.img;
}

function openZodiacPopup(index) {
  displayZodiac(index);
  document.getElementById('overlay').style.display = 'block'; // open
}

// Close the popup
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none'; // close
});


function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 9; // GUMI
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 8; // Rin
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 7; // mew
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 6; // mayu
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 5; // lily
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 4; // teto
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 3; // len
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 2; // miku
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 1; // meiko
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 0; // luka
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 11; // seeu
  }  else if ((month === 1 && day >= 20) || (month === 2 && day <=18)) {
    return 10; // kaito
  } else {
    return -1; // Invalid date range
  }
}