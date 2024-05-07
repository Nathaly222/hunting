## Prisma ORM
### Introduccion.
### Craer un Proyecto en Prisma.
Prisma puede interactuar con bases de datos y ser utilizado tanto en proyectos JavaScript como en proyectos TypeScript. La elección de usar TypeScript con Prisma es común y proporciona beneficios adicionales en términos de desarrollo, incluyendo la verificación estática de tipos y autocompletado mejorado en entornos de desarrollo.
Para comenzar a levantar el proyecto debemos instalar el paquete de nest en clases levanatamos el proyecto comenzando por nest en la CLI. 

### Desarrollo.
Utilizar Prisma con Nest.js nos ofrece varios beneficios significativos especialmente aquellas basadas en Node.js.
despues levantantamos:
* `nest new hunting`: Este comando crea un nuevo proyecto Nest.js llamado "hunting". Utiliza la CLI (Command Line Interface) de Nest.js para generar una estructura básica de proyecto que incluye un conjunto inicial de archivos y directorios necesarios para desarrollar una aplicación Nest.js. Este comando también instala las dependencias necesarias del proyecto.
* `npm install prisma `: Este comando instala la biblioteca de Prisma en el proyecto. Prisma es un ORM que proporciona una capa de abstracción para interactuar con la base de datos desde la aplicación. Instalar Prisma permitirá trabajar con bases de datos de manera más eficiente y simplificada.
* `npm install @prisma/client `: Esta instrucción instala el cliente de Prisma, @prisma/client,  una biblioteca que permite interactuar con la base de datos utilizando Prisma. El cliente de Prisma proporciona métodos y funciones para ejecutar consultas y manipular datos en la base de datos de forma segura y eficiente.
* `npx prisma init`: Al ejecutar npx prisma init, Prisma configurará los archivos de configuración necesarios para la base de datos, como schema.prisma. Este archivo define el modelo de datos de la aplicación y establece la conexión con la base de datos. Durante este proceso, Prisma guiará para configurar y establecer la conexión con la base de datos, lo que incluye seleccionar el tipo de base de datos (por ejemplo, PostgreSQL, MySQL, SQLite, etc.) y proporcionar los detalles de conexión necesarios.

Vamoas al proyecto y vamos a poder ver todas las carpetas creadas y en algunos modulos como prisma.service y en main. ts  agregamos un poco de codigo mas que nos va a ser util . 
Buscamos en nuestro navegador `Railway` Accedemos al sitio web de Railway y creamoss un nuevo proyecto.
Railway generará un código de conexión que necesitamos copiar e integrar en nuestro proyecto,  en archivos de configuración de `schema.prima` En schema.prisma, definimos  el esquema de  base de datos utilizando el lenguaje de modelado de Prisma. Aquí podemos crear tablas, definir relaciones entre entidades y configurar otros aspectos, podemos también utilizar `seed.ts` para poblar nuestra base de datos con datos de prueba.
Railway se encargará de desplegar la aplicación en la nube, incluyendo la base de datos PostgreSQL.

### Conclusion.
#### Prisma con TypeScript y Nest.js:
Prisma es una herramienta versátil que puede interactuar con bases de datos y se puede utilizar tanto en proyectos JavaScript como en proyectos TypeScript.
La elección de usar TypeScript con Prisma es común y ofrece beneficios adicionales como verificación estática de tipos y autocompletado mejorado en entornos de desarrollo.
* Configuración Inicial del Proyecto:
Para comenzar un proyecto con Nest.js y Prisma, primero instalamos las dependencias necesarias, incluyendo el paquete de Nest.js.
Utilizamos comandos como nest new para crear un nuevo proyecto Nest.js y npm install prisma para instalar la biblioteca de Prisma en el proyecto.
* Uso de Prisma en el Proyecto:
Instalamos el cliente de Prisma (@prisma/client) para interactuar de manera eficiente y segura con la base de datos desde la aplicación.
Configuramos Prisma utilizando npx prisma init para establecer la conexión con la base de datos y definir el modelo de datos en schema.prisma.
* Despliegue en Railway:
Utilizamos Railway como plataforma de alojamiento en la nube para desplegar nuestra aplicación.
Railway genera un código de conexión que integramos en nuestro proyecto para establecer la conexión con la base de datos PostgreSQL.
Definimos el esquema de la base de datos en schema.prisma y podemos utilizar seed.ts para poblar la base de datos con datos de prueba.
Railway se encarga del despliegue de la aplicación y la base de datos en la nube, proporcionando una plataforma completa para el desarrollo y la ejecución de la aplicación.

