# Despliegue de Aplicación en "Cluster" con NodeJS y Express

Este documento detalla el proceso de despliegue de una aplicación utilizando **Node.js** y **Express** en un entorno **cluster**. Se incluyen pruebas realizadas tanto sin cluster como con cluster activado, así como pruebas de rendimiento utilizando **loadtest** y administración de procesos con **PM2**.

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Pruebas del Despliegue de la Aplicación sin Cluster](#pruebas-del-despliegue-de-la-aplicación-sin-cluster)
3. [Pruebas del Despliegue de la Aplicación con Cluster](#pruebas-del-despliegue-de-la-aplicación-con-cluster)
4. [Pruebas con Loadtest](#pruebas-con-loadtest)
5. [Pruebas con PM2](#pruebas-con-pm2)
6. [Respuestas a las Cuestiones](#respuestas-a-las-cuestions)


## Introducción

En este proyecto, se ha implementado y desplegado una aplicación web utilizando **Node.js** y **Express**. El despliegue ha sido probado tanto en un entorno sin cluster como con cluster activado para evaluar el rendimiento y la eficiencia de la aplicación. Además, se han utilizado herramientas como **loadtest** para pruebas de carga y **PM2** para gestionar los procesos de la aplicación.

## Pruebas del Despliegue de la Aplicación sin Cluster

En esta sección se detalla el proceso de despliegue de la aplicación en un entorno sin cluster. Este es el entorno básico, donde la aplicación se ejecuta en un solo proceso.

### Pasos Realizados:

1. **Instalación de Dependencias**: Se instalaron las dependencias necesarias utilizando `npm install`.
2. **Configuración del Servidor**: El servidor se configuró para escuchar en el puerto `3000`.
3. **Pruebas de Funcionamiento**: Se probó el servidor para asegurarse de que respondiera correctamente en el navegador.

![image](https://github.com/user-attachments/assets/3530ef67-9c17-4ff9-bec3-7263f263c743)

4. **Prueba de Carga**:Realizar una prueba de carga para evaluar el rendimiento sin clústeres.

![image](https://github.com/user-attachments/assets/44abbd0e-571a-4a65-8ca7-208fba7e6d75)

## Pruebas del Despliegue de la Aplicación con Cluster

El entorno cluster permite que Node.js aproveche múltiples núcleos del CPU, mejorando el rendimiento de la aplicación en situaciones de alta carga.

### Pasos Realizados:

1. **Configuración del Cluster**: Se utilizó el módulo cluster de Node.js para crear múltiples procesos de trabajadores.
2. **Configuración de Workers**: El número de trabajadores se ajustó al número de núcleos disponibles en la máquina..
3. **Pruebas de Funcionamiento**: Se verificó que la aplicación respondiera correctamente con múltiples trabajadores y que las peticiones se distribuyeran entre ellos.

![image](https://github.com/user-attachments/assets/70aacf99-ac87-4c98-a3ab-34fdd3de92d2)


4. **Prueba de Carga**:Realizar una prueba de carga para evaluar el rendimiento con clústeres.

![image](https://github.com/user-attachments/assets/2a39c62a-95e4-4dc9-a3c4-e8b4f401e11c)

## Pruebas con Loadtest

Se utilizó la herramienta **loadtest** para simular múltiples peticiones concurrentes a la aplicación y evaluar su rendimiento tanto en el entorno sin cluster como en el entorno con cluster.

### Pasos Realizados:

1. **Instalación de Loadtest**:

   Primero, se instala la herramienta **loadtest** globalmente en el sistema:

   ```bash
   npm install -g loadtest

2.**Ejecución de la prueba de carga:**:

Con cluster

![image](https://github.com/user-attachments/assets/e419e08c-0069-42fb-9549-8e0954398c97)

Sin cluster

![image](https://github.com/user-attachments/assets/bc8a4e45-184b-450e-a098-3f9941f58c08)

## Pruebas con PM2

**PM2** se utilizó para la gestión de procesos en producción, tanto para la versión sin cluster como con cluster.

### Pasos Realizados:

1. **Instalación de PM2**:

   Primero, se instala **PM2** globalmente en el sistema:

   ```bash
   npm install pm2 -g

2. **Despliegue sin cluster usando PM2:**

![image](https://github.com/user-attachments/assets/9b043b6c-5f21-444c-8e02-a1e021978ab8)

![image](https://github.com/user-attachments/assets/b5245219-396e-458c-b07e-253178ceeb3e)

3. **Despliegue con cluster usando PM2:**

![image](https://github.com/user-attachments/assets/1110aa4f-0437-40b5-b8dd-75a8fb5f8fe8)

![image](https://github.com/user-attachments/assets/149aa01a-822f-469d-a2b6-a1dcc0edf7a1)

3. **Creación archivo ecosystem y contenido del mismo:**

![image](https://github.com/user-attachments/assets/073785ca-7d4e-434e-bac4-dbcdd4f774d5)

![image](https://github.com/user-attachments/assets/1ec21550-febb-49db-89cd-89e4f5854e02)

4. **Ejecución del archivo:**

![image](https://github.com/user-attachments/assets/c5875fdd-308f-4435-a242-da99175d61b5)

4. **Investigación de comandos:**

-pm2 ls
Muestra una lista de todas las aplicaciones gestionadas por PM2. En esta lista puedes ver información clave sobre cada aplicación, como el nombre, el estado, el ID del proceso, el número de instancias, la memoria utilizada, entre otros.
![image](https://github.com/user-attachments/assets/d3c30bbd-2603-4900-84f8-1d94b9da9392)

-pm2 logs
Te permite ver los logs en tiempo real de todas las aplicaciones gestionadas por PM2.
![image](https://github.com/user-attachments/assets/4c16a9c0-daab-4bdb-b5f4-f024c18a5054)

-pm2 monit
Abre una interfaz de monitoreo en tiempo real que muestra el uso de CPU, memoria y otra información relacionada con el rendimiento de tus aplicaciones.
![image](https://github.com/user-attachments/assets/23c27342-1481-4ebc-a1cf-c3e1a5e0902a)

## Respuestas a la cuestión

El uso de clústeres en una aplicación puede mejorar el rendimiento en muchas situaciones, pero no siempre es la mejor solución. Si la cantidad de solicitudes concurrentes es baja, el beneficio de distribuir la carga entre varios procesos puede no ser significativo. Además, la coordinación entre procesos requiere recursos adicionales, lo que puede generar una sobrecarga innecesaria y reducir la eficiencia en ciertos escenarios. También influye la naturaleza de la aplicación; si el código no está optimizado para la concurrencia o si existen operaciones que bloquean el rendimiento, el uso de clústeres podría incluso empeorar los tiempos de respuesta. Por estas razones, es esencial realizar pruebas exhaustivas con distintas configuraciones para identificar la mejor estrategia según la demanda y los recursos disponibles.


















