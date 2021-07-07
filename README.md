# Practicando expresiones regulares en atributo pattern

Establece el atributo _pattern_ adecuado para campo del formulario, según los requisitos

## Nombre

Carácteres en minúsculas, excepto el primero, que debe ser en mayúsculas

* Valida: Maria
* No valida: maria
  
# Apellidos

El usuario puede poner uno o dos apellidos, separado por un espacio
La primera letra de cada apellido, en mayúsculas

* Valida: Ruiz Diaz, Ruiz
* No valida: Ruiz diaz

# DNI

Dni del usuario. 8 números y letra en mayúsculas.

* Valida: 40536567U
* No Valida: 4034511I, 40543456u

# Dinero en efectivo

Indica cuanto dinero en efectivo lleva la persona encima.

* Valida: 35.22, 31.2, 31.20, 30, 200
* No Valida: 35. , -3, a35

# Número de teléfono móvil

Podemos introducir un número de telefono móvil español. 
Los móviles en España empiezan por 6 o 7, tienen 9 dígitos.
Opcionalmente, pueden ir precedidos por el prefijo internacional +34

* Valida: 666555444, 766555333, +34621234234
* No Valida: 522123123, 34666777888, +666777888

# Mascota

La persona puede introducir el nombre de su mascota.
La mascota debe tener entre 4 y 20 carácteres. No usar _maxlength_ ni
_minlength_; usar cuantificadores del __pattern__

* Valida: Loki, loki, LOKI, Canela
* No valida: Lok, CanelaCanelaCanelaCanelaCanelaCanela, Loki2
