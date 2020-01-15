# Clean Architecture To Do App

- `application` contiene la lógica del negocio
- `console` es una aplicación de consola que usa la lógica definida en application y un repositorio simple
- `tape` es una aplicación de prueba que usa la lógica definida en application y un repositorio simple
- `express` es una aplicación express que usa la lógica definida en application y un repositorio que se conecta a mongo


## Referencias
- https://ivanguardado.com/posts/2018-06-08/arquitectura-codigo-nodejs.html
- https://ivanguardado.com/posts/2018-06-08/arquitectura-codigo-nodejs/parte-i-arquitectura-codigo.html
- https://ivanguardado.com/posts/2018-06-08/arquitectura-codigo-nodejs/parte-ii-aplicando-teoria.html
- https://ivanguardado.com/posts/2018-06-08/arquitectura-codigo-nodejs/parte-iii-tests-automaticos.html