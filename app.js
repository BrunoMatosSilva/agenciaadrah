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
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ideaInput = document.querySelector('#idea');
const selectionStatus = document.querySelector('#selection-status');
const formStatus = document.querySelector('#form-status');
const successPanel = document.querySelector('#message-success');
const submitButton = document.querySelector('#submit-message');
const submitLabel = document.querySelector('#submit-label');
let sending = false;

const serviceDetails = [...document.querySelectorAll('.service')];
serviceDetails.forEach(details => details.addEventListener('toggle', () => {
  if (details.open) serviceDetails.forEach(other => { if (other !== details) other.open = false; });
}));
function clearFormStatus() {
  formStatus.hidden = true;
  formStatus.textContent = '';
}
document.querySelectorAll('.service-contact').forEach(button => button.addEventListener('click', () => {
  if (sending) return;
  interest.value = button.dataset.interest;
  form.hidden = false;
  successPanel.hidden = true;
  clearFormStatus();
  selectionStatus.textContent = button.dataset.interest + ' selecionado. Conte um pouco da sua ideia.';
  document.querySelector('#contato').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  nameInput.focus({preventScroll:true});
}));
nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending) return;
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.setCustomValidity('Conte pra gente como você se chama.');
    nameInput.reportValidity();
    return;
  }
  if (!form.reportValidity()) return;
  // The hidden field is processed by FormSubmit as an anti-spam honeypot.
  if (form.elements.namedItem('_honey').value) return;
  if (location.protocol === 'file:') {
    formStatus.textContent = 'Para enviar a mensagem, abra o site pela hospedagem. Você também pode escrever para agenciaadrah@gmail.com.';
    formStatus.hidden = false;
    return;
  }
  clearFormStatus();
  sending = true;
  submitButton.disabled = true;
  submitLabel.textContent = 'Enviando mensagem…';
  form.setAttribute('aria-busy', 'true');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  const payload = Object.fromEntries(new FormData(form));
  payload.name = name;
  payload.email = emailInput.value.trim();
  payload.message = ideaInput.value.trim() || 'Gostaria de conversar sobre os serviços da ADRAH.';
  payload._replyto = payload.email;
  const endpoint = new URL(form.action);
  endpoint.pathname = '/ajax' + endpoint.pathname;
  try {
    const response = await fetch(endpoint.href, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const result = await response.json();
    // HTTP 200 or the string "false" must never be treated as a successful send.
    if (!response.ok || ![true, 'true'].includes(result.success)) {
      const failure = new Error('Submission was not accepted.');
      failure.activationRequired = typeof result.message === 'string' && /activat/i.test(result.message);
      throw failure;
    }
    form.hidden = true;
    successPanel.hidden = false;
    document.querySelector('#success-title').focus({preventScroll:true});
    successPanel.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  } catch (error) {
    formStatus.textContent = error.activationRequired
      ? 'O formulário ainda está sendo ativado. Por enquanto, escreva diretamente para agenciaadrah@gmail.com. Seus dados continuam preenchidos.'
      : 'Não conseguimos confirmar o envio. Seus dados continuam preenchidos. Tente novamente ou escreva diretamente para agenciaadrah@gmail.com.';
    formStatus.hidden = false;
  } finally {
    clearTimeout(timeout);
    sending = false;
    submitButton.disabled = false;
    submitLabel.textContent = 'Enviar mensagem';
    form.removeAttribute('aria-busy');
  }
});
document.querySelector('#new-message').addEventListener('click', () => {
  form.reset();
  nameInput.setCustomValidity('');
  clearFormStatus();
  successPanel.hidden = true;
  form.hidden = false;
  nameInput.focus();
});
