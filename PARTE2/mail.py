from src.parte2.agentes import Agentes
from src.parte2.escalera import Escalera

if __name__ == '__main__':
    numeros = [1.0, 2.0, 3.0, 4.0, 5.0]
    print(Agentes.getMediaA(numeros))
    print(Agentes.getMediaB(numeros))
    print(Agentes.getMediaC(numeros))

    n = 4
    print("")
    print("Agente A")
    print(Escalera.getStaircaseA(n))
    print("")
    print("Agente B")
    print(Escalera.getStaircaseB(n))
    print("")
    print("Agente C")
    print(Escalera.getStaircaseC(n))

  
