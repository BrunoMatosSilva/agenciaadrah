'use strict';
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu(restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const form = document.querySelector('#contact-form');
const interest = document.querySelector('#interest');
const preview = document.querySelector('#message-preview');
const status = document.querySelector('#selection-status');
const nameInput = document.querySelector('#name');
const ideaInput = document.querySelector('#idea');
const serviceDetails = [...document.querySelectorAll('.service')];
serviceDetails.forEach(details => details.addEventListener('toggle', () => {
  if (details.open) serviceDetails.forEach(other => { if (other !== details) other.open = false; });
}));
document.querySelectorAll('.service-contact').forEach(button => button.addEventListener('click', () => {
  interest.value = button.dataset.interest;
  form.hidden = false;
  preview.hidden = true;
  status.textContent = button.dataset.interest + ' selecionado. Conte um pouco da sua ideia.';
  document.querySelector('#contato').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  nameInput.focus({preventScroll:true});
}));
nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.setCustomValidity('Conte pra gente como você se chama.');
    nameInput.reportValidity();
    return;
  }
  const selected = interest.value;
  const idea = ideaInput.value.trim();
  const message = 'Olá, ADRAH! Me chamo ' + name + '.\n\n' + (selected === 'Ainda quero descobrir' ? 'Gostaria de entender como vocês podem ajudar meu negócio.' : 'Tenho interesse em ' + selected.toLocaleLowerCase('pt-BR') + '.') + (idea ? '\n\nMinha ideia: ' + idea : '') + '\n\nPodemos conversar?';
  document.querySelector('#message-text').textContent = message;
  document.querySelector('#whatsapp-message').href = 'https://wa.me/5511961364949?text=' + encodeURIComponent(message);
  form.hidden = true;
  preview.hidden = false;
  document.querySelector('#message-status').textContent = 'Mensagem preparada. Confira o texto antes de abrir o WhatsApp.';
  document.querySelector('#whatsapp-message').focus({preventScroll:true});
  preview.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
});
document.querySelector('#edit-message').addEventListener('click', () => {
  preview.hidden = true;
  form.hidden = false;
  ideaInput.focus({preventScroll:true});
});
