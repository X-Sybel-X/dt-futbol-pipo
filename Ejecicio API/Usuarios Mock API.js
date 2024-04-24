fetch('https://66279b8eb625bf088c08fd8e.mockapi.io/api/reportes')
  .then(response => {
    if (!response.ok) {
      throw ('No se encontraron datos');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
