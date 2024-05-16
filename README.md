# Documentación de Mothership-back

## Notas Adicionales 🚩🚩🚩

- Mejora de la conexión del mock en generar respuesta a la solicitud POST.
- Actualmente, solo está funcionando la primera pantalla / sección llamada "ecommerce"

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/)
- MongoDB: [Descargar e instalar MongoDB](https://www.mongodb.com/try/download/community)

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
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/nombre_de_la_base_de_datos
   ```

3. Asegúrate de no incluir el archivo `.env` en tu repositorio Git para mantener segura la configuración sensible.

## Ejecución de la Aplicación

Para iniciar la aplicación, ejecuta el siguiente comando en el directorio raíz de tu aplicación:

```bash
npm run dev
```

La aplicación se ejecutará en el puerto especificado en el archivo .env. Abre tu navegador y ve a http://localhost:30000

## Estructura de Carpetas

```
└── 📁mothership-back
    └── .env
    └── .env.example
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── requests.http
    └── 📁src
        └── 📁api
            └── 📁controllers
                └── 📁Campaign
                    └── delete.js
                    └── get.js
                    └── patch.js
                    └── post.js
                └── 📁ecommerce
                    └── createElevatorPitch.js
                    └── mockElevatorResponse.js
            └── 📁docs
                └── 📁api
                    ├── examples
            └── 📁routes
                └── user.router.js
            └── 📁utils
                └── helpers.js
                └── index.js
            └── 📁validators
                └── post.campaign.js
                └── post.elevatorPitch.js
        └── 📁config
            └── db.config.js
            └── index.js
        └── 📁models
            └── campaign.js
            └── elevator-pitch.js
            └── users.model.js
        └── 📁utils
            └── app.js
```
