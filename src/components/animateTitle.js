/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-properties */
const elts = {
  text1: document.getElementById('text1'),
  text2: document.getElementById('text2'),
};

const texts = [
  'If',
  'You',
  'Like',
  'It',
  'Please',
  'Give',
  'a Love',
  ':)',
  'by @DotOnion',
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = '';
  elts.text2.style.opacity = '100%';

  elts.text1.style.filter = '';
  elts.text1.style.opacity = '0%';
}

function animate() {
  requestAnimationFrame(animate);

  const newTime = new Date();
  const shouldIncrementIndex = cooldown > 0;
  const dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      // eslint-disable-next-line no-plusplus
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

export { animate };
