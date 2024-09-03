const faqContainer = document.querySelector('.faq_body');

// Event listener for all FAQ items
faqContainer.addEventListener('click', (e) => {
  // Check if the clicked element is the plus/minus icon or the question text
  const target = e.target.closest('.faq_body_show_text');
  if (target) {
    // Toggle the hide class on the corresponding answer paragraph
    const answer = target.nextElementSibling;
    answer.classList.toggle('hide');

    // Toggle the icon image source
    const icon = target.querySelector('img');
    if (icon.src.includes('icon-plus.svg')) {
      icon.src = './assets/images/icon-minus.svg';
    } else {
      icon.src = './assets/images/icon-plus.svg';
    }
  }
});
