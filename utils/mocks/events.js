const EventsMock = [
{
  "_id":{"$oid":"5f48362358f7f74114eeadcb"},
  "images":["https://www.aviatur.com/source/contenidos/corferias-bogota-feria-del-libro.jpg",
  "https://www.aviatur.com/source/contenidos/feria-del-libro-programacion-variada.jpg"],
  "name":"Feria internacional del libro",
  "description":"Durante dos semanas, entre abril y mayo, los libros se convierten en el centro de atención de miles de ávidos lectores que asisten cada año, a la Feria Internacional del Libro que se realiza en Corferias, el recinto más grande de ferias que hay en Colombia.","location":"Bogotá, Cundinamarca",
  "price":{"$numberInt":"25000"},
  "startDate":{"$date":{"$numberLong":"1587445200000"}},
  "endDate":{"$date":{"$numberLong":"1588654800000"}},
  "ocupation":{"$numberInt":"100"},
  "__v":{"$numberInt":"0"}
},

{
  "_id":{"$oid":"5f481a1558f7f74114eeadca"},
  "images":["https://cdn.colombia.com/images/turismo/ferias-y-fiestas/carnaval-negros-blancos/historiacnb.jpg",
  "https://blog.redbus.co/wp-content/uploads/2018/12/negros-blancos-5-1280x720.jpg"],
  "name":"Carnaval de Negros y Blancos","description":"Esta fiesta de juego, fantasía y magia, poco a poco fue tomando forma y ahora todo comienza con la ofrenda y consagración a la Virgen de las Mercedes y el carnavalito liderado en su totalidad por niños de la región, quienes salen en desfile a mostrar sus hazañas creativas y lúdicas.",
  "location":"Pasto, Nariño",
  "price":{"$numberInt":"100000"},
  "startDate":{"$date":{"$numberLong":"1577941200000"}},
  "endDate":{"$date":{"$numberLong":"1578286800000"}},
  "ocupation":{"$numberInt":"30"},
  "__v":{"$numberInt":"0"}
},

{
  "_id":{"$oid":"5f3ad3ff3fc3d92d3cb9c08e"},
  "images":["https://www.colombia.co/wp-content/uploads/2020/06/Festival-Virtual-214x300.jpeg"],
  "name":"Festival de la Ruana y el Pañolón, la Almojábana y el Amasijo",
  "description":"Festival de la Ruana y el Pañolón, la Almojábana y el Amasijo, en homenaje a la tradición Paipana del 12 al 15 de junio de manera virtual debido a la Emergencia Económica, Social y Ecológica que vive nuestro país.",
  "location":"Paipa, Boyaca",
  "price":{"$numberInt":"80000"},
  "startDate":{"$date":{"$numberLong":"1591920000000"}},
  "endDate":{"$date":{"$numberLong":"1592179200000"}},
  "ocupation":{"$numberInt":"30"},
  "__v":{"$numberInt":"0"}
}

];

function filteredEventsMock(tag) {
  return eventsMock.filter(event => event.tags.includes(tag));
}

class EventsServiceMock {
  async getEvents() {
    return Promise.resolve(eventsMock)
  }

  async createEvent() {
    return Promise.resolve(eventsMock[0]);
  }
}

module.exports = {
    EventsMock,
    filteredEventsMock,
    EventsServiceMock 
}