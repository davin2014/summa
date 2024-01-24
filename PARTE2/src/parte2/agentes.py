from typing import List
import statistics

class Agentes:
    @staticmethod
    def getMediaA(numeros: List[float]) -> float:
        """Agente A: Obtiene la media aritmética de una lista de números."""
        return sum(numeros) / len(numeros)

    @staticmethod
    def getMediaB(numeros: List[float]) -> float:
        """Agente B: Obtiene la media armónica de una lista de números."""
        return len(numeros) / sum(1 / num for num in numeros)

    @staticmethod
    def getMediaC(numeros: List[float]) -> float:
        """Agente C: Obtiene la mediana de una lista de números."""
        return statistics.median(numeros)