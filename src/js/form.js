import { saveFormData } from './form-data'
import { alert, defaultModules } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();
    const formElements = e.currentTarget.elements;

    const name = formElements.username.value;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        name, email, message
    }
    
    saveFormData(formData);

    alert({
        text: 'Feedback submitted succesfully!',
        type: 'success',
      });
}


