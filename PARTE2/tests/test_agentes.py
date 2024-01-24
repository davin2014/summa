import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import unittest
from  src.parte2.agentes import Agentes

class TestAgentes(unittest.TestCase):
    def test_getMediaA(self):
        self.assertEqual(Agentes.getMediaA([1.0, 2.0, 3.0, 4.0, 5.0]), 3.0)

    def test_getMediaB(self):
        self.assertEqual(Agentes.getMediaB([1.0, 2.0, 3.0, 4.0, 5.0]), 2.18978102189781)

    def test_getMediaC(self):
        self.assertEqual(Agentes.getMediaC([1.0, 2.0, 3.0, 4.0, 5.0]), 3.0)

