Web App Full Stack Base - Ionic frontend
TP - Desarrollo de aplicaciones web multiplataforma
=======================

*Ayudaría mucho si apoyaras este proyecto con una ⭐ en Github!*

## Comenzando 🚀

Esta sección es una guía con los pasos escenciales para que puedas poner en marcha la aplicación.


<details><summary><b>Mira los pasos necesarios</b></summary><br>

### Instalar las dependencias

Para correr este proyecto es necesario que instales `Docker` y `Docker Compose`. 

En [este artículo](https://www.gotoiot.com/pages/articles/docker_installation_linux/) publicado en nuestra web están los detalles para instalar Docker y Docker Compose en una máquina Linux. Si querés instalar ambas herramientas en una Raspberry Pi podés seguir [este artículo](https://www.gotoiot.com/pages/articles/rpi_docker_installation) de nuestra web que te muestra todos los pasos necesarios.

En caso que quieras instalar las herramientas en otra plataforma o tengas algún incoveniente, podes leer la documentación oficial de [Docker](https://docs.docker.com/get-docker/) y también la de [Docker Compose](https://docs.docker.com/compose/install/).

Continua con la descarga del código cuando tengas las dependencias instaladas y funcionando.

### Descargar el código

Para descargar el código, lo más conveniente es que realices un `fork` de este proyecto a tu cuenta personal haciendo click en [este link](https://github.com/fabianbanderasb/TP-DAM). Una vez que ya tengas el fork a tu cuenta, descargalo con este comando (acordate de poner tu usuario en el link):

```
git clone git@github.com:fabianbanderasb/TP-DAM.git
```

> En caso que no tengas una cuenta en Github puedes clonar directamente este repo.

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr el comando `docker-compose up` desde la raíz del proyecto. Este comando va a descargar las imágenes de Docker de node, de typescript, de la base datos y del admin de la DB, y luego ponerlas en funcionamiento. 

Para acceder al cliente web ingresa a a la URL [http://localhost:8100/home](http://localhost:8100/home) y para acceder al admin de la DB accedé a [localhost:8001/](http://localhost:8001/). 

Si pudiste acceder al cliente web y al administrador significa que la aplicación se encuentra corriendo bien. 

> Si te aparece un error la primera vez que corres la app, deteńe el proceso y volvé a iniciarla. Esto es debido a que el backend espera que la DB esté creada al iniciar, y en la primera ejecución puede no alcanzar a crearse. A partir de la segunda vez el problema queda solucionado.

</details>

Continuá explorando el proyecto una vez que lo tengas funcionando.

### Imágenes

```
1
```
![Imagen](https://github.com/fabianbanderasb/TP-DAM/Device.png)
```
2
```
![Imagen](https://github.com/fabianbanderasb/TP-DAM/Home.png)
```
3
```
![Imagen](https://github.com/fabianbanderasb/TP-DAM/LOG_Riegos.png)
```
4
```
![Imagen](https://github.com/fabianbanderasb/TP-DAM/Mediciones.png)
### Existen 6 endpoints:

```
GET: http://localhost:8000/devices
```

```
GET: http://localhost:8000/devices/:idDevice
```

```
GET: http://localhost:8000/lastmessure/:idDevice
```

```
POST: http://localhost:8000/logriegos 
```

```
POST: http://localhost:8000/messures 
```

```
GET: http://localhost:8000/devices/:idDevice/messures/
```

```
GET: http://localhost:8000/logriegos/:electrovalvulaId
```

### Se incorpora:


* 1 directiva de atributo(highlight.directive.ts)

* 1 pipe custom(formato-fecha.pipe.ts, mediciones.page.html y log-riegos.page.html).

* 2 Directivas estructurales
(ngFor: listdevice.component.html, mediciones.page.html y log-riegos.page.html - ngIf:  log-riegos.page.html)

* 1 servicio para conectar a la API (device.service.ts).

* 1 Api en Express con comunicación a la base de datos.




## Muestas de agradecimiento 🎁

Si te gustó este proyecto y quisieras apoyarlo, cualquiera de estas acciones estaría más que bien para nosotros:

* Apoyar este proyecto con una ⭐ en Github para llegar a más personas.
* [Puedes conectar en Linkedin](https://www.linkedin.com/in/fabian-alejandro-banderas-benitez-8257a519b/) y dejar algún mensaje.
* Compartir este proyecto con otras personas.


## Autor 👥

La colaboración principal fue realizada por:

* **[Fabián Banderas](https://github.com/fabianbanderasb)**: Ejecución y modificación.

## Licencia 📄

Este proyecto está bajo Licencia ([MIT](https://github.com/fabianbanderasb/TP-DdA2/blob/main/LICENSE.md)). Puedes ver el archivo [LICENSE.md](https://github.com/fabianbanderasb/TP-DdA2/blob/main/LICENSE.md) para más detalles sobre el uso de este material.

---

**Copyright © Fabián Alejandro Banderas Benítez 2023** ⌨️ [**Website**](https://www.fabianbanderas.com) ⌨️ [**Linkedin**](https://www.linkedin.com/in/fabian-alejandro-banderas-benitez-8257a519b/) ⌨️ [**Github**](https://github.com/fabianbanderasb) 
