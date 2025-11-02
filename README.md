# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/news-letter-sign-up-form.git)
- Live Site URL: [LIVE SITE URL](https://noob-coder6.github.io/news-letter-sign-up-form/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Form validation with regex

### What I learned

This project helped me strengthen my understanding of form validation and DOM manipulation in vanilla JavaScript. I learned how to:

**1. Implement email validation using regular expressions:**

```js
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
```

**2. Toggle between different UI states using classList:**

```js
signUpCard.classList.add('hidden');
successCard.classList.remove('hidden');
```

**3. Handle form submission and prevent default behavior:**

```js
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Custom validation logic
});
```

**4. Use CSS Grid for responsive layouts:**

```css
.card:not(.card--success) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
```

**5. Create dynamic error states:**

```css
input.error {
    border-color: var(--clr-primary-red);
    background-color: hsla(4, 100%, 67%, 0.15);
    color: var(--clr-primary-red);
}
```

### Continued development

In future projects, I want to focus on:

- More advanced form validation techniques (checking for disposable email domains, DNS validation)
- Improving accessibility with ARIA labels and keyboard navigation
- Adding animations and transitions for smoother state changes
- Implementing actual email submission with a backend service
- Exploring form libraries like Formik or React Hook Form for more complex forms

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GitHub - [@noob-coder6](https://github.com/noob-coder6)