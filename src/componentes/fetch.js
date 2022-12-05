URL = `https://62ca4272d9ead251e8c5a07f.mockapi.io/babyBomData`


export const gFetch = (id) =>{

    if (productoId) {
        fetch(URL)
          .then(resp => resp.json())
          .then(data => setProductos(data.find(prod => prod.id === productoId)))
          .catch(err => console.log(err))
    
      } else {
        fetch(URL)
          .then(resp => resp.json())
          .then(data => setProductos(data))
          .catch(err => console.log(err))
      }
   
}

const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(URL);
    }, 1000);

    // rej(console.log('nada'));
    // console.log(respuesta);
  });
};