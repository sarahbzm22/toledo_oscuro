// Inicializa AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500,
  });
});

// Abrimos la ventana modal del form
function openFormModal() {
  console.log("Abriendo modal del form");

  // Cogemos los valores del form
  const name = $("#name").val();
  const surname = $("#surname").val();
  const email = $("#email").val();
  const phone = $("#phone-number").val();

  // Los mostramos en el modal
  $("#n").text(name);
  $("#sn").text(surname);
  $("#eml").text(email);
  // $("#phn").text(phone);

  // Mostramos el modal
  $("#modal-form")
    .css("display", "flex")
    .hide()
    .fadeIn(300);

  // Para evitar que el formulario recargue la página
  return false;
}

// Cerramos la ventana modal
function closeFormModal() {
  console.log("Cerrando modal del formulario");

  $("#modal-form").fadeOut(250);
}


// Gráfico de barras

function cargaGraficoBarras() {
    // Datos para generar el gráfico, hay que definir las etiquetas y los datasets. Hay que definir un color para cada dataset.

    var datos = {
        labels: ["DAMA OJOS SIN BRILLO", "MEZQUITA CRISTO LUZ", "ABADÍA", "CALLE CADENAS", "CATEDRAL TOLEDO", "CÁRCEL VICARIO", "POZO AMARGO", "ALCÁZAR", "ARCO SANGRE", "CASTILLO SAN SERVANDO"],
        datasets: [{
            label: "Popularidad de las leyendas (0-10)",
            backgroundColor: "#f9b233",
            data: [9.0, 8.0, 1.0, 5.0, 7.0, 4.0, 10.0, 6.0, 3.0, 2.0]
        }],
    };

    // Configuración del gráfico. Debe incluir imprescindiblemente el tipo de gráfico y los datos que hemos definido previamente. Se pueden añadir opciones para personalizar el gráfico.

    var config = {
        type: "bar",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: "#ffffff",
                    }
                  }
                }
            },
            scales: {
                x: {
                    tickets: {
                      color: "#ffffff"
                    },
                    title: {
                    border: {
                        color: "#101010",
                        width: 2
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                      color: "#ffffff"
                    },
                    min: 0,
                    max: 10,
                    title: {
                        display: true,
                        text: "Popularidad",
                        color: "#ffffff"
                    },
                    border: {
                        color: "#101010",
                        width: 2
                    }
                }
            }
        }
    };

    // Para crear el gráfico, se busca el elemento canvas por su id y se le pasa la configuración en JSON que hemos definido.

    var grafico = $("#barras")[0].getContext("2d");
    new Chart(grafico, config);
}

$(document).ready(function () {
    cargaGraficoBarras();
});