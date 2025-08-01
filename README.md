# 📚 API de Libros con Node.js, Express y MongoDB

Esta es una API REST para gestionar un CRUD completo de libros, desarrollada con Node.js y Express, con persistencia en MongoDB. La base de datos se ejecuta dentro de un contenedor Docker para facilitar el despliegue y la administración.

---

## 🚀 Características

- CRUD completo: crear, leer, actualizar y eliminar libros
- Validación de IDs MongoDB en middleware
- Uso de rutas separadas para organizar el código
- Contenerización de MongoDB con Docker
- Pruebas de endpoints con Postman

---

## 📋 Modelo de Libro

- `title`: string (título del libro)
- `author`: string (autor)
- `genre`: string (género literario)
- `publication_date`: string (fecha de publicación)

---

## 🛠️ Tecnologías usadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Postman (para pruebas)

---

## 🔧 Instalación y uso

1. Clonar el repositorio

```bash
git clone https://github.com/Drsprog/node-api-mongo
cd api-libros-node
