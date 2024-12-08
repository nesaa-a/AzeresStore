document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
      alert('Product clicked: ' + product.querySelector('h2').innerText);
    });
  });
  