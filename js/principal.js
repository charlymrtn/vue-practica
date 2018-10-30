var app = new Vue({
  el : '#app',
  data: {
    lista: [],
    nombre: '',
    promedio: ''
  },
  methods: {
    agregarNota: function(){
      estadoA = false;
      if (this.promedio >= 70) {
        estadoA = true;
      }
      if (this.nombre != "" && this.promedio != "") {
        this.lista.push({nombre: this.nombre, promedio: this.promedio, estado: estadoA});
        this.nombre = "" ;
        this.promedio = "";
      }else {
        alert('ingrese nombre y promedio');
      }
    }
  }
})
