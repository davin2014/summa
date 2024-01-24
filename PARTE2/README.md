

```markdown
# Parte 2

Un sistema de información cuenta con tres agentes (A, B y C) cada agente cumple con dos funcionalidades:
Funcionalidad 1: Obtener media
-	Definir la función getMedia(Lista de números reales)  valor de retorno: número real
-	Agente A: Obtener la media aritmética o promedio
-	Agente B: Obtener media armónica  
-	Agente C: Obtener mediana
Si la cantidad de datos es impar, la mediana es el valor que queda en la mitad al ordenar los datos de menor a mayor.
Si la cantidad de datos es par, la mediana es el promedio de los dos valores que quedan al centro al ordenar los datos de menor a mayor.





Funcionalidad 2: Escalera
-	Definir función getStaircase(número entero)  valor de retorno: cadena de texto
-	Agente A: 
La base y altura son ambas iguales a n. Se dibuja usando el símbolo # símbolos y espacios. La última línea no va precedida de ningún espacio. Escriba un programa que imprima una escalera de tamaño n. Formato de entrada: Un único entero, n, que denota el tamaño de la escalera.
Restricciones:  0 < n < 100.  La escalera debe estar alineada a la derecha.
 
(Escalera de tamaño n = 4)

-	Agente B:
La cima y altura son ambas iguales a n. Se dibuja usando el símbolo # símbolos y espacios. La primera línea no va precedida de ningún espacio. Escriba un programa que imprima una escalera de tamaño n. Formato de entrada: Un único entero, n, que denota el tamaño de la escalera.
Restricciones:  0 < n < 100.  La escalera debe estar alineada a la derecha.
 
(Escalera de tamaño n = 4)

-	Agente C:
La base y cima son ambas iguales a n. Entre los extremos superior e inferior debe haber una distancia igual a n con el centro. Se dibuja usando el símbolo # símbolos y espacios. La línea central no va precedida de ningún espacio. Escriba un programa que imprima una escalera de tamaño n. Formato de entrada: Un único entero, n, que denota el tamaño de la primera y última línea de la escalera.
Restricciones:  0 < n < 100.  La escalera debe estar alineada al centro.
 
(Escalera de tamaño n = 4)


## Instalación



```bash
pip install -r requirements.txt
python main.py
```

## Uso

from src.parte2.agentes import Agentes
from src.parte2.escalera import Escalera

if __name__ == '__main__':
    numeros = [1.0, 2.0, 3.0, 4.0, 5.0]
    print(Agentes.getMediaA(numeros))
    print(Agentes.getMediaB(numeros))
    print(Agentes.getMediaC(numeros))

    n = 5
    print("")
    print("Agente A")
    print(Escalera.getStaircaseA(n))
    print("")
    print("Agente B")
    print(Escalera.getStaircaseB(n))
    print("")
    print("Agente C")
    print(Escalera.getStaircaseC(n))

## Pruebas



```bash
python -m unittest discover
```

