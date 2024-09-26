document.addEventListener('DOMContentLoaded', () => {
    const btnAgregar = document.getElementById('agregar');
    const btnLimpiar = document.getElementById('limpiar');
    const itemInput = document.getElementById('item');
    const contenedor = document.getElementById('contenedor');

    const cargarElementos = () => {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      contenedor.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
      });
    };
  
    btnAgregar.addEventListener('click', agregarItem => {
      const item = itemInput.value.trim();
      if (item) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        cargarElementos();
      }
    });
  
    btnLimpiar.addEventListener('click', limpiarItems => {
      localStorage.removeItem('items');
      cargarElementos();
    });
  
    cargarElementos();
  });