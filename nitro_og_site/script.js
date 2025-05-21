document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      alert('Nitro OG - Powering up on Solana!');
    });
  }
});
