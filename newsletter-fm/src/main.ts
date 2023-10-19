import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  const regexpEmail =
    /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/g;

  // newslatter

  const newsletter = document.querySelector('#newsletter') as HTMLDivElement;
  const newsletterInfo = document.querySelector(
    '#newsletter-info',
  ) as HTMLDivElement;
  const newsletterImage = document.querySelector(
    '#newsletter-image',
  ) as HTMLImageElement;
  const form = document.querySelector('form') as HTMLFormElement;
  const input = document.querySelector('input') as HTMLInputElement;
  const btnSubmit = document.querySelector('#subscribe') as HTMLButtonElement;

  // success

  const successWindow = document.querySelector('#success') as HTMLDivElement;
  const emailModule = document.querySelector('.email') as HTMLSpanElement;
  const btnDismissMsg = document.querySelector(
    '.success__btn',
  ) as HTMLButtonElement;

  // states

  let isFirstRender = true;
  let actualEmail = '';

  // logic

  const onValidateEmail = (email: string) => !!email.match(regexpEmail);

  const onChangeStateInput = (email: string, isValid: boolean) => {
    const errorParagraph = document.createElement('p');
    errorParagraph.classList.add('input-error-p');
    errorParagraph.textContent = 'Valid email required';

    if (email && isValid) {
      if (input.classList.contains('input-error')) {
        input.classList.remove('input-error');
        form.removeChild(
          document.querySelector('.input-error-p') as HTMLParagraphElement,
        );

        if (email) {
          btnSubmit.disabled = false;
          btnSubmit.classList.remove('disabled-btn');
          btnSubmit.classList.add('btn-subscribe');
        } else {
          btnSubmit.classList.add('disabled-btn');
          btnSubmit.classList.remove('btn-subscribe');
        }
      } else {
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('disabled-btn');
        btnSubmit.classList.add('btn-subscribe');
      }
    } else {
      if (!input.classList.contains('input-error')) {
        input.classList.add('input-error');
        form.appendChild(errorParagraph);
        btnSubmit.disabled = true;

        if (
          !btnSubmit.classList.contains('disabled-btn') ||
          btnSubmit.classList.contains('btn-subscribe')
        ) {
          btnSubmit.classList.add('disabled-btn');
          btnSubmit.classList.remove('btn-subscribe');
        }
      } else {
        if (!email && form.querySelector('.input-error-p')) {
          input.classList.remove('input-error');
          form.removeChild(
            document.querySelector('.input-error-p') as HTMLParagraphElement,
          );
        }
      }
    }
  };

  // listeners

  input.addEventListener('input', (e: Event) => {
    const email = (e.target as HTMLInputElement).value;
    const isValid = onValidateEmail(email);

    if (isFirstRender) {
      successWindow.style.display = 'flex';
      isFirstRender = false;
    }

    onChangeStateInput(email, isValid);
  });

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const [, emailNode] = (e.target as HTMLFormElement).children;
    const email = (emailNode as HTMLInputElement).value;
    actualEmail = email;

    const createdIMG = document.createElement('img');
    createdIMG.src = './loader.png';
    createdIMG.alt = 'loader';
    createdIMG.classList.add('loader');
    btnSubmit.appendChild(createdIMG);

    const img = document.querySelector('.loader') as HTMLImageElement;

    setTimeout(() => {
      btnSubmit.removeChild(img);
      newsletterInfo.classList.remove('visible');
      newsletterImage.classList.remove('visible');
      newsletter.classList.add('transition-success');
      emailModule.textContent = actualEmail;

      setTimeout(() => successWindow.classList.add('visible'), 500);
    }, 500);
  });

  btnDismissMsg.addEventListener('click', () => {
    newsletter.classList.remove('transition-success');
    newsletterImage.classList.add('visible');
    newsletterInfo.classList.add('visible');

    successWindow.classList.remove('visible');

    input.value = '';
  });
});
