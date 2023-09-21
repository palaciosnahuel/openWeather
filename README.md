# OpenWeather Api Exercice.
Ejercicio realizado con la api de OpenWeather.

Online en :
https://thriving-sunburst-6c3b2e.netlify.app/

#### Consigna:
Desarrollar una app full client-side que permita visualizar el pronóstico climático actual y de los
próximos 5 días en la ubicación actual y permita visualizar el pronóstico de otras 5 ciudades
seleccionables.

###### _**Autor Nahuel Palacios.**_

## Instalación🔧

* 📁 Clonar e installar dependencias.

```bash
$ git clone https://github.com/palaciosnahuel/openWeather.git
npm install 
```

* _**🔑 SET Open weather API key:**_

Editar el archivo **.env** en el root del proyecto y agregar al campo **REACT_APP_OPEN_WEATHER_API_KEY** su key. 
https://openweathermap.org/price


## Ejecución 🚀

**Run Server (en carpeta "back")**

```cmd
npm start
```

## Tecnologias 🛠️

#### Frontend
* [React](https://es.reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
* [ChakraUI](https://chakra-ui.com/)
* [React Query](https://react-query.tanstack.com/)
* [React Geolocation](https://www.npmjs.com/package/react-hook-geolocation)


## Notas

Está realizado con **ReactJs** para el renderizado con **Typescript**.
Se utiliza **React-Query** para consultas https y **ChakraUI** como frammework de css.

Estructura:
* src
  * components **(Componentes de la app).**
  * api **(Api calls).**
  * pages **(Layouts).**
  * utils **(Helpers).**

