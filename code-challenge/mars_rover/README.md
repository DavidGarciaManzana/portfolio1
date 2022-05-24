# pluto_rover

*Que mejoraría en mi código*
1.- Me gustaría hacer que se ejecute todo recibiendo los parámetros específicos, sin importar que tan larga sea la instrucción (recibiendo un array), si bien configure todo para que fuera funcional me hizo falta tiempo para crear una función “madre” que ejecutara todo como conjunto, además de que no se especifica como se probaría el código, si enviando un array o un string o de alguna otra manera.

2.-Colocar el obstáculo del alien en la cuadricula, o poner varios en posiciones especificas para que cuando el rover los encuentre se detenga, gracias al tiempo solo lo logre activar el obstáculo si el mismo usuario envía la información de que el rover tiene enfrente el obstáculo

3.-Me gustaría refactorizar mi código, hacerlo mas simple y buscar soluciones para hacerlo mas corto, esto continuando con las pruebas para asegurarme de que siempre funcione bien.

*IDEAS*
1.- Me gustaría agregar una interfaz para el usuario, aunque sea pequeña

2.- Creo que seria muy conveniente recibir alguna forma de testear el código, esto para saber exactamente que parámetros voy a recibir y como debería retornar la información.

*Problemas con los que me tope y como los solucione*
1.-Me tope con el problema de recibir parámetros como F,B,N,S,E,W como booleans, generándome algunos errores, lo solucione cambiando todo a strings.
2.-Al usar return en la función para detectar obstáculos(alien), esta no se detenia y me regresaba la posicion como si no hubiese encontrado nada, lo solucione usando “throw”
