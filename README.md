# TCIT Challenge Posts UI

Aplicación de frontend que consume una API y permite manejar posts. Fue desarrollada como parte de un desafío durante el proceso de postulación a TCIT.

## Componentes 🧩

### Pages
- **Home**: componente que implementa la página Home de la app.

### Components
- **PostsView**: componente definido para representar la vista de los posts, para ello integra los componentes `PostsFilter`, `PostsList` y `PostsForm`.
- **PostsFilter**: componente que implementa el filtro de posts.
- **PostsList**: componente que implementa la tabla de posts.
- **PostsForm**: componente que implementa el formulario para crear posts.

### Services
- **postsService**: servicio que encapsula la lógica de peticiones a la API de posts.

### Store
- **store**: store implementado con redux para manejar el estado global de la app.
- **postsSlice**: parte del estado correspondiente a los posts. Contiene las acciones necesarias para manejar el estado de los posts.

## Instrucciones para el ambiente 📝

### Instalar dependencias

Se requiere tener instaladas las siguientes dependencias:

- node v20.15.0
- npm 10.8.1
- ejecutar `npm install` para instalar las dependencias del proyecto.

### Configurar app

- Se debe contar con un archivo `.env.local` en la raiz del proyecto, que contenga la siguiente variable de ambiente para la conexión con la API:
    ```
    VITE_API_BASE_URL=http://localhost:3000
    ```

### Levantar el servidor local
Finalmente puedes utilizar el siguiente comando para levantar la app en el ambiente local.
```
npm run dev
```
