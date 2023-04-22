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
getCodigo(){
    return this.#codigo;
  }
  setCodigo(codigo) {
    this.#codigo = codigo;
  }

  // getter y setter para el atributo titulo
  getTitulo() {
    return this.#titulo;
  }
  setTitulo(titulo) {
    this.#titulo = titulo;
  }

  // getter y setter para el atributo descripcion
  getDescripcion() {
    return this.#descripcion;
  }
  setDescripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  // getter y setter para el atributo imagen
  getImagen() {
    return this.#imagen;
  }
  setImagen(imagen) {
    this.#imagen = imagen;
  }

  // getter y setter para el atributo genero
  getGenero() {
    return this.#genero;
  }
  setGenero(genero) {
    this.#genero = genero;
  }

  // getter y setter para el atributo anio
  getAnio() {
    return this.#anio;
  }
  setAnio(anio) {
    this.#anio = anio;
  }

  // getter y setter para el atributo duracion
  getDuracion() {
    return this.#duracion;
  }
  setDuracion(duracion) {
    this.#duracion = duracion;
  }

  // getter y setter para el atributo pais
  getPais() {
    return this.#pais;
  }
  setPais(pais) {
    this.#pais = pais;
  }

  // getter y setter para el atributo reparto
  getReparto() {
    return this.#reparto;
  }
  setReparto(reparto) {
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
