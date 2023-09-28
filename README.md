# 100 days coding challenge

### Proyectos creados hasta hora en el reto

[Mi Portfolio](https://fmelero.dev/)

[Plantilla Spa](https://nuxt-spa-template.vercel.app/)

[Objetos Próximos a la Tierra](https://objetos-proximos-a-la-tierra.vercel.app/)

[Npm package Dir tree logger for node](https://www.npmjs.com/package/dir-tree-logger)

## Reto de programación, día 45/100.

Ayer no pude continuar con el reto. Debido a un imprevisto, tuve que pasarme todo el día viajando, pero estoy de vuelta con ganas de acabar el paquete.

Hace dos días dejamos el script más o menos funcional, pero no modular. Es hora de modificar el script para que se inicie cuando se llame a la función initialize. Mi intención es que cuando la llames incluyas el path que quieras rastrear, y un array con las carpetas que quieras omitir, en el caso que quieras omitir alguna.

Realizados los cambios pertinentes, ahora todo el script se ejecuta cuando se llama a intialize. 

Este fin de semana empecé a hacer varios cursos de TS. Me gustaría incorporar TypeScript de forma regular en mis proyectos, por lo que es la ocasión perfecta para aplicarlo. Mi idea inicial era que el paquete se pudiera utilizar tanto en EC6 como en commonjs, pero dándole varias vueltas he llegado a la conclusión que sería bastante inseguro hacerlo funcionar por parte del cliente sin tener que aumentar mucho la complejidad del script. ¿Quién querría dejar el arbol del proyecto expuesto al cliente? De momento, el paquete solo estará diseñado para commonjs.

Es hora de instalar un linter para ts, y configurar ts en el proyecto. Tras añadirle algunas reglas básicas en el tsconfig voy a generar la transpilación en un archivo index.js dentro de la carpeta dist. Por otro lado, moveré el index.js actual a la carpeta src, y le cambiaré la extensión a ts. Una vez hecho, paso a añadir el tipado que quiero sobre el script anterior.

Mi idea es que el paquete tenga un js pre-compilado, por lo que voy a añadir momentariamente un script que llame al compilador de ts. Una vez generado el archivo js, me dispongo a modificar el package.json para ajustarlo a lo que quiero. Mi intención es que cuando se llame al paquete, no se tenga que apuntar a una carpeta sino a la raiz del modulo que detectará donde está el index.js. Sino lo hiciera así, cuando requiriera el modulo en otra app deberia añadirle manualmente el path: 
```javascript
const tree = require('mimodulo/dist'); 
```

Como no es lo que quiero, ya he configurado el package.json en acorde. Ahora es momento de modificar el README y publicar el paquete en npm.

Para probar el paquete, voy a crear una pequeña aplicación de node con archivos vacíos para ver si los detecta correctamente.

Una vez instalado el paquete con npm i dir-tree-logger me dispongo a probar el paquete. Para ello utilizo la siguiente sintaxis:

```javascript
const tree = require('dir-tree-logger');

tree.initialize("./", ['node_modules']);

```

Como podéis ver, quiero que el arbol del proyecto se inicie en la raíz del proyecto para testearlo que he creado. Por otro lado, quiero que omita el node_modules. Si quisiera omitir alguna carpeta en concreto, solo tengo que añadirla en la array. 

Ejecuto el programa, et voilà:


![Snap 77 plantilla SPA](/imagenes-readme/captura77.JPG)

Podéis echarle un vistazo al paquete, así como a las instrucciones mediante el siguiente enlace:

https://www.npmjs.com/package/dir-tree-logger

Una vez hecho lo que me proponía, voy a continuar estudiando TS. 

Hasta aquí he llegado, mañana empezaré mi primera API usando TS que contendrá cientos de sudokus distintos para que cualquier desarrollador pueda genera un sistema para jugar al sudoku.

¡Hasta mañana!

## Reto de programación, día 44/100.

Empezamos una semana más con muchas ganas,

Hoy voy a empezar a programar un paquete de NPM muy sencillito, que te permitirá generar el arbol del proyecto en el punto que desees, así como excluir las carpetas que no quieras mostrar en el arbol.

Para comenzar, primero he determinado el formato del output que quiero:
```
./ --> Carpeta de inicio.
index.js
src/
  |-- pages/
  |--   |-- assets/
  |--   |--   |-- myfile.txt
  |--   |-- page.js
```
Cada vez que haya una carpeta quiero que lo indique con una /, y cuando haya un fichero quiero que muestre su extensión. Antes de tocar una linea de código, voy a crear la misma estructura de carpetas que aquí indico para realizar las pruebas. 

De momento, lo unico que busco es la funcionalidad básica del script, una vez devuelva exactamente lo que busco, crearé la modularidad y es posible que lo convierta a TS.

Empezamos con un simple main.js que leerá mediante fs la estructura de la carpeta que le indique. Para ejecturalo en node no habrá problema, pero tendré que realizar algunos cambios para cuando quiera ejecutarlo en un entorno web. Fs tiene una función nativa que permite crear un array con todos las carpetas y archivos de la ruta que indiques. 

Después de varias pruebas, he conseguido que el script tenga el comportamiento que deseo. El output del script, se ve exactamente así:

```
./
main.js
package.json
README.md
src/
  |-- components/
  |-- pages/
  |--   |-- assets/
  |--   |--   |-- myfile.txt
  |--   |-- page.js
  |--   |-- scondpage.js
```

He creado una array donde se podrán incorporar todas las carpetas que no desees que el script muestre en el output, de forma que la función recursiva no tendrá que iterar por cada uno de los archivos, solo iterara cuando el archivo no esté incluido en la array de archivos excluidos.

Teniendo en cuenta que he conseguido el resultado esperado antes de lo previsto, voy a dedicar el resto de tarde a ampliar mi conocimiento sobre el resto de pasos que debo seguir para que el paquete sea seguro, y lo pueda publicar.

¡Seguimos empujando!

## Reto de programación, día 43/100.

Ya acaba la semana. Hoy es Viernes, y a pesar que tengo menos tiempo que normalmente voy a acabar de desplegar la aplicación en vercel.

Tal y como dejamos configurado ayer el servidor, funcionaba perfectamente si lo ejecutabamos desde local, accediendo a una base de datos PG local. Pero como es lógico, si desplegaramos la misma API en un vercel por ejemplo, ahora mismo no funcionaría. Voy a ir paso a paso explicando como conseguiré subir la API en Vercel con el nuevo feature de base de dats de pg que viene incorporado. Recuerdo que esta API está hecha con node.js usando librerias como express y sequelize. 

Antes que nada, lo primero que haré es desplegar la API tal y como está. Si, habéis leido bien, la desplegaré para que no funcione pero tengamos el entorno ya preparado para solucionarlo. Para ello, creo un nuevo proyecto en vercel seleccionado el repositorio donde tengo la API. Ahora mismo, es imposible que funcione, ya no porque esté apuntando a una base de datos inexstente, sino para que haga el build correcto debemos añadir un archivo vercel.json en el proyecto. Voy a utilizar el mismo archivo que había previamente configurado para otras APIS, que queda de la siguiente forma:

<--- vercel.json --->
``` JSON
{
    "version": 2,
    "name": "socketing",
    "builds": [
      {
        "src": "src/app.js", 
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "src/app.js" 
      },
      {
        "src": "/(.*)",
        "dest": "src/app.js" 
      }
    ]
  }
```
Una vez configurado el vercel.json, voy a crear la base de datos. Esta vez utilizaré el propio servicio de serverless storage que te ofrece vercel, ya que puedes crear una bdd PostgreSql gratuitamente, y conectarla al proyecto con facilidad.

Para evitar confusiones, desde el pgAdmin creo un script que hará una tabla exactamente igual que la que tengo en local, así nos aseguramos que funcione. Después de ejecutar el script en la consola interactiva de Vercel, ya tengo la tabla Appointments creada, con las columnas que deseo.

Ahora tocará realizar la conexión desde Sequelize, ya que estoy utilizando este ORM para ello. Antiguamente, tenía un sequelize.js donde recogía los datos desde un config que llamaba a las variables de entorno del .env. Pero para este caso, no me va a hacer falta ya que Vercel te genera una variable de entorno automatica con la URL donde contiene toda la información de la conexión. Así que en lugar de utilizar el .config, voy a llamar a la process.env.POSTGRES_URL que es la variable de entorno creada por VERCEL para coenctar con el pg. 

En la documentación, te recomiendan llamar a pg directamente, así que el .sequelize.js quedaría de una forma como esta:

```JS
const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');
require('dotenv').config();

const pg = require('pg');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialectModule: pg,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, 
      },
    },
  });

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
```

Vercel me obliga utilizar SSL por lo que he tenido que configurarlo como veis arriba. Hay que tener en cuenta que cuando se despliegue la API detectara automaticamente el SSL, pero de todas formas hay que seleccionarlo como arriba descrito para que funcione correctamente.

Ahora es hora de probar la API, para ello voy a guardar los cambios y realizar un push al main del repo que se desplegará. Tras unos segundos, puedo comprobar que efectivamente, la API se ha desplegado sin problema, y después de probar los endpoints con POSTMAN puedo confirmar que todo funciona como debería. 

Es el momento de conectarlo con el front end, y desplegar de nuevo la aplicación frontend. Para ello simplemente he modificado las urls para que incluyan el nombre de dominio https://spa-template-backend-express.vercel.app/ 

Et voilà, tras probar todas las funcionalidades, puedo confirmar que el proyecto en su conjunto ha sido desplegado satisfactoriamente. 

Podéis acceder a él, y si queréis, podéis probar el sistema desde el enlace al inicio de este documento.

Con el objetivo cumplido por hoy, dedicaré el resto de la tarde a investigar un poco más sobre los paquetes npm, ya que precisamente, ese será el siguiente proyecto, un paquete npm para poder generar una string que contenga el arbol de archivos del proyecto. Una vez acabado y publicado, el siguiente proyecto sería una API de Sudokus.

Buen fin de semana, hasta el Lunes.

Keep coding till your fingers bleed!

## Reto de programación, día 42/100.

Y llego el día de ponernos con una parte que me encanta, el back-end. 

Hoy no os escribo antes de empezar, sino después de haber realizado todo el trabajo. Ya es casi media noche, y spoiler, acabo de finalizar el back-end y la integración con el front de manera local, a falta de unificar las urls en variables de entorno para cuando haga el deploy.

Por la mañana después del café empecé a trabajar con la API. Hace unos días creé un CRUD con express, postgreSQL y sequelize, así qué lo utilice de base para los appointments. Antes de empezar a escribir una linea, he planeado cual es el ciclo que el usuario debe seguir hasta crear una cita. Llegué a la conclusión que con cuantro end-points podría sacar una version minima del producto. 

![Snap 66 plantilla SPA](/imagenes-readme/captura66.JPG)

Como es una plantilla, no he creido conveniente conectar un calendario como google calendar para poder ver todas las citas, aunque si fuera un cliente real seria una opción muy adecuada para gestionar y controlar las citas. De la misma manera que habría que securizar algún end point para poder eliminar citas de forma externa. 

Primero realicé la petición get, asociada con la raíz en la ruta. Mi intención es que devolviera los datos, pero debían ser identicos a los del mockup, ya que no quería que desde fuera se pudiera acceder a datos sensibles. Creé una regla para que mostrara solo los validados, y devolviera solo los datos que no eran sensibles. Al principio tenía planteado encriptar el id de cada cita, pero como tampoco permito acceder a ningún dato por id, lo dejé como entero.

A continuación venía el POST. La particularidad de este caso es que debía poner el campo validated siempre en false al realizar la llamada post. De esta forma, nunca se podrá validar el usuario de primeras. Aunque limite esto en el frontend, alguien podría hacer una llamada post y poner validated: true. En otro contexto, habría que limitar el e-mail registrado para que pudiera haber x cantidad de citas por e-mail, pero en este caso dada la naturaleza del proyecto voy a estar recibiendo emails solo yo, por lo que solo me perjudicaría para el desarrollo :D 

Vamos con el delete. Este caso es sencillo, busca si hay algun usuario con el token indicado, si lo hay lo elimina, sino devuelve un deleted false.

Finalmente el ultimo end point lo utilizo para hacer la validación de la cita en el caso que cumpla la condición, y modifica el validated a true.

Una vez testeada, la API está lista para conectarla al front-end. Realicé varios cambios en el front-end para adecuarla. Por un lado, quiero que cuando el usuario se registre le envíe un e-mail con el enlace de confirmación y cancelación de la cita. Para cada servicio, he creado una página que recoge params para hacer las peticiones desde el front-end. Y en función de la respuesta mostrar al usuario un resultado. Tras implementar toda la lógica en cada una de las páginas, es hora de recoger los datos de la API para bloquear las citas. Para ello simplemente he implementado una funcion asyncrona que convierte el json a una objeto js tal y como estaba en el mock. 

Después de realizar varias pruebas, puedo concluir que la feature está funcionando tal y como esperaba de forma local.

Voy a hacer screenshots del proceso:

Digamos que un tal Franky Melero quiere reservar una cita para el miercoles a las 08 con un servicio que se llama stream bath que dura una hora.


![Snap 66 plantilla SPA](/imagenes-readme/captura67.JPG)

Voy a forzar datos invalidos para ver cual es el resultado al darle submit. Cambiando Franky Melero por franky Melero 2 por ejemplo.

![Snap 66 plantilla SPA](/imagenes-readme/captura68.JPG)

El resultado es que la validación funciona correctamente. Si probamos la fecha o un e-mail incorrecto, el propio validador de html nos saltará. 

Ahora vamos a registrar una nueva cita con los datos de la primera captura, este es el resultado:

![Snap 66 plantilla SPA](/imagenes-readme/captura69.JPG)

Como no ha dado ningún error, muestra el mensaje de confirmación y acto seguido comprobamos nuestra bandeja de entrada. Hemos recibido el siguiente e-mail:

![Snap 70 plantilla SPA](/imagenes-readme/captura70.JPG)

Cuando clico en el enlace de confirmación:

![Snap 70 plantilla SPA](/imagenes-readme/captura71.JPG)

Si clicara por segunda vez o recargara la página:

![Snap 70 plantilla SPA](/imagenes-readme/captura72.JPG)

Ahora una vez está confirmada la cita, vamos a chequear si se ha reservado correctamente, por lo que la primera cita el día 27/09 que deberíamos poder seleccionar es a las 09, ya que la cita de 08 a 09 la acabamos de reservar.

![Snap 70 plantilla SPA](/imagenes-readme/captura73.JPG)

Efectivamente, funciona sin problema ya que ha dejado de aparecer la cita disponible.

Ahora voy a cancelar la cita desde el enlace.

![Snap 70 plantilla SPA](/imagenes-readme/captura74.JPG)

Si recargo la página de la cancelación, o vuelvo a clicar en el enlace desde el email:

![Snap 70 plantilla SPA](/imagenes-readme/captura75.JPG)

Como podéis ver, si ya ha borrado la cita con anterioridad, o la cita no existe, nos devolverá not found.

Ahora volvemos a la página de reservas. Como podéis ver, ya vuelve a estar la cita disponible puesto que la hemos cancelado:

![Snap 70 plantilla SPA](/imagenes-readme/captura76.JPG)

Para acabar, he limitado el submit de las citas de tal manera que una vez se ha realizado una cita, por mucho que se clique no volverá a enviar la petición.

Hasta aquí he llegado por hoy, tan solo quedará desplegar la API y modificar rutas del front-end.

¡Seguimos para bingo!

## Reto de programación, día 41/100.

Como siempre, un buen café es la mejor forma de empezar el día. Eso sí, hoy tampoco había leche de vaca, así que me conformaré con un café con leche de arroz.

Hoy tengo intención de dejar casi acabado el front-end, de manera que solo quede el fetching de datos reales, y no con un mockup.

Ayer avanzamos bastante con la funcionalidad de las reservas. Ahora es necesario que en función del tiempo que haya hasta la siguiente reserva, se pueda seleccionar un servicio u otro.

Para ello voy a crear una función que recogerá dos parametros, y devuelva un numero multiple de 15. En concreto es 15, porque lo he seteado previamente en el tiempo minimo entre citas. Por lo que en función de lo seleccionado, se hará el calculo de una forma u otra. De hecho, toda la funcionalidad la he creado para que tenga en cuenta estos settings. Si se quiere cambiar el rango de horas, o el rango del tiempo minimo entre citas no habrá problema en el futuro.

Una vez hecha la funcion, y tras algunos cambios ahora puedo filtrar los servicios en función del tiempo que haya hasta la próxima cita. Ahora toca limitar las horas, es decir, si a las 19 cierra, quiero que la ultima cita sea a las 18.45 y que me solo me permita escoger la cita de 15 minutos. Si la ultima cita es alas 18 porque ya están reservadas las demás, quiero que el comportamiento sea el mismo.

Ahora ya funciona el sistema de calendario. Las horas las muestra en función si no están reservadas, y el tiempo de servicio a escoger lo calcula dependiendo del tiempo disponible. También limita el comportamiento del día de hoy para que empieze a partir de 1 hora desde el momento actual. Después de varias pruebas, el comportamiento del front-end ya es exactamente el que quiero, por lo que lo dejamos pendiente de añadir los datos de las citas desde la API. 

Si la hora de cierre es a las 19:

![Snap 62 plantilla SPA](/imagenes-readme/captura63.JPG)

![Snap 62 plantilla SPA](/imagenes-readme/captura64.JPG) 

Antes de enviar los datos, queremos validarlos más haya de la primera validación que hace el tipado de los inputs en html. Así que vamos con ello. Con una serie de expresiones regulares, ya aseguro que los datos enviados sean los correctos. 

Mi intención es realizar una cita, y que la misma no esté confirmada hasta que el usuario haya hecho click a un enlace que le llegará al email. Como ya he utilizado emailjs en la app, voy a continuar por el mismo camino y crear unas plantillas.

Lo dejamos por hoy. Mañana ajustaré el backend, y conectaré todos los servicios para que la funcionalidad esté acabada en local.

Keep coding till your fingers bleed :D
## Reto de programación, día 40/100.

Como se nota que va llegando el fresquito. Ya hacía falta.

Antes que nada me gustaría compartir con vosotros la url del proyecto del buscador de objetos próximos a la tierra. Quién haya seguido este diario, podrá ver que se ha desarrollado integramente en el reto, por aquí la tenéis:

https://objetos-proximos-a-la-tierra.vercel.app/

Hoy tengo intención de empezar el sistema de reservas de la página del SPA. El sistema que estaba creado de antemano, no tiene en cuenta muchas cosas que me gustaría solucionar con mi sistema propio. Ya hice el back-end para el sistema, aunque habrá que realizar algunos cambios puesto que tengo intención de aumentar la complejidad de la funcionalidad.

Mi idea es que desde el front-end filtre las horas y los días, y que desde el back-end tan solo gestione las citas confirmadas y por confirmar. De momento haré un mockup rápido con un json para dejar perfilado el front-end, y luego haré las adecuaciones necesarias para ajustar el back-end. 

Empezamos modificando todos los datos de serie, he añadido un select para las horas y modificado el input a type. Una vez configurado el prevent default y un ref con los datos del formulario, así queda la página:

![Snap 62 plantilla SPA](/imagenes-readme/captura62.JPG)

Ahora he creado otro objeto que contendrá varios datos que se modificarán en función del negocio. En concreto, he añadido la hora de apertura, la hora de cierre, la hora que durará el servicio máximo, y en cuanto tiempo se dividirán las citas. Después he modificado el objeto de los servicios para añadirle un tiempo standard para cada servicio y una id.

Ahora voy a limitar la seleccion de dias a 3 meses desde la fecha. Por supuesto también no permito la selección de días anteriores. Ahora para manejar las fechas, voy a crear dos funciones. Una que convierta la fecha a minutos desde las 00.00. Y el otro que convierta los minutos a una fecha de dia/mes. 

Continuamos creando una función que crea todos los rangos de horas. Ahora todas las horas que aparecen, se dividen en el rango seleccionado y las horas van desde la hora inicial seleccionada hasta la última hora seleccionada. 

A continuación me dispongo a crear un objeto json que imite la respuesta de la API con los datos de la reserva. He creado un bucle que itera todas las horas y añade en una nueva array solo las horas que no están reservadas.

Ahora ya puedo dejar de ver las citas que están seleccionadas, pero no están enlazadas con el día.

Una vez enlazadas, en función del día guardado en la cita, ahora desaparecen las horas reservadas en cada día en concreto. 

Antes de dejarlo por hoy, limitaré las citas seleccionadas para el dia de hoy. De forma que las horas empiecen al menos 1 hora después de la hora actual. Para que no puedas reservar algo de aquí 10 minutos, sino que minimo debe reservarse con 1 hora de antelación.

Una vez hecho esto, lo dejamos por hoy. Mañana continuaremos limitando los servicios en función del tiempo disponible.

Coding is life.

## Reto de programación, día 39/100.

Tras un fin de semana de descanso, continuamos con las pilas cargadas.

Hoy tocará dejar listo el responsive de todo lo que quedaba pendiente. El otro día modifiqué el contendor de datos de la vista de un asteroide. Ahora carga los divs en función del tamaño de la pantalla. He editado varias partes, porque creo conveniente dejar un pequeño scroll horizontal para navegar entre el contenido de una forma más limpia. 

He de considerar que todo el contenido debe caber en una sola página debido a que el fondo es la animación threejs y tengo menos margen para ajustar su tamaño. 

Una vez arreglada la parte de los datos, me toca empezar a modificar el tamaño de la tabla. En un inicio, tenía pensado hacer lo mismo que con los datos, es decir, ajustar el div para que haga scroll, pero en este caso lo veo demasiado poco intuitivo ya que el scroll funcionaría para todas las direcciones. He probado una solución alternativa, donde no indico un tamaño minimo de las celdas, y tras ajustar el font-size ha quedado bien encajado todo en pantalla. He dejado un scroll vertical para poder navegar entre los posibles impactos, pero ahora, sin tener que hacer también scroll horizontal.

Una vez listo, voy a empezar a realizar varios retoques en ambas páginas para afilar mejor el diseño. He hecho pequeñas variaciones que mejoran la calidad del producto.

A continuación podréis ver como ha quedado la página una vez el responsive ya ha sido aplicado:

![Snap 61 plantilla SPA](/imagenes-readme/captura61.JPG)

Todavía tengo que hacer más pruebas para corregir posibles errores que puedan ocurrir, así que me lo dejo apuntado para poder meterle mano en el futuro. Hasta hora, tengo 3 tareas pendientes de las páginas que he ido haciendo. A partir de mañana, me dedicaré a realizar estas correcciones antes de empezar un nuevo proyecto.

Una vez tenga estos ajustes, mi intención es continuar creando una API de sudokus para que cualquier desarrollador pueda crear un sistema para jugar al sudoku con los datos de mi futura API. Por otro lado, tengo otro proyecto en mente que puede estar muy chulo, del cual ya tengo las bases creadas de cuando estuve haciendo prácticas en Blue Goat Labs. Este nuevo proyecto, implicará Nodejs, React, algún plugin para gestionar excels y la API de chat GPT. Me gustaría crear una página donde después de subirle un excel de palabras claves, mediante Node genere una plantilla HTML optimizada para el SEO con contenido escrito por la IA. 

Pero vamos paso por paso, de momento mañana vamos con los detalles pendientes de las páginas que he ido haciendo en el reto.

¡¡Seguimos!!

## Reto de programación, día 38/100.

Otro viernes más, otra semana a punto de acabar.

Hoy tengo intención de avanzar con el responsive de la web de los objetos próximos a la tierra.

Empezaremos ajustando la página principal. Quiero evitar todo lo posible añadir un acordeón de media queries, por lo que solo utilizaré un breakdown point y el resto lo ajustaré con tamaños relativos. Creo que la página quedará mejor si cuando se muestra la versión de tablet o movil, las imagenes de los asteroides desaparecen para poder ajustar el contenido al centro, sin tener que poner un tamaño de letra que dificulte la lectura para que quepa todo todo en pantalla. Así que por ello empezamos. Por otro lado, vamos a ajustar el tamaño máximo a 100vw y modificar el radius para que se el borde exterior sea cuadrado. 

Después de varios ajustes, he desplegado la aplicación web para testear las vistas en el teléfono, y así ha quedado el resultado:

![Snap 60 plantilla SPA](/imagenes-readme/captura60.JPG)

![Snap 59 plantilla SPA](/imagenes-readme/captura59.JPG)

Ahora continuo con la página de detalles de cada asteroide. Aquí voy a tener que realizar varios cambios. Voy a sustituir el grid por una flexbox teniendo en cuenta como estaba montado el componente previamente. 

Para la versión de móvil, quiero ajustar la caja para que se pueda desplazar por ella manteniendo las proporciones. 

Una vez acabada la mitad de la página, debo dejarlo aquí por hoy. En una hora tengo una reunión para una nueva aplicación, por lo que quiero dejar el resto del día para avanzar con el planteamiento, y presupuesto de la misma.

El lunes más, y mejor.

Keep coding!!


## Reto de programación, día 37/100.

Otro día más de reto, hoy tengo previsión continuar con la página de los asteroides. Para empezar implementaré la lógica que falta y dejaré un primer diseño aplicado. 

Primero me conecto a la API mediante el proxy que hice ayer, y traigo los datos a la página mediante una función asíncrona. La respuesta de la llamada a mi API, me devuelve un array de array de objetos. En este caso, me interesa seleccionar dos categorías, así que creo dos objetos para asignarle el valor una vez recibamos los datos.

Después de construir los objetos y pasarles la data, es hora de crear un grid para almacenar las caracteristicas. Por otro lado, he creado una tabla para mostrar la información de cada impacto. 

Una vez que todos los datos han sido seteados, me dispongo a refinar el diseño. 

Siempre es dificil estar contento con un diseño, pero para la primera versión de la página me doy minimamente por satisfecho. Aquí el resultado hasta ahora:

Landing page, primer estado: 

![Snap 55 plantilla SPA](/imagenes-readme/captura56.JPG)

Landing page, contenido:

![Snap 55 plantilla SPA](/imagenes-readme/captura57.JPG)

Vista del Objeto próximo a la tierra:
![Snap 55 plantilla SPA](/imagenes-readme/captura58.JPG)

Hasta aquí he llegado, mañana continuaré ajustando el diseño para todos los dispositivos.

See you tommorrow!

## Reto de programación, día 36/100.

Tras un par de tazas de café, empiezo este Miercoles lleno de energía para afrontar el reto de hoy.

Hoy crearé una página que reciba los params, y llame a la API de la NASA. Para hacer el mockup, he descargado directamente los datos de todos los asteroides en un data. Considerando que varios asteroides tenían el formato equivocado, he tenido que modificar los datos, por lo que tendré que crear varias reglas para cuando los datos provengan de la API directamente. 

Primero empiezo con los params. En nuxt, las rutas se autoconfiguran y puedes seleccionar un param de esta forma: [nobreparam].vue. En mi caso, quiero ordenar por descripción, así que he llamado a mi archivo [des].vue. A partir de chequear si funciona o no, he descubierto varios errores que tendré que solventar antes de continuar. Por un lado la animación solo se carga en el index, y está integrada en el código, por lo que voy a separar los componentes para que pueda llamarlo desde otra pagina. Separados en componentes, he podido hacer que también aparezca la animación en la página de params. Ahora me gustaría hacer un botón de volver atrás para poder volver a la pagina inicial. El problema es que he configurado un botón para que quede más elegante a la hora de entrar en la pp, que despliega el contenido. Cuando estoy volviendo desde una pagina de params, no me interesa que el estado de index sea el inicial. De hecho, me interesa que si ha realizado algun filtro, se reestablezca y me bypasee el botón para mostrar el contenido. 

En vue, puedes emitir un evento personalizado y capturarlo en la página principal para saber si vienes de una página en concreto, pero el funcionamiento en la versión de Nuxt varía, por lo que después de varias horas con este problema, he decidido tomar una solución alternativa. Esta vez voy a crear varias variables en el localstorage. Aplicando una lógica básica, desde la pp detecta si la redirección ha sido inmediata por lo que bypasea el botón. He añadido un watcher para guardar los cambios de estado en otra variable de localStorage que luego setea, o usa a los filtros por defecto.

De esta forma, una vez que el usuario clicke sobre el botón que vuelve al buscador, este detecta si es valido considerando el tiempo que ha pasado, y si lo es oculta el botón y muestra el contenido con los filtros que se habían realizado antes de entrar en la vista de un asteroide. En el caso que haya pasado tiempo suficiente, el comportamiento de la app es el normal, te muestra el botón que al clickarlo hace aparecer el contenido con los filtros por defecto.

Ahora me gustaría empezar con el data fetching de la vista del asteroide. Para ello voy a utilizar simples funciones asincronas para traerme la data. 

Tras realizar varias pruebas, puedo comprobar que la API no admite solicitudes CORS. Como no tengo control sobre la API, voy a intentar bypassear el bloqueo mediante una proxy api.

He subido en mi github la API proxy que he creado con express. Ahora si realizo solicitudes a esta api, podré recibir los datos que necesito:

![Snap 55 plantilla SPA](/imagenes-readme/captura55.JPG)

Por hoy, ya está bien. Mañana fetchearé los datos y haré un primer diseño de la página donde se recibirán.

Keep codding till your fingers bleed.

## Reto de programación, día 35/100.

Empiezo un dia nuevo con mucha ilusión. 

Hoy tocará continuar con la página de objetos cercanos a la tierra. Primero de todo, me dedicaré a crear los filtros necesarios. Para ello he creado varios refs que me servirán para controlar las selecciones. 

Después de un buen rato he conseguido filtrar y ordenar los datos como quería. He establecido valores por defecto para que no tenga que filtrarme todos los datos siempre, sino que los traiga en función de los filtros. 

![Snap 53 plantilla SPA](/imagenes-readme/captura53.JPG)

Adicionalmente, he añadido el filtro por nombre como podéis observar.

Antes de ponerme a crear la página que recibirá params para tener la descripción detallada de todos los impactos, necesito poder paginar los resultados. Para ello voy a controlar con un ref la cantidad de resultados que el usuario quiera mostrar, y ajustaré la lógica en acorde. La intención es que se pueda desplazar por las paginas con un boton de anterior y otro de siguiente. Por otro lado, quiero calcular el total de páginas que tendría y que se ajusten todos los resultados dinamicamente. De forma que si buscas algo que tenga 400 resultados, puedas paginarlo a 25, 50, 75 o 100 resultados por pagina, y que automaticamente el sistema cree las paginas y detecte el numero maximo. 

Después de varias horas, he podido ajustar todo lo dicho anteriormente:

![Snap 53 plantilla SPA](/imagenes-readme/captura54.JPG)

Después de un buen rato arreglando varios fallos que surgían en el proceso, lo dejo por hoy, con la aplicación filtrando y paginando correctamente.

¡Mañana más!
## Reto de programación, día 34/100.

Este fin de semana ha sido tranquilo con la mujer en casa. Aunque hay una noticia que despertó mi curiosidad, y me ha movido a empezar una idea nueva.

Una noticia de un medio bastante sensacionalista, describía como un asteroide podría colisionar con la tierra el 22 de septiembre de este año. Como no me gusta ser alarmista, y sobre todo, creerme cualquier cosa que veo por internet, fui directamente a la página de la NASA para ver más información. Allí validé que no tan solo no era cierta la noticia, ya que la probabilidad de impacto de el objeto es casi nula, sino que se puede acceder a los datos del Sentry de la NASA mediante su API. 

Después de perderme durante un buen rato en la documentación, he decidio hacer una pequeña página web donde puedas consultar esos datos de forma algo más visual. Estimo que esta página la podré acabar relativamente rápido, en unos 2-3 días. Una vez la acabe dedicaré el resto de la semana para poder acabar la plantilla. 

Para el diseño de la página, he pensado utilizar Three.js para simular una lluvia de asteroides. Es la primera vez que voy a utilizar la librería, por lo que me basaré en varios ejemplos y lo personalizaré a mi gusto. No he podido encontrar ningun ejemplo en el fw que estoy utilizando, pero me basaré en el script realizado en js vanilla. Después de una horita, he podido configurar correctamente la librería en Nuxt y he creado una primera versión de la animación. Como el comportamiento no era del todo el esperado, he variado ciertos ajustes para que quedara como quería. Por último he añadido una imagen de asteroide para sustituir los puntos que habían creados inicialmente, de esta forma el efecto es algo más realista. 

![Snap 51 plantilla SPA](/imagenes-readme/captura51.JPG)

Continúo agregandole algo de texto, y voy a crear un componente asteroide y donde le cargaré los datos recogidos por el fetch a la API de la NASA. 

Después de unas horas, he cargado los datos y he implementado varios filtros. Por otro lado, estoy cargando una imagen en función de la dimensión del asteroide. 

El resultado de momento es este:

![Snap 52 plantilla SPA](/imagenes-readme/captura52.JPG)

Mañana continuaré ajustando los filtros y haré una página para describir más datos de cada asteroide y las posibles colisiones. Por otro lado, me gustaría hacer un sistema automático de texto que en función de varias condiciones se cargue una descripción u otra.

¡Por hoy es suficiente, mañana más!

## Reto de programación, día 33/100.

Me gustaría acabar la semana con una reflexión. Desde que volví al paro, de momento no he conseguido más que una entrevista teléfonica fallida. Hoy en día es complicado acceder al mercado laboral si tienes una situación parecida a la mía, pero si crees en algo firmemente, no puedes dejar que eso te pare, todo lo contrario. A estas alturas del camino, estoy más motivado que nunca, porque veo todo lo que he avanzado, y soy más que consciente de todo lo que podría aportar a cualquier empresa que me diera la oportunidad. Esta situación no va a hacer que frene, de hecho, está consiguiendo que me esfuerze el doble para llegar. Incluso si voy a contrareloj, para mí este camino no es una opción, es lo que quiero y no voy a parar de andar hasta estar en el sendero.

Fuera de reflexiones, hoy empezaré el curso de buenas prácticas de JS.  

Después de tres horitas de curso, puedo hacer una reflexión parecida al primer curso que hice, ya que la mayoría de conceptos ya los conocía. De todas formas, también he podido sacar cosas en positivo. 

El resto del día tengo qu dedicarlo a realizar unos ajustes relacionados a los backups y hacer una migración en la web de la AMCL. 

Continúamos para bingo!

## Reto de programación, día 32/100.

Estamos a mitades de semana, esta semana descansaré tanto sábado como domingo por compromisos, por lo que es el penultimo día habil.

Ayer estuve haciendo el curso de javascript esencial, voy a empezar a hacer los ejercicios que ofrecen de javascript básico. En lugar de hacerlos directamente, voy a utilizar JEST para crear unos tests que me permitirán asegurar que estoy haciendo lo que se me pide. Usaré la metodología TDD, es decir, primero crearé el test, y luego crearé el código necesario para que el test pase. De esta forma, si quisiera refactorizar el código tendría unos tests de soporte que asegurarían la funcionalidad del mismo. Para este tipo de ejercicios, quizás no es necesario, pero siempre es una buena práctica para coger más soltura escribiendo tests.

Antes de acabar el día, he conseguido realizar seis ejercicios. Los enlazaré a GitHub una vez los acabe todos. Mañana tengo intención de realizar algún otro curso de JS más avanzado, creo que empezaré con el de buenas prácticas. 

Wake up, and code, you lazy human.


## Reto de programación, día 31/100.

Otro día más, continuamos con el reto.

Hoy tengo pensado dedicar el día a formarme, debido a que he empezado la prueba del premium de linkedin, me gustaría hacer algún curso simplemente para fortalecer mis bases. He visto que hay algun itinerario marcado, así que de momento empezaré con el primer curso de todos.

Cuando hago cursos, me gusta transcribir todo lo que se explica para tener por un lado el material, y por otro para entenderlo mejor. Después de unas 6 horas, he podido completar el primer curso de JS esencial. La verdad es que tenía bastante claro casi todos los conceptos desde un principio, pero he aprendido un par de detalles que ya hace que merezca la pena haber hecho el esfuerzo.

A partir de aquí, he visto que ofrecen unos ejercicios básicos para practicar. Para que todo esto tengo sentido, me gustaría realizarlos poco a poco.

Mañana empezamos con los ejercicios.

Keep pushing and pushing!
## Reto de programación, día 30/100.

Hoy es martes, no tengo café en la despensa, y lo tengo claro: no voy a empezar el día hasta que me tome mi taza.

Tras una visita al super, y una taza de café, continúo con el portfolio. Lo primero en lo que me quiero enfocar, es apañar el responsive. Soy consciente que hay muchos detalles que requieren de bastante tiempo para solventarlos, no busco la perfección ahora mismo, sino poder mostrar mi primera versión viable de portfolio. Por ello, no voy a ser tan meticuloso a la hora de ajustar el responsive, pero eso no quiere decir que se vaya a quedar así. Como comenté días anteriores, mi intención es dejarlo lo más optimizado, y con menos fallos gráficos posible antes de acabar el reto, pero tengo otros proyectos que abordar antes de que eso pase. 

Después de realizar ajustes, y utilizando media queries he podido solventar minimamente la vista en diferentes dispositivos. Estamos a mitad de jornada, espero poder acabar las descripciones de mi experiencia/formación durante el día de hoy.

Una vez escrita la información, voy a comprar el dominio y enlazarlo mediante DNS. Si queréis visitar el portfolio, ya podéis acceder a él mediante la siguiente url:

 fmelero.dev 

Mañana retomaré la busca de empleo, por lo que voy a acabar acabar de revisar los detalles de mi CV. 

Keep coding till your fingers bleed!


## Reto de programación, día 29/100.

Después de recargar pilas, continuamos, aunque hoy me tocará hacer algo especial.

El día de hoy empieza a funcionar la web de la peluquería. Con el primer uso, vienen los primeros cambios. 

Tenemos que adaptar el sistema para que lo pueda utilizar un iphone, sin hacer del mail de las reservas su mail principal. Por otro lado, hay que hacer un cambio en la forma que estamos mostrando el contenido en la galeria y el index. 

Para el primero simplemente hemos enlazado los calendarios. El segundo, es más complicado. Queremos evitar enviar demasiadas peticiones a la API de instagram, por lo que cargaremos las imagenes/reels de forma local. Uno de los features de la web es que se actualizan las fotos que suba en instagram en su página web. Para emular este comportamiento, he pensado hacer un cron job que triggee el script que nos interesa para actualizar las fotos comparando las fotos que tenemos, con las nuevas recibidas en la petición. De esta forma limitaremos a solo 2 peticiones diarias y no sobrecargaremos la API. 

Después de plantear el problema y la posible solución, nos ponemos manos a la obra. Una vez hecha la parte que tenía esperada para hoy, utilizaré el resto del día para perfeccionar mi nueva plantilla de CV. 

Mañana más, finalmente podremos actualizar el contenido, arreglar pequeños aspectos del responsive y publicar la página con mi dominio.

¡Seguimos!
## Reto de programación, día 28/100.

Sabado sabadete, uhm.. Quiero decir...

Empezamos el día con ganas, ganas de programá mal pensad@.

 El lunes la página de la peluquería debe estar impoluta tal y como ha querido el cliente, ya que se empieza a utilizar para realizar las reservas de las citas. Hay un varias pequeñas modificaciones de ultima hora que nos ha pedido, así que me pongo con un par de ellas y podré continuar con el portfolio.

Después de realizar los cambios, y de repasar la página, continúo con el portfolio. 

Hoy puedo dedicarle 12 horas sin problema, mi intención es dejarlo acabado a la espera de comprar el dominio. Mañana tengo intención de descansar, así que hoy debo aprovechar el tiempo.

Empiezo con el responsive mobile. Me encuentro con varios problemas de base. Teniendo en cuenta que la página me ha obligado a modificar manualmente el scroll de forma horizontal para tener que simular el aterrizaje de un avión, el primer problema que se me plantea es que debo crear una regla para modificar el comportamiento del scroll con resoluciones mobile. Sería demasiado facil de solucionar creando un condicional que se dispare cuando la resolución es menor a la indicada, pero eso solo nos estaría dando los valores de la ventana cuando la aplicación se inicia, si queremos redimensionar la pantalla esta solución no me serviría. Para arreglarlo, he capturado el evento de la redimensión que guarda en un estado de tipo objeto el ancho y alto de la página. Tras una pequeña refactorización del código, ahora puedo cambiar el scroll para que funcione condicionalmente, en función del tamaño de la ventana. 

Todas las diferentes secciones que representan las páginas, están dentro de una clase pagina, lo que me hace más fácil adaptarlo a una vista mobile. Quiero que la vista sea parecida al contenido que tengo en la página de desktop, pero logicamente sin el aterrizaje del avión, ya que sería muy dificil leer el contenido. Otra cosa es cuando la orientación del móvil es "landscape", en ese caso si que puedo implementar una versión parecida a la de desktop, pero es algo que ahora mismo no puedo priorizar, ya que debo sacar la minima versión viable de la página. Antes de acabar el reto, tengo claro que arreglaré los detalles que quedan para que la página acabe de capturar lo que quiero trasmitir.

A las tantas de la noche puedo escribir, aquí tenéis. La primera versión de mi portfolio en mobile:

![Snap 36 plantilla SPA](/imagenes-readme/captura46.JPG)
![Snap 36 plantilla SPA](/imagenes-readme/captura47.JPG)
![Snap 36 plantilla SPA](/imagenes-readme/captura48.JPG)
![Snap 36 plantilla SPA](/imagenes-readme/captura49.JPG)
![Snap 36 plantilla SPA](/imagenes-readme/captura50.JPG)

Ahora me toca descansar después de 7 días intensos. Mañana dejaré el ordenador de lado, pero el Lunes volveré con las pilas recargadas :D

Estoy cuñao ultimamente...
Ciao pescao, buen finde.

## Reto de programación, día 27/100.

Se acerca el fin de semana, aunque este fin de semana no prevee ser tranquilo precisamente...

Continuo con el portfolio. Ayer dejamos por implementar la lógica del envío de e-mails para el formulario de contacto, y el manejo de los errores con avisos insertados en sticky boxes animadas. Pero antes, me gustaría empezar con un poco de CSS: 

![Snap 36 plantilla SPA](/imagenes-readme/captura45.JPG)

Tras retocar el formulario, me dispongo a implementar la lógica del envío de e-mails. Tengo intención de utilizar emailjs ya que el límite de correos electrónicos diarios me parece más que correcto para el uso esperado del formulario. Las ventaja de email js es que es muy sencillo de configurar y de utilizar. Simplemente después de setear la plantilla, y el servicio desde su página web, realizas una petición incluyendo la estructura del contenido que hayas elegido como variables en la plantilla y manejas los errores por si existiera algún tipo de problema.

En este caso, he implementado ref para utilizar los datos tecleados por el usuario, luego he implementado una validación con expresiones regulares para los tres campos, y para acabar si el formato de los datos es válido lo envía en la petición. 

Considerando que tengo que manejar los errores tanto de respuesta, como de introducción de datos por parte del usuario, pero tambien quiero mostrar el sticky cuando la respuesta es 200, he implementado dos estados que contienen el color y el texto del sticky. De esta forma, en función de la acción que ocurra, se mostrará un texto diferente con un color previamente definido. Como es logico, utilizo el rojo para los errores y el verde para cuando el e-mail es enviado correctamente.

![Snap 36 plantilla SPA](/imagenes-readme/captura42.JPG)
![Snap 36 plantilla SPA](/imagenes-readme/captura43.JPG)

Como la validación de datos ha resultado favorable, hemos recibido el e-mail como esperabamos:

![Snap 36 plantilla SPA](/imagenes-readme/captura44.JPG)

Por hoy lo dejo para ir a ensayar, como un cuñao me despido:

Con esto y un bizcocho cerramos el chiringuito por hoy.

## Reto de programación, día 26/100.

Llegamos al ecuador de la semana, una semana ajetreada, pero esto no para.

Ayer dejamos lista la sección de los íconos que representan las tecnologías que utilizo. Hoy toca ajustar las siguientes dos secciones. Como comenté ayer, tuve una idea para mejorar las cards. Al principio se cargaban todas manualmente, ya que eran componentes que se llamban en el código directamente. Pero si lo hacemos así, no estaríamos aprovechando todo el potencial que tiene para ofrecer React. En lugar de dejarlo así, he cargado los componentes mediante el map de una array de objetos que contiene la info. De esta forma, para añadir un nuevo card solo es necesario añadir la información al array de objetos. Por otro lado, he modificado el diseño drasticamente, y añadido un efecto hover sobre los cards. Adicionalmente, he implementado la lógica de un carousel para que se pueda desplazar entre los diferentes proyectos, y funcione todo de manera automática. Ahora si quiero añadir un proyecto, solo tengo que añadir un registro nuevo al array, y automáticamente lo añadirá al final, o al principio del carousel.  

A continuación os muestro un snap de como ha quedado la sección con todos los cambios aplicados:
![Snap 36 plantilla SPA](/imagenes-readme/captura36.JPG)

Como podéis observar, he limitado la aparición de 1 card por pantalla. Por otro lado, los cambios del diseño son significativos como comentado anteriormente. Las imagenes de los trabajos realizados las he creado con una página que está realmente bien: shots.so. Con esta página se pueden hacer este tipo de imagenes con diferentes dispositivos, fondos etc... y lo mejor, totalmente gratis. 

Después de testear el nuevo carousel de forma satisfactoria, me dispongo a continuar con la siguiente parte:

![Snap 33 plantilla SPA](/imagenes-readme/captura33.JPG)

De esta sección hay varias cosas que me chirrían. Por un lado, no está formateado el contenido, solo está creado un card con un paragrafo dentro. Me gustaría poder hacer algo similar a con el carousel, es decir, cargar el contenido de forma dinámica. Para ello, quiero utilizar props desde la página donde se carga el componente para poder añadirle la info que tendrá dentro.

Primero de todo, formateamos y creamos la estructura para recibir props. Para la parte de la descripción de cada trabajo/estudio, he pensado crear unos bullet points con un listado desordenado. ¿Cómo pasaré los diferentes bullet points, si desde el prop no puedo utilizar código html? Muy sencillo, por el prop le pasaré una array con el contenido que quiero añadir. En el componente, iteraré la array recibida por props y asignaré cada item a un li. De esta forma, puedo enviar en tan solo un prop, contenido que puede variar de estructura. Por ejemplo. si quiero tan solo poner 2 bullet points, añado solo 2 elementos al array que paso por props, y así sucesivamente... De esta forma, me aseguro que el contenido es modular, y puedo añadir o quitar tantos bullet points como quiera sin tener que cambiar la lógica detrás.

Finalmente el componente quedó así:

![Snap 31 plantilla SPA](/imagenes-readme/captura39.JPG)

Como podéis ver, he formateado el texto y creado un div interior para poder hacer scroll y se ajuste dentro de la caja. Por otro lado, he modificado el diseño ligeramente para que tenga más sentido conforme las otras secciones, y sobretodo, para que se pueda leer y entender bien el texto que está dentro del componente. He hecho la misma lógica en experience que en Education, la diferencia es que los props que entran son diferentes, por lo que he separado la lógica en dos componentes, uno llamado Education Card y otro Experience Card. Una vez he añadido todo el contenido, puedo decir que esta sección queda acabada pendiente del responsive general de la web. 

Continuamos ahora con Contacto. No tenía pensado llegar a tocar contacto, pero he podido arreglar el resto a tiempo por lo que vamos a ello:


![Snap 40 plantilla SPA](/imagenes-readme/captura40.JPG)

He mantenido la misma estrctura que antes, nombre e-mail y mensaje. Con más datos pidas en un formulario, menos posibilidades hay de que alguien lo utilice, por eso me limito solo a pedir nombre y e-mail. He ajustado un poco el diseño para que sea más elegante, aunque hay alguna cosa que pulir.

Antes de aplicarle la lógica para que envie un e-mail, me gustaría crear una sticky box que aparezca en función del error recibido, o notificación que quiero hacer al usuario, ya que quiero manejar los errores mediante esta sticky box, así podrá ver el usuario de una forma visual si se ha equivocado en el formulario, o si hay alguna acción requerida (ya entederéis esto por que más tarde). Mi idea es dejarlo listo como un componente, y pasarle el color y el contenido por props para utilizar el mismo componente con diferentes tipos de alerta. 

He creado el sticky que se anima conforme aparece, y he seteado un timer. En el caso que el ratón no se mueva durante 3 segundos, he configurado una alerta de color gris que indica como tiene que continuar, aquí dejo el snap:

![Snap 41 plantilla SPA](/imagenes-readme/captura41.JPG)

Una vez el usuario se desplaza con la rueda del ratón, el aviso desaparece. Ahora me tocará aplicarle la lógica del envío del email, y manejar los errores con el sticky, pero por hoy ya es suficente. Mañana continuamos con esto, por otro lado me gustaría refinar un poco más el diseño del formulario, y ya me pondría con el responsive! Va a ser la parte quizás más complicada, pero una vez esté lista, por fin podré desplegar el portfolio y dedicarme a otra cosa. Tengo todavía que aplicar la funcionalidad de las reservas en la plantilla del spa. Cuando acabe lo que estoy haciendo actualmente, me pondré con ello. Considerando que estaré poco tiempo con la funcionalidad, ya tengo pensado cual será el próximo proyecto: Un pequeño modulo en node que te permita crear un arbol gráfico de los directorios del proyecto, de forma modular para que puedas decirle que es lo que no quieres que te incluya.

Keep coding till your fingers bleed!



## Reto de programación, día 25/100.

Empezamos el día 25 con muchas ganas de trabajar...

... y menos mal.

A primera hora, después de un café con leche amargo (no porque lo que me esperaba después sería duro, qué también, más bien porque no había azucar 😢) recibí un e-mail con los cambios que debía realizar de la página de la AMCL.

Una vez realizados, anoté un par de cambios que podrían mejorar el feature cara a la experencia del usuario. A las 12.00 tenía reunión con un grupo de compañeros freelance después de unas semanas de vacaciones. Estamos en la fase final del desarrollo de  una página en Nuxt para una peluquería. Después de la reunión, nos dividimos las tareas pendientes y nos pusimos manos a la obra.

Tras 7 horas programando, una manzana, un baño, y un paseo, continuo con el portfolio. 

En lo que me queda de día tengo intención de realizar algun cambio en la primera caja, así como añadir los íconos de habilidades para la segunda. Empezamos con la caja:

![Snap 31 plantilla SPA](/imagenes-readme/captura31.JPG)

Ayer realizamos unos cambios que mejorarían la primera version de la página. Antes de irme a dormir se me ocurrió añadir tanto mi nombre, como un par de iconos que servirán de enlace a mi linkedin y github:

![Snap 31 plantilla SPA](/imagenes-readme/captura34.JPG)

Adicionalmente le he añadido un borde con poca opacidad para que se vea la foto y utilizarlo así como un marco. Ahora es hor de ponerme con los iconos de las tecnologías que más domino. Me gustaría que los iconos fueran de color, por lo que descarto iconfinder, por suerte los encuentro en pngwing.

He añadido un filtro de grises medio a los iconos, que se elimina con el hover. Jugando con el flex-direction y con la estructura padre-hijo, he podido animar el texto de las descripciones de cada lenguaje solo con CSS. 


![Snap 31 plantilla SPA](/imagenes-readme/captura35.JPG)
![Snap 31 plantilla SPA](/imagenes-readme/captura38.JPG)


Lo dejo por hoy, tengo una idea sobre la siguiente sección, mañana la llevo a cabo y os muestro los cambios planificados.

Keep coding, and coding, and coding... 

## Reto de programación, día 24/100.

Ni te cases, ni te embarques. Quien entiende, entendió.

Antes de continuar con el portfolio, voy a hacer una edición en mi perfil de Git. Desde hace un tiempo, si le pones de nombre a un repositorio como tu usuario, se muestra el README en tu perfil. Para las imagenes de mi stack tecnológico, voy a utilizar iconfinder.com.  


![Snap 30 plantilla SPA](/imagenes-readme/captura30.JPG)

Este diseño lo he hecho con simple markdown, y agregando a un paragrafo centrado para iconos. Una vez acabado, continúo con el portfolio. 

Mi intención de hoy, es dejar la primera caja acabada, y dar un repaso a las demás. Antes de ponerme a editar el diseño ya existente, voy a escribir el apartado "sobre mí". 

Con el texto ya escrito, procedo a mejorar el diseño de la caja:

![Snap 31 plantilla SPA](/imagenes-readme/captura31.JPG)

La diferencia con el antiguo diseño es claro. Ahora el contenido es más legible. He decidido crearle un div interior y personalizar la barra de scroll para darle un toque fancy :D

He creado unos cards para enlazar mis proyectos, he añadido dos proyectos para ver como quedaba, pero debo darle una vuelta... Me gustaría incluir más información e implementar swipper, mañana valoraré las opciones que tengo.

![Snap 31 plantilla SPA](/imagenes-readme/captura32.JPG)

Adicionalmente, he creado una sección interactiva donde puedes pasar entre la experiencia laboral y la formación académica. De momento no he añadido ningún contenido, pero así está quedando:

![Snap 31 plantilla SPA](/imagenes-readme/captura33.JPG)

Para esta parte del diseño, voy a probar de la nueva funcionalidad de CSS que te permite animar el display.

Lo dejo por hoy, mañana continuaré perfilando más detalles del portfolio. 

¡Seguimos!

## Reto de programación, día 23/100. 

Empezamos la semana con un par de tazas de café. Como comenté ayer, voy a centrarme en acabar mi web portfolio antes de implementar la API en la plantilla. El portfolio lo empecé a desarrollar antes de iniciar el reto, pero hay bastantes detalles que he de corregir. Utilicé React, como framework front-end para construirlo, así que para este proyecto utilizaré una tecnología diferente. 

Inicialmente, había construido un index que te permitiera elegir el idioma. En función del idioma elegido, te enviaba a una sección donde tenías que introducir el "nombre del piloto". Ya entenderéis más tarde por qué. 

(La página correspondiente a la raíz del proyecto ("/")).
![Snap 26 plantilla SPA](/imagenes-readme/captura26.JPG)

(La página correspondiente a la introducción del nombre del piloto, en función del idioma seleccionado).

![Snap 27 plantilla SPA](/imagenes-readme/captura27.JPG)

El formulario tiene una validación basada en expresiones regulares para limitar el input introducido, por lo que hay que introducir el nombre en un formato correcto. De forma reactiva, capturando el evento change,  activa o desactiva el botón que permite pasar al portfolio, y manda los datos como props para que se muestren en la siguiente pantalla:

![Snap 28 plantilla SPA](/imagenes-readme/captura28.JPG)

Como se puede observar en el anterior snap, la aplicación es algo más que un simple portfolio. 11 años trabajando en el sector de la aviación, me han inspirado para hacer este tipo de página. La aplicación simula el aterrizaje de un avión en un aeropuerto, de forma que cada x aparece una sección con información sobre lo que he ido haciendo durante estos años. Para navegar por el portfolio, se utiliza la ruleta del ratón, simulando el descenso de un avión hacia una pista de aterrizaje. Una vez el avión aterriza, aparece un formulario de contacto como muestro a continuación:

![Snap 29 plantilla SPA](/imagenes-readme/captura29.JPG)

Hay varios detalles técnicos que debo tener en cuenta para acabar el portfolio. Por un lado, el responsive para dispositivos móbiles y tablets es bastante dificil de aplicar, y poco intuitivo una vez se utiliza en resoluciones menores. No estoy seguro de la forma en la cual voy a afrontarlo, pero de lo que si que estoy seguro es que lo solventaré. Sería mucho más sencillo crear otro tipo de plantilla para las resoluciones menores, pero rompería de alguna forma el diseño original. 

Tras darle unas vueltas, he llegado a la conclusión que no quiero tener dos páginas diferentes que se carguen en función del dispositivo. Aun que sería una solución más facil de aplicar, entiendo que es mejor mantener la idea original. Para poder llevar a cabo mi plan, tendré que realizar una modificación para versiones de resolución menor. En este caso, añadiré un botón que simulará el acelerador de un avión. Conforme suba la intensidad de aceleración, el avión hará una animación más rápida o más lenta hasta el siguiente punto de control, donde se pausará para elegir continuar, o ir para atrás. Es lógico que en la vida real esto no pasa, cuando un avión aterriza, es imposible que haga el movimiento contrario, pero para el portfolio es importante que se pueda navegar por todas las secciones, y en un momento dado, regresar a la sección anterior. 

Soy consciente que para llevar a cabo el plan, tendré que dedicarle muchas horas a los pequeños detalles, pero es algo que no me asusta. Sarna con gusto, no pica :D.

Keep coding till your fingers bleed.

## Reto de programación, día 22/100. 

Hoy es domingo, pero no es un domingo cualquiera. Las temperaturas han bajado de forma drástica, hace tan solo tres días no se podía estar en el escritorio sin ventilador. Con la ventana cerrada, y algo abrigado empiezo el vigesimo primer día del reto.

He recibido peticiones de la URL de mi portfolio, pero debo hacer varios retoques antes de republicarlo. Considerando la solicitud, he de priorizar el portfolio antes que la ultima funcionalidad que queda en la plantilla del SPA. De todas formas, hoy me dedicaré a crear una plantilla de API con un crud básico, para poder editarlo después de desplegar el portfolio.  

Antes de explicaros el proyecto del portfolio, que dista de ser un portfolio más, me gustaría hacer una reflexión sobre la estructura de la API que he programado. Al utilizar un ORM, la estructura debe ser definida antes de empezar a tocar una linea de código. En este caso, he empezado a programar una API que tiene las siguientes capas:

* Rest controller que procesa la solicitud.
* Service que conecta el rest controller y la capa de persistencia.
* La capa de persistencia llamada db que hace las solicitudes a la BD tomando referencia los modelos configurados.

Cuando se envia la petición, la request pasa por estas capas hasta llegar dónde debe. La respuesta se hará a la inversa, siendo el rest controller la última capa de la API en la respuesta. Un punto a favor del ORM, es que te obliga a utilizar un sistema basado en POO. Tras leer el libro del tito Martin sobre agile, me veo preparado para utilizar los principios básicos del código limpio en POO.

Después de unas horas de arduo trabajo, podréis encontrar la plantilla de la API que he desarrollado junto a mucha más información sobre la misma en el siguiente enlace:

https://github.com/frankymelero/express-sequelize-api-crud

¡Seguimos machacando, mañana más!


## Reto de programación, día 21/100. 

Ayer planteamos el problema, y posibles soluciones, así como empezamos a programar la API. 

Hoy toca continuar con exactamente lo mismo. Me gustaría que esta API demostrará bien los conocimientos que he ido adquiriendo durante los dos ultimos años. Para ello he tomado una decisión, que cambiará ligeramente el curso del desarrollo.

Para securizar aún más, realizar mejores consultas y de una forma más eficiente, he pensado utilizar un ORM de SQL. Hasta ahora, había trabajado con mongoose para gestionar noSQL, y no había utilizado un modelo ORM con SQL en Node. He visto que hay varias opciones válidas, y aunque el ORM Prisma está ganando mucha fuerza en el mercado, he tomado la decisión de utilizar Sequalizer. 

Antes de instalar Sequalizer en el proyecto, y de crear la lógica de negocio, voy a realizar varias pruebas en local durante el día de hoy, y posiblemente de mañana también. Mi intención es crear un sistema que pueda ser utilizado en un entorno de alta demanda, por lo que bajo mi punto de vista, es idoneo utilizar TDD para el desarrollo de la API. Para realizar los tests, he instalado Jest ya que estoy bastante familizarizado con la forma de escribir los tests con esta herramienta.

Sigo formandome, y realizando pruebas para poder gestionar de una mejor forma la API, aunque de alguna manera, no es realmente necesario para el uso que va a tener.

¡Continuamos!

## Reto de programación, día 20/100. 

Comenzamos la jornada dónde la dejé ayer. Empezamos a crear la estructura de la API. Hasta ahora, las API que he desarrollado han tenido diferentes estructura, por lo que voy a hacer varias pruebas antes de continuar con un camino. 

Actualmente, tengo un servicio de base de datos pre-configurado para ser conectado a la API. Mi intención es guardar todas las citas reservadas en la BD. Podría hacer un registro para cada margen de hora, y simplemente llamarlo con el metodo put para añadirle el localizador, pero creo que va a ser más eficiente que lo haga al revés. El front-end, a través de una petición GET recibirá las horas ocupadas, y mediante un bucle mostrará las horas que no lo están. Por otro lado, quiero añadir una pequeña capa de seguridad a las horas bloqueadas, para evitar que se puedan modificar libremente. 

Mi intención es usar Auth2 conectado a la API de google para recibir los datos del usuario, y así permitir solo la edición de los datos que vayan enlazados a una cuenta de correo. Por otro lado, crearé varios endpoints para realizar modificaciones que solo puedan devolver datos a quién tenga un token válido. En este caso, predefiniré una dirección de e-mail, que recibirá el TOKEN una vez se haga la llamada a un endpoint en concreto. El token tendrá una caducidad baja, por lo que cada vez que se quieran modificar los datos en distintos días, el administrador tendrá que repetir el proceso de verificación. 

Una vez planificada la funcionalidad, empiezo a programarla. Durante los próximos días, la subiré al repositorio para que podáis ver como está hecha. Por otro lado, utilizaré variables de entorno para securizar los datos, y de esta forma evitar que mediante la lectura del código subido a github se pueda acceder a la bbdd.

¡Seguimos avanzando!


## Reto de programación, día 19/100. 

Hoy es imposible trabajar sin un buen vaso de agua fría y el ventilador al lado. El calor que emana el sol, penetra por las paredes de la casa, haciendo de esta una sauna.

Empezamos el día planteando como vamos a construir exactamente el calendario de citas. He estado haciendo pruebas en un entorno separado, y he planteado como lo voy a hacer exactamente. En el calendario original estaba pensado para que simplemente enviara un e-mail al gestor de las citas, para agendar la cita de forma manual. Pero no estamos para eso, queremos que se haga completamente automáticamente. Para ello, he decidido implementar un identificador único a cada cita. De esta forma, cuando el cliente haya bloqueado la cita mediante la API, podrá cancelarla simplemente introduciendo el identificador que le llegará por correo electrónico. Por un lado, el formulario realizará una petición a la API dónde escribirá la información del cliente y el identificador de la cita. En la parte del front-end, crearé un iterador que solo muestre las citas que están vacías, por lo tanto, que se pueden reservar. Voy a utilizar hora UTC para estandarizar los rangos de horas. Podría ser, que la cita se concretara desde otro país, y para esclarecer la hora exacta prefiero utilizar UTC y luego convertirla a local.

Debido a una petición de una correción urgente, he tenido que parar el proyecto para hacer unos cambios en el UX de la página de actividades. Me quedan unas horas de jornada, así que aprovecharé para avanzar todo lo posible en la API en NodeJs usando ExpressJs. Cuando la tenga lista, podré integrarla al front-end. Estimo poder tener acabada esta funcionalidad durante el día de mañana. 

Una vez implementeda, explicaré con detalles el funcionamiento del calendario de citas con recortes, así cómo escribiré el Readme por si otro desarrollador decide utilizar la plantilla que adaptado con las nuevas funcionalidades.

Seguimos machacando teclas :D!


## Reto de programación, día 18/100. 

Hoy va a ser un gran día. Por fin empezaremos con las funcionalidades que no venían de serie en la plantilla.

Tras un problema con las rutas de las imagenes en el deploy, finalmente he podido dejar la página muy parecida a como estaba diseñada originalmente. Si quieres ver como va quedando accede a la siguiente url: https://spa-plantilla-nuxt.vercel.app/ 

El siguiente paso va a ser utilizar un servicio externo para el envío de e-mails. Al no contar con un servidor smtp, es la opción que veo más factible considerando el tipo de proyecto que es. Mi intención es usarlo tanto en Contacto, como cuando se agende una cita. 

Por otro lado, crearé una API sencilla en Express para gestionar las citas, así como una pequeña interfaz. Adicionalmente, integraré una tabla de usuarios que están registrados en el newsletter. 

Empezamos con el formulario de contacto, como he comentado anteriormente enviaré un e-mail utilizando un servicio externo, en este caso email-js. Primero realizamos una configuración previa desde la página de emailjs, añadiendo el servicio de gmail, así como una plantilla con los datos exactos que vamos a utilizar en el formulario. Una vez configurado, instalamos el paquete emailjs, para luego adecuar la página de contacto a lo que queremos. 

Como estaba previamente programado el formulario, tan solo tenemos que preocuparnos de la lógica: 

```

<script setup>
import emailjs from 'emailjs-com';
const sendEmail = () => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const emailParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  emailjs.send('ID_DEL_SERVICIO', 'ID_TEMPLATE', emailParams, 'USER_ID')
    .then((response) => {
      console.log('Mensaje enviado:', response);
      alert("Mensaje enviado");
      window.location.reload();

    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
      alert("Error, no se ha podido enviar el mensaje.");
      window.location.reload();
    });
};
</script>

```
En este caso enviamos una petición a la API de emailjs mediante promesas. Tras asignar la funcion sendEmail con el @click en el botón de submit, procedemos a hacer las primeras pruebas:

![Snap 24 plantilla SPA](/imagenes-readme/captura24.JPG)

Finalmente, tras un par de tests consigo que se envíe correctamente (con otros datos que los de la captura anterior):

![Snap 25 plantilla SPA](/imagenes-readme/captura25.JPG)

Ya estoy listo para pasar con la newsletter. Para ello voy a crear una pequeña API en express, y asignarle el endpoint correspondiente para la newsletter. De la misma forma que haré para gestionar las reservas. Aunque por hoy, simplemente plantearé la API, configuraré los aspectos básicos y la desplegaré para poder hacer pruebas con ella. 

Mañana os mostraré el resultado del trabajo que tengo planeado realizar entre esta tarde, hasta el final de la jornada de mañana.  

Si has leído esto, muchas gracias por seguir mi progreso. 

¡Hasta el próximo día!


## Reto de programación, día 17/100. 

Llegamos a la recta final de la plantilla. Hoy tocaba ajustar todos los aspectos necesarios para que la plantilla se quedara tal y como se diseñó.

Nos quedaba pendiente convertir el menú a NuxtLinks, retocar el responsive y acabar de revisar la página. Conforme he ido comparando la página con la plantilla inicial, me he dado cuenta que habían varias secciones por hacer. Por ejemplo, en contacto, había una seción con un mapa y formulario que he implementado:

![Snap 22 plantilla SPA](/imagenes-readme/captura22.JPG)

He cargado todos los componentes en una estructura de páginas, para imitar la navegación que tiene la plantilla original. Por otro lado, hace unos días comentamos que había que hacer un componente que recibiera props para poder reutilizarlo en todas las páginas. En concreto, el componente está hecho de la siguiente forma:

Componente CustomHeader.vue:
```
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pageTitle: String
});
</script>

<template>
    <!-- Header Start -->
    <div class="jumbotron jumbotron-fluid bg-jumbotron" style="margin-bottom: 90px;">
      <div class="container text-center py-5">
        <h3 class="text-white display-3 mb-4">{{ pageTitle }}</h3>
        <div class="d-inline-flex align-items-center text-white">
          <p class="m-0"><a class="text-white" href="/">Home</a></p>
          <font-awesome-icon icon="far fa-circle" class="px-3" />
          <p class="m-0">{{ pageTitle }}</p>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </template>

```
Pásandole los props cada vez que se llama al componente:

```
     <CustomHeader pageTitle="About"></CustomHeader>

```

Resultado:


![Snap 23 plantilla SPA](/imagenes-readme/captura23.JPG)

Adicionalmente, he cargado el Navbar con props también para establecer la propiedad activa. De esta forma, en función de la página dónde estés viendo el navbar, automáticamente se seleccionará de otro color marcando así la página actual.

Conforme he ido testeando cada una de las páginas, me he dado cuenta que cuando la página se veía en versión mobil, el menú no se desplegaba, así como varias cajas no estaban del todo encajadas. Tras realizar todos los cambios pertinentes, y después de realizar los tests necesarios, puedo confirmar que la página ya está lista para añadirle funcionalidades.

Podéis ver la primera versión desplegada a través del siguiente enlace:

https://spa-plantilla-nuxt.vercel.app/

Seguimos avanzando, mañana tocará añadirle las funcionalidades. En los próximos días tengo pensado acabar ciertos detalles de mi portfolio, desplegarlo y añadir esta página a la sección de proyectos.

A pesar que he trabajado con una plantilla pre diseñada, este trabajo de refactorización me ha venido muy bien para aprender ciertos detalles que antes no tenía en cuenta, así como para solidificar un pelín más mis bases de Nuxt.

Keep coding, keep living :D 

## Reto de programación, día 16/100. 

Continuamos con el reto. En los anteriores días hemos ido refactorizando el código de una plantilla. Esperaba empezar con nuevas implementaciones, pero hay algunos cambios que debo realizar antes: 

Puedo ver que hay ligeros detalles que hay que modificar del responsive. Adicionalmente, he de crear una animación para el primer carousel. Otra tarea pendiente es modificar todos los enlaces, y sustituirlos por Nuxt Links, de esta forma estaré navegando correctamente por la página utilizando las herramientas que me proporciona el framework. Por otro lado, la parte de precios tiene un pequeño bug de funcionamiento que he de corregir. Después de analizar bien el problema, he optado para este caso utilizar una librería externa llamada Swiper que dejará la sección tal y como es. 

Durante el día de hoy me debería dar tiempo a acabar todas las tareas pendientes excepto el responsive, a falta de acabar, desplegaré hoy la página en Vercel. 

Vamos a ello, empezamos con la animación del carousel. Después de un rato con ello, he conseguido que se anime no tan solo la primera vez, sino cada vez que se haga el click para cambiar de imagen, o cuando se autoupdatea con el timer. 

![Snap 20 plantilla SPA](/imagenes-readme/Captura20.JPG)

Continuamos con la sección Pricing, en este caso he de instalar y aplicar una libreria externa llamada Swiper, manteniendo los estilos anteriores. El resultado ha sido muy parecido al componente que programé desde cero, pero ahora el comportamiento del componente es exactamente el que buscaba.

![Snap 21 plantilla SPA](/imagenes-readme/captura21.JPG)

Después de modificar todos los enlaces de la página, solo quedará el responsive. Considerando que tengo que marchar esta tarde, continuaré con el responsive por la noche cuando llegue. Mañana actualizaré el estado de la página, con los cambios de esta noche y más probablemente la suba a Vercel para que podáis ver como está quedando.

Keep coding, till your fingers bleed.


## Reto de programación, día 15/100. 

La ley de murphy es increible, con el calor que hace, va y se me rompe el ventilador. 

Persianas bajadas, continúo con la plantilla del SPA (el de relax, no una single page application). Hoy será por fin el día en el cual tendré que dejar el proyecto tal y como está la plantilla original de serie. Por muchas veces que lo vea, me sigue asombrando el hecho de la eficiencia con el uso de frameworks. Repasando, he convertido 7000 lineas de código a 700, haciendo una funcionalidad muy parecida, sino la misma. 

Empiezo el día dónde ayer lo dejé, vamos a convertir la parte del precio en un carousel interactivo. Como peculiaridad, la funcionalidad de este componente se parece mucho al carousel de servicios, aunque en este caso solo hay 3 productos. De hecho, el carousel está pensado para que puedas añadir tantos productos como quieras. 

Después de toda la mañana, puedo decir que tengo una sección bastante parecida a la original:

![Snap 17 plantilla SPA](/imagenes-readme/captura17.JPG)

Así estaba previamente:

![Snap 14 plantilla SPA](/imagenes-readme/captura14.JPG)

Ya tan solo queda ajustar el dropdown del navbar, y tendré la plantilla lista para añadirle las nuevas funcionalidades, por lo que apretaré para dejarlo listo.

 El restultado ha sido este:

![Snap 14 plantilla SPA](/imagenes-readme/captura19.JPG)

Hasta aquí por hoy, mañana empezaré a añadir nuevas funcionalidades para dejar la plantilla lista para quien quiera utilizarla. Podréis encontrar en este mismo repositorio el código de la plantilla. Mi intención es dejar la plantilla con ciertos aspectos por modificar para que se pueda re-utilizar facilmente, y por supuesto me gustaría hacer una guía de instalación de la misma, así como de aspectos importantes de la plantilla. Una vez esté todo acabado, desplegaré la página para que la pruebe quien esté interesado.

&#9835; Queremos marcha, marcha. &#9835; 

Mañana seguimos!
## Reto de programación, día 14/100.

La constancia es la virtud de aquellos que quieren llegar a cumplir sus metas. Han pasado ya dos semanas desde que iniciamos este reto, y puedo decir que está siendo una experiencia muy divertida. Aunque el camino sea largo, si cada día se recorre una parte de él, al final la meta está cada vez más cerca. 

Hoy tenía planedo ajustar la parte llamada "nuestros servicios". Inicialmente estaba de la siguiente forma:

![Snap 10 plantilla SPA](/imagenes-readme/captura10.JPG)

He tenido que hacer bastantes cambios para hacerlo funcionar tal y como está en la plantilla. Originalmente, esta sección dependía de la libreria del carrousel, y como hemos adaptado toda la lógica, he tenido que hacerla desde cero. Este carrousel tiene detalles bastante particulares. Cuando se hace hover en él, la imagen se mueve hacia arriba, mostrando el boton "Make Order". Por otro lado, no muestra todas las imagenes en pantalla, y esconde el overflow. Para pasar entre las imagenes, se debe arrastrar el carousel, que hace aparecer la siguiente imagen, y esconde la primera. 

Después de gran parte de la jornada, he conseguido ajustar el carousel tal y como venía de serie, realizando algunos cambios en la estructura. Para evitar repetir código, he seguido el mismo patrón que con el resto de componentes, es decir, he generado los elementos del carousel de forma reactiva, cargando los datos mediante un array de objetos. Tras varios ajustes, he conseguido acercarme mucho a la versión original:

![Snap 12 plantilla SPA](/imagenes-readme/captura12.JPG)

También he ajustado la parte dónde se hace la reserva:

![Snap 13 plantilla SPA](/imagenes-readme/captura13.JPG)

Para acabar el día, he modificado pequeños detalles del primer carousel y del último para mejorar la experiencia de usuario. Ahora, una vez se hace click, el timer que pasaba las páginas del carousel se detiene, y se reinicia al cabo de varios segundos. De esta forma, es más sencilla la lectura del contenido dentro del componente.

Mañana continuaremos con la útima sección que queda por refactorizar:

(como se ve)
![Snap 14 plantilla SPA](/imagenes-readme/captura14.JPG)

(como se debería ver)
![Snap 15 plantilla SPA](/imagenes-readme/captura15.JPG)

Una vez acabemos con este componente, y arreglemos el dropdown del menú, la página ya estará lista para añadirle funcionalidades que no venían de serie. Estimo que en dos días más la tendré acabada, lista para desplegar en Vercel.

Pushing, pushing and more pushing. It's the only way.


## Reto de programación, día 13/100.

Continuamos con la plantilla, tal y como habíamos planeado. Empezamos arreglando el carousel:

![Snap 7 plantilla SPA](/imagenes-readme/captura7.JPG)

He modificado la estructura del componente completamente, ya que la estructura que venía de serie en la plantilla era demasiado compleja y pesada para lo que queremos. De hecho, hay muchos de los ajustes que hace el script predeterminado que se pueden hacer con mejores prácticas en Nuxt, por ello he decidido volver a escribir toda la lógica de cero. 

Ahora, el carousel carga los datos desde una array de objetos que porporciona el h2, la descripción e imagen. He asignado un indice a cada uno de los li, cada vez que se hace click en un li, detecta en cual has hecho click, asigna la clase active y carga los datos del objeto en función de la posición que ocupen en el array. Es decir, si se clicka en el primer elemento devuelve el objeto en el array correspondiente a la posición 0, y así...

Por otro lado, he programado un timer para que automáticamente vaya iterando desde el 0 al length de la array cada x mili segundos. De esta forma, el elemento irá cambiando el contenido constantemente. 

Una vez acabado el carousel, he ajustado el otro carousel que tenía la página:

![Snap 9 plantilla SPA](/imagenes-readme/captura9a.JPG)

De la misma forma, he implementado la lógica desde cero por los mismos motivos antes comentados. 

Para acabar, he ajustado pequeños detalles del footer.

![Snap 8 plantilla SPA](/imagenes-readme/captura8.JPG)

Ahora solo queda arreglar el dropdown del menú, y ajustar la siguiente parte:

(así se ve)

![Snap 10 plantilla SPA](/imagenes-readme/captura10.JPG)

(así se debería ver)

![Snap 11 plantilla SPA](/imagenes-readme/captura11.JPG)

Lo dejamos por hoy, mañana más. En dos días, probablemente podremos añadir funcionalidades nuevas. Por otro lado, una vez acabe con esta plantilla, cambiaré a React y acabaré los últimos detalles que quedan de mi portfolio, para así desplegarlo en un vercel y poderlo mostrar.

Keep coding till your fingers bleed!


## Reto de programación, día 12/100.

Hoy tenía planeado continuar con la plantilla, pero hay varios ajustes que debo de hacer en la página de actividades para la mejora de la comprensión lectora. 

Empezamos ajustando la fitxa del alumnado para que te lleve automáticamente a las estadísticas del nivel actual. Adicionalmente, he añadido una funcionalidad extra en dos tipos de usuario, para que ahora puedan eliminar el registro de actividades realizado por cada alumno. También he modificado la parte de faqs, para que sea más intuitiva la edición de cada entrada. 

Por suerte, he llegado a implementar todos los cambios previstos en el día de hoy, por lo que podré continuar sin problemas con la plantilla mañana. 

Continuamos poco a poco hacia la meta.

PS: No puedo compartir screenshots de los cambios, soy consciente que la entrada del día de hoy parece vacía, pero al fin y al cabo el producto no es mío, por lo que he de respetar las decisiones del dueño de la página.


## Reto de programación, día 11/100.

Hoy es día de ajustar detalles de la plantilla. Empezamos el día instalando los íconos de fontawesome tal y como estaban en la plantilla original. He creado una carpeta plugins dónde definir cada una de las funcionalidades de manera encapsulada, para luego importarlas en los componentes que lo requieran. En este caso, el nombre del archivo creado es "fontawesome.js". He importado todos los íconos tanto de solid, como de brands directamente desde el este archivo, y exportado como nuxt plugin, realizando su el cambio correspondiente en el nuxt.config.ts. Después de una ligera modificación en la forma de llamar a la librería, los íconos han sido añadidos tal y como vienen en la plantilla:

![Snap 4 plantilla SPA](/imagenes-readme/captura4.JPG)

![Snap 5 plantilla SPA](/imagenes-readme/captura5.JPG)

De serie, un contador estaba pre-programado para hacer cambiar los datos en about us:

![Snap 6 plantilla SPA](/imagenes-readme/captura6.JPG)

El efecto se carga una vez la página ha cargado, y va desde el 0 al 99 y del 0 al 999. Aunque creo que sería mejor triggearlo cuando se haga scroll, he decidido crear el efecto cuando el componente se monte, tal y como está en la plantilla. Para esto, en lugar de utilizar el script que viene de serie, he creado un script propio que hace lo mismo, adaptado al framework que estoy utilizando. 

Quedará arreglar el dropdown en el hover del menú, ajustar los dos caruseles y varios pequeños detalles de los componentes.

Seguimos para bingo!

## Reto de programación, día 10/100.

Ya llegamos al décimo día desde que empezó el reto de programación. Hoy toca continuar con la plantilla. 

Ayer creamos la estructura, y cargamos la plantilla el proyecto Nuxt. Aunque hay varias funcionalidades que tendremos que importar, la página quedó ya presentada para empezar a trabajar con ella. Hoy he separado las diferentes secciones de la web en componentes, ya que el patrón de construcción de la web se repite, y quiero evitar repetir código. Por otro lado, a pesar que el contenido podría mejorarse, e incluso la estructura de la página podría llegar a carecer de sentido ben algunas partes, la intención principal de este trabajo es hacer una migración exacta, y añadirle la funcionalidades no implementadas a las partes que lo requieran. 

Después de separar las diferentes páginas en componentes, pasamos de tener un index con 650 lineas de código, a un index que llama a otros componentes de forma mucho más ordenada:

```
<template>

  <Carousel></Carousel>
  <About></About>
  <Service></Service>
  <OpenHours></OpenHours>
  <Pricing></Pricing>
  <Team></Team>
  <Testimonial></Testimonial>
  
</template>

```

Después de ajustar varios detalles en cada uno de los componentes, ya tenemos el índice montado. En este caso, en la plantilla vienen preprogramadas 9 páginas diferentes dónde el contenido se repite. Solo hay un componente que es distinto para cada página:

![Snap 3 plantilla SPA](/imagenes-readme/captura3.JPG)

Lo único que diferencia el componente entre páginas, es el contenido y el hipervínculo. Podremos solucionarlo más adelante haciendo el uso de props. Crearemos un componente, donde recoja los datos que le pasemos, para llamarlo posteriormente en cada una de las páginas enviándole la información personalizada. De esta forma, con tan solo un componente padre, podremos mostrar una variante del mismo, con un contenido diferente para cada una de las páginas.

Quedan varias funcionalidades pré programadas en la plantilla por implementar. Mi intención es que mi versión llegue a parecerse lo máximo posible a la original, por lo que tendré que acabar de ajustar componente por componente los scripts de la plantilla.

¡Mañana más, seguimos!

## Reto de programación, día 9/100.

Comenzamos el noveno día del reto, hoy toca plantear y empezar a convertir una plantilla que he seleccionado a Nuxt. En concreto, trabajaré con una plantilla de un SPA. Originalmente, la plantilla está programada utilizando html, bootstrap y js, por lo que es necesario implementar todas las funcionalidades necesarias para que la plantilla funcione  (valgase la redundancia). A continuación podréis ver unos recortes de la plantilla antes de realizar ningún cambio:

![Snap 1 plantilla SPA](/imagenes-readme/captura1.JPG)

En este caso, quiero modificar la parte de realizar una cita de forma que despliegue un calendario dónde poder agendarla. El calendario tendrá que enviar un e-mail al centro de SPA, y a la persona que ha hecho la reserva. Adicionalmente, el calendario debe bloquear las citas ya solicitadas, y mostrar solo las horas disponibles.

![Snap 2 plantilla SPA](/imagenes-readme/captura2.JPG)


 Para ello, utilizaré Nuxt como framework en el front-end, y una funcionalidad de Vercel que te permite conectar un back-end serverless. Para enviar los e-mails, en lugar de utilizar un servidor SMTP, haré uso de una de las tantas plataformas que te permiten enviar e-mails con un límite, considerando el propósito del proyecto.

 Keep coding, keep enyoing :) 

## Reto de programación, día 8/100.

Hoy por fin, hemos recibido las credenciales de acceso a Instagram, por lo que podré consumir la API de visualización básica de ig para incorporar en la página las últimas imagenes subidas en el perfil de la peluquería. Tras conseguir acceso, y generar un token, he añadido las tres últimas publicaciones tipo imagen en la landing page, así como he añadido a la galería todos los posts tipo imagen del usuario. 

Considerando que he utilizado una función asíncrona para consumir la API, he configurado una pequeña animación que se muestra en la página hasta que no haya obtenido una respuesta correcta desde la API. De esta forma, el contenido no carga vacío y el primer renderizado se puede hacer más rápido, sin tener que esperar la respuesta de la API. He implementado esta funcionalidad en las dos páginas que lo requerían.

Una vez acabado, he podido aprovechar las horas que me restaban para planificar los siguientes días. Tengo muchas ganas de compartir con vosotros los nuevos proyectos en los que estaré trabajando próximamente. En este caso, al tratarse de proyectos personales, no tendré ningún problema para compartir el código que vaya desarrollando.

Un día más, seguimos "pusheando".

## Reto de programación, día 7/100.

Ya es lunes, ha pasado una semana desde que empecé el reto. Hoy toca mejorar la carga de la página, acabando de solucionar los problemas que tenía de base. Para este cometido estoy solo, ya que los compañeros han empezado vacaciones. Durante el día de hoy, he conseguido solucionar todos los puntos de la checklist. Ahora la página tiene una valoración de 99 y 100 respectivamente. Siempre se puede mejorar en algunos aspectos, pero por ahora estoy contento con el resultado. 

La intención era hacer esta faena después de añadir las últimas publicaciones de Instagram, pero debido a una discrepancia con la contraseña, se tendrá que posponer hasta que nos la proporcionen.

El día acaba con un par de horas de formación. Actualmente, estoy acabando el curso de freecodecamp.org llamado Quality Assurance Certification. El curso trata sobre el uso de testing, como de buenas prácticas con Javascript.

Continuamos para bingo.

## Reto de programación, día 6/100.

Domingo, día de descanso para algunos, una oportunidad para crecer para otros. Empezamos el día acabando de retocar los detalles faltantes de la peluquería, como responsive, ajuste de animaciones, etc... Cada vez va tomando más forma, y de hecho ya está en la etapa pre-producción. Desplegamos la página en Vercel para probar que todo estuviera en orden, para mi sorpresa, no ha habido ningún error en el despliegue, y funciona de 10 en todos los dispositivos. 

Tras subir la página, es momento de auditarla para medir el tiempo de carga. Varias herramientas de analisis indican que hay ciertos factores a mejorar, por lo que tras anotarlos en un checklist, me pongo a arreglarlos uno a uno.

El día acaba con varios puntos pendientes de solucionar, aunque por hoy es suficiente.

¡Hasta mañana!


## Reto de programación, día 5/100.

Llega el fin de semana, un fin de semana caluroso, la oportunidad perfecta para continuar avanzando enfrente del aire acondicionado :)

Hoy toca hacer algo divertido, y challenging. Es momento de solventar los problemas para mergear los tres repositorios de la peluquería, ya que el lunes debemos mostrar una primera versión, antes de pasar la página a producción. Sorprendentemente, mi cometido apenas duró un par de horas. Una vez resueltos los conflictos, actualicé el repositorio principal con el trabajo que hicimos conjuntamente. 

Para este trabajo, nosotros mismos debíamos diseñar las diferentes secciones de la página, por lo que pasé las 6 horas siguientes, planteando cambios que homogeneizaran el diseño realizado por los tres. Es muy curioso como con habilidades parecidas, cada diseño es un mundo. Siempre es más sencillo, y te evita muchos problemas, trabajar sobre un diseño general de la página. 

Hasta aquí hemos llegado, keep coding keep pushing forward.


## Reto de programación, día 4/100.

Empezamos el viernes fuerte. Al iniciar el día, recibo una llamada de uno de mis primeros clientes, solicitando un cambio en el diseño de la página que le hice en su momento. La web lleva publicada desde 2018, y hay bastante información que se ha de actualizar. Hasta ahora la página, ha estado posicionada en el número 1 para la palabra clave principal de la página, pero desde hace unos meses, las SERPS han cambiado. 

Después de hablar con un compañero diseñador, establecimos un precio por el diseño que el cliente aceptó. Teníamos claro que estabamos buscando un diseño que permitiera duplicar la información que se ofrece en la página. 

El resto del día, me ocupé de analizar la competencia y de diseñar un plan estratégico para devolver la página dónde ha estado casi 5 años. Ahora falta ponerlo en práctica, e iniciar con la actualización de la web. 

Mica a mica, seguimos avanzando!

## Reto de programación, día 3/100.

Continuamos con el reto. Ayer me propusieron una serie de ejercicios para incluirlos en el repo. Para mi sorpresa, han sido bastante fáciles y en un par de horas, he podido acabarlos todos. 

Considerando la dificultad, voy a hacer ejercicios algo más avanzados que me puedan aportar cosas nuevas. Aunque de momento, iré completando y subiendo cada uno de los ejercicios que suba diariamente Codr. 

Mi intención, también era maquetar desde cero una plantilla creada en HTML + CSS + JS. La idea era rehacer la plantilla con un framework actual, en concreto Nuxtjs. En este caso, la plantilla contiene funcionalidades que no están implementadas, tan solo está el diseño hecho, por lo que voy a hacerlas funcionar valgase la redundancia.

A partir de mañana, podréis ver una primera versión subida este repositorio de GitHub.

Keep coding, and be happy!



## Reto de programación, día 2/100.

Este segundo día ha sido intenso :D. Comencé modificando un pequeño detalle en la sección de reservas de la peluquería. Una vez acabado, recibí la llamada de un cliente para añadir un nuevo feature en una página ya en producción. 

Debido a la urgencia, prioricé la nueva funcionalidad antes que la plantilla que tenía preparada. Debía hacer una modificación para que el usuario administrador pueda editar, añadir y eliminar FAQs en la página. Finalmente, conseguí acabar, testear e integrar la nueva funcionalidad en 7 horas. 

Después de la vorágine de código, tomé la decisión de subir en este Mark Down mi progreso diario. Considero que de esta forma vais a tener más fácil el acceso al código que vaya realizando, a la par que no sobresaturo mi Linkedin. 

Para mañana, planeo convertir la plantilla seleccionada a Nuxt, veré si puedo añadirle alguna funcionalidad extra para aportar valor a la conversión. Por otro lado, empezaré con los ejercicios compartidos en Codr.

¡Hasta mañana!


## Reto de programación, día 1/100.

Primer día, primer proyecto. Empezamos el reto con una web para una peluquería en Nuxt.js. En este caso, tan solo me toca acabar una parte de la página, en concreto un sistema de varios calendarios para poder gestionar las reservas de los diferentes peluqueros de forma totalmente autonoma y segura.

El siguiente paso será conectar con la API de Instagram para poder mostrar las últimas fotos publicadas, de forma que la página cargue dinámicamente los últimos 3 posts en la landing.

Tan pronto la página este en producción, podréis encontrar el código en mi GitHub.

Continuando el día, he elegido varias plantillas de diseño que utilizaré para esta primera fase del reto. Mi intención es maquetar usando diferentes tecnologías varias plantillas para compartirlas con aquel que le haga falta. Estaré utilizando React, Next, Vue y Nuxt como fw para las plantillas, e intentaré abarcar la mayor cantidad de sectores posibles.

Hasta aquí por hoy, mañana continuamos.

Don't be lazy and keep coding!