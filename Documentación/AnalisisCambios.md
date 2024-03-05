# Análisis de Cambios

## Proyecto Bolsa NY

### COMPONENTES DE CONFIGURACION 

CI-RegistroDeAcciones-001
CI-InterfazUsuario-002

### DESCRIPCIÓN

#### CI-RegistroDeAcciones-001
Se trata de la logica del programa, hace referencia a los datos que son ingresados y registrados en la aplicación por parte del usuario, que posteriormente se registran en pantalla.

#### CI-InterfazUsuarioRegistroDeAcciones-002
Se trata de la interfaz gráfica con la que interactua el usuario, en este caso donde se realiza el ingreso de la información de compra y se presenta la informacion recopilada previamente. 
![](image-1.png)

#### CI-ListaDeRegistroDeAcciones-003
Las compras de acciones registradas por el usuario se muestran en una lista dentro del programa pero no mantienen persistencia.


### CAMBIOS 

#### CI-InterfazUsuarioRegistroDeAcciones-004
#### Cambio adaptativo:
A partir de la recoleccion de datos que el usuario proporciona para el registro de compra de acciones, se necesita mostrar el porcentaje de cambio y la ganancia/perdida de las acciones invertidas

![image](https://github.com/CATEVA26/ProyectoBolsa/assets/144194026/04cb42d5-29d0-4517-8f99-69a13648361a)



#### CI-InterfazUsuarioRegistroDeAcciones-005
#### Cambio adaptativo:
A partir de la recoleccion de datos que el usuario proporciona para el registro de compra de acciones, el historial de compras deberá poder ordenarse


![image](https://github.com/CATEVA26/ProyectoBolsa/assets/144194026/c8f4daf5-e763-4c70-83df-636d16a0c6f0)




#### CI-PersistenciaDeListaDeRegistroDeAcciones-006
#### Cambio adaptativo:
A partir de los datos que el usuario proporciona para el registro de compra de acciones, el historial de compras deberá poder mantenerse en el tiempo

Se coloco 3 ordenes: Por nombre, por precio y por cantidad
Por nombre:
![image](https://github.com/CATEVA26/ProyectoBolsa/assets/144194026/0d885c9b-ebde-4dc8-9204-ada70764ee6e)

Por cantidad:
![image](https://github.com/CATEVA26/ProyectoBolsa/assets/144194026/33721bd5-8c51-4bc4-a2ac-a0a4792da7f2)



