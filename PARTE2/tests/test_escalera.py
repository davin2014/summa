
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import unittest
from src.parte2.escalera import Escalera

class TestEscalera(unittest.TestCase):
    def test_getDiamondC(self):
        self.assertEqual(Escalera.getStaircaseC(4), '   ####\n  ######\n ########\n##########\n ########\n  ######\n   ####')
        self.assertEqual(Escalera.getStaircaseB(4), '####\n ###\n  ##\n   #')
        self.assertEqual(Escalera.getStaircaseA(4), '   #\n  ##\n ###\n####')

if __name__ == '__main__':
    unittest.main()