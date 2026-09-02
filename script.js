// =====================================
// CONFIGURACIÓN
// =====================================

// REEMPLAZÁ ESTO POR TU NÚMERO
// Argentina: 549 + código de área + número
// Ejemplo: 5491123456789

const NUMERO_WHATSAPP = "5491136210290";


// =====================================
// PRODUCTOS
// =====================================

const productos = [
  {
    id: 1,
    nombre: "Remera TS Essential",
    precio: 30000,
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 2,
    nombre: "Buzo TS Oversize",
    precio: 50000,
    imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 3,
    nombre: "Jean Baggy TS",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 4,
    nombre: "Campera TS",
    precio: 80000,
    imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 5,
    nombre: "Remera Oversize",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 6,
    nombre: "Buzo Essential Grey",
    precio: 55000,
    imagen: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80"
  }
];


// =====================================
// CARRITO
// =====================================

let carrito = [];


// =====================================
// MOSTRAR PRODUCTOS
// =====================================

function mostrarProductos() {

  const lista = document.getElementById("listaProductos");

  lista.innerHTML = "";

  productos.forEach(producto => {

    lista.innerHTML += `
      <div class="producto">

        <img src="${producto.imagen}" alt="${producto.nombre}">

        <div class="info">

          <h3>${producto.nombre}</h3>

          <div class="precio">
            $${producto.precio.toLocaleString("es-AR")}
          </div>

          <button
            class="comprar"
            onclick="agregarAlCarrito(${producto.id})">
            AGREGAR AL CARRITO
          </button>

        </div>

      </div>
    `;
  });
}


// =====================================
// AGREGAR AL CARRITO
// =====================================

function agregarAlCarrito(id) {

  const producto = productos.find(p => p.id === id);

  carrito.push(producto);

  actualizarCarrito();

  abrirCarrito();
}


// =====================================
// ACTUALIZAR CARRITO
// =====================================

function actualizarCarrito() {

  const items = document.getElementById("itemsCarrito");
  const contador = document.getElementById("contador");
  const totalElemento = document.getElementById("total");

  items.innerHTML = "";

  let total = 0;

  carrito.forEach((producto, index) => {

    total += producto.precio;

    items.innerHTML += `
      <div class="item">

        <div>
          <strong>${producto.nombre}</strong>
          <br>
          $${producto.precio.toLocaleString("es-AR")}
        </div>

        <button
          class="eliminar"
          onclick="eliminarDelCarrito(${index})">
          ELIMINAR
        </button>

      </div>
    `;
  });

  contador.textContent = carrito.length;

  totalElemento.textContent =
    total.toLocaleString("es-AR");
}


// =====================================
// ELIMINAR PRODUCTO
// =====================================

function eliminarDelCarrito(index) {

  carrito.splice(index, 1);

  actualizarCarrito();
}


// =====================================
// ABRIR CARRITO
// =====================================

function abrirCarrito() {

  document.getElementById("carrito").style.display = "block";
}


// =====================================
// CERRAR CARRITO
// =====================================

function cerrarCarrito() {

  document.getElementById("carrito").style.display = "none";
}


// =====================================
// PEDIDO POR WHATSAPP
// =====================================

function pedirWhatsApp() {

  if (carrito.length === 0) {

    alert("Tu carrito está vacío.");

    return;
  }

  let mensaje = "Hola TS Club 👋 Quiero hacer el siguiente pedido:%0A%0A";

  let total = 0;

  carrito.forEach(producto => {

    mensaje +=
      "• " +
      producto.nombre +
      " - $" +
      producto.precio.toLocaleString("es-AR") +
      "%0A";

    total += producto.precio;
  });

  mensaje +=
    "%0ATotal: $" +
    total.toLocaleString("es-AR");

  mensaje +=
    "%0A%0A¿Me pasan disponibilidad y medios de pago?";

  const url =
    "https://wa.me/" +
    NUMERO_WHATSAPP +
    "?text=" +
    mensaje;

  window.open(url, "_blank");
}


// =====================================
// INICIAR PÁGINA
// =====================================

mostrarProductos();

actualizarCarrito();
