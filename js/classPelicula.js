 export default class Pelicula{
    //atrivutos privados
    #codigo;
    #titulo;
    #descripcion;
    #imagen;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
    #estado;
    constructor(titulo,descripcion,imagen,genero,anio,duracion,pais,reparto){
        this.#codigo= uuidv4();
        this.#titulo=titulo;
        this.#descripcion=descripcion;
        this.#imagen=imagen;
        this.#genero=genero;
        this.#anio=anio;
        this.#duracion=duracion;
        this.#pais=pais;
        this.#reparto=reparto;
        this.#estado=false;
    }

// getter y setter para el atributo codigo
get codigo(){
    return this.#codigo;
  }
set codigo(codigo) {
    this.#codigo = codigo;
  }

  // getter y setter para el atributo titulo
  get titulo() {
    return this.#titulo;
  }
  set titulo(titulo) {
    this.#titulo = titulo;
  }

  // getter y setter para el atributo descripcion
  get descripcion() {
    return this.#descripcion;
  }
  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  // getter y setter para el atributo imagen
  get imagen() {
    return this.#imagen;
  }
  set imagen(imagen) {
    this.#imagen = imagen;
  }

  // getter y setter para el atributo genero
  get genero() {
    return this.#genero;
  }
  set genero(genero) {
    this.#genero = genero;
  }

  // getter y setter para el atributo anio
  get anio() {
    return this.#anio;
  }
  set anio(anio) {
    this.#anio = anio;
  }

  // getter y setter para el atributo duracion
  get duracion() {
    return this.#duracion;
  }
  set duracion(duracion) {
    this.#duracion = duracion;
  }

  // getter y setter para el atributo pais
  get pais() {
    return this.#pais;
  }
  set pais(pais) {
    this.#pais = pais;
  }

  // getter y setter para el atributo reparto
  get reparto() {
    return this.#reparto;
  }
  set reparto(reparto) {
    this.#reparto = reparto;
  }

  // getter y setter para el atributo estado
  getEstado() {
    return this.#estado;
  }
  setEstado(estado) {
    this.#estado = estado;
  }
  // stringify acede a esrte modo en la clse privadas 
  toJSON(){
    return {
      codigo: this.#codigo,
        titulo: this.#titulo,
        descripcion: this.#descripcion,
        imagen: this.#imagen,
        genero: this.#genero,
        anio: this.#anio,
        duracion: this.#duracion,
        pais: this.#pais,
        reparto: this.#reparto,
        
    }
  }
}
