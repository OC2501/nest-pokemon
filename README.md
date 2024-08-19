<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio
2. Ejecutar
```

yarn install
```

3. tener nest CLI instalado
```

npm i @nestjs/cli
```


4. levantar la base de datos
```

docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. llenar las variables de entorno definidas en el ```.env```
   
7. ejecutar la aplicacion en dev:
```
yarn start:dev
```

8. Reconstruir la Base de datos con la semilla
```

localhost:3000/api/v2/seed
```

# Stack usado
* MongoDB
* Nest

# Tips
 ejecutar el comando para volver al ultimo commit
 ...

git checkout -- .

 ... 