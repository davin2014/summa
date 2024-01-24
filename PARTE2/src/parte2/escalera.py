
class Escalera:
    @staticmethod
    def getStaircaseA(n: int) -> str:
        """Agente A: Imprime una escalera de tamaño n alineada a la derecha."""
        return '\n'.join(' ' * (n - i - 1) + '#' * (i + 1) for i in range(n))

    @staticmethod
    def getStaircaseB(n: int) -> str:
        """Agente B: Imprime una escalera invertida de tamaño n alineada a la derecha."""
        return '\n'.join(' ' * i + '#' * (n - i) for i in range(n))

    @staticmethod
    def getStaircaseC(n: int) -> str:
        """Agente C: Imprime una escalera de tamaño n alineada al centro."""
        upper_half = '\n'.join(' ' * (n - i - 1) + '#' * ((2 * i + 1)+ (n-1)) for i in range(n))
        lower_half = '\n'.join(' ' * (i + 1) + '#' * ((2 * (n - i - 1) - 1)+ (n-1)) for i in range(n - 1))
        return upper_half + '\n' + lower_half
