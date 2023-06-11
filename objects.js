const mcDonalds = {
    bigMac: 45.90,
    bigTasty: 39.99,
    mcFritasMedia: 9.90,
    city: 'Curitiba',
    unit: ['Shopping de Curitiba', 'Shopping Estação'],
    isDelicius: true,
    outroObjeto: {
         chave: 'valor',
     },
 };
 
 console.log(Object.keys(mcDonalds.outroObjeto))
 
 // console.log(mcDonalds);
 
 // console.log(mcDonalds['bigMac']);
 
 // const chave = 'bigMac';
 // console.log(mcDonalds[chave]);
 mcDonalds.xablau = 'Andre olhos de aguia';
 // console.log(mcDonalds);
 
 // Métodos para Objetos: Object.key, Object.values, Object.entries
 // console.log(Object.keys(mcDonalds).length);
 // console.log(Object.values(mcDonalds));
 // console.log(Object.entries(mcDonalds));