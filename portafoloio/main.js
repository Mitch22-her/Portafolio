let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0000FF;">Soy estudiante de la Licenciatura en Informática Administrativa y estoy en un curso de Desarrollo Web FronT-end.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
