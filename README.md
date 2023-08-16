# 100 days coding challenge

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