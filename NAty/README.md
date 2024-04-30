# Documentación de Mi Aplicación Node.js con MongoDB y Variables de Entorno

Esta es una guía de referencia para configurar y ejecutar una aplicación Node.js que utiliza una base de datos MongoDB y variables de entorno para la configuración.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/)
- MongoDB: [Descargar e instalar MongoDB](https://www.mongodb.com/try/download/community)
- Dotenv: 

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <url_del_repositorio>
   ```

2. Ve al directorio de la aplicación:

   ```bash
   cd nombre_de_la_app
   ```

3. Instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

## Configuración de la Base de Datos

1. Asegúrate de tener MongoDB instalado y en ejecución en tu máquina local.

2. Crea una base de datos en MongoDB para tu aplicación.

## Configuración de Variables de Entorno

1. Crea un archivo `.env` en el directorio raíz de tu aplicación.

2. Define las variables de entorno en el archivo `.env`. Por ejemplo:

   ```
   MONGODB_URI=mongodb://localhost:27017/nombre_de_la_base_de_datos
   ```

3. Asegúrate de no incluir el archivo `.env` en tu repositorio Git para mantener segura la configuración sensible para ello utiliza `.gitignore`.

## Ejecución de la Aplicación

Para iniciar la aplicación, ejecuta el siguiente comando en el directorio raíz de tu aplicación:

```bash
npm run dev
```

La aplicación se ejecutará en el puerto especificado en el archivo .env. Abre tu navegador y ve a http://localhost:3000 (o al puerto que hayas especificado) para ver la aplicación en funcionamiento.

## Estructura de Carpetas

```
└── 📁intechmom-reto
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── server.js
    └── 📁src
        └── 📁config
            └── db.config.js
        └── 📁models
            └── users.js
        └── 📁routers
            └── user.js
        └── 📁validations
            └── post.user.js
```

## Video de funcionamiento


