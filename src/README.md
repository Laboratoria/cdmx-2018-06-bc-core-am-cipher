#Cifrado Caesar

## Preámbulo
Mayra Rubí espera con ansias el cumpleaños de su novio José Carlos Manuel (con quien lleva 3 años viviendo) y para que este no descubra sus planes de fiesta sorpresa solicita un portal web para codificar los mensajes entre sus invitados.

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

##Definicion del proyecto y objetivos

Partiendo de que nadie guarda mejor nuestros secretos como un BF opte por la solucion de un codigo simple y sencillo ejecutable en cualquier computadora de escritorio.
El objetivo se cumple al intoducir el texto a cifrar e indicar el número que indicara la llave para codificar despues. 
Esta plataforma esta diseñada para un circulo especifico de amigos pero puede ser abierta en un futuro al publico en general (Con obvias mejoras)