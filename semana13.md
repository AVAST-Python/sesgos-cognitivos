# Introducción a Python

## Semana 13
<!-- .element style="text-align:center" -->

![Logo de AVAST](./img/logo2.png) <!-- .element style="margin-left: auto; margin-right: auto; display: block" -->

---

# Distancia ascensor

![Distancia ascensor](./img/distancia_ascensor.png) <!-- .element style="margin-left: auto; margin-right: auto; display: block" -->

**Objetivo: pintar los puntos que están a distancia ascensor 1 de otro.**
<!-- .element style="text-align:center" -->

---

# Dibujar en Python

Dibujar es difícil. Hace falta una librería. Hay diferentes enfoques:

- [tcl/tk](https://www.tcl.tk/): Dibujo de bajo nivel. Normalmente es usado por otras librerías
- [Pygame](https://www.pygame.org/news): Orientado a la creación de juegos.
- [Matplotlib](https://matplotlib.org/) Orientada a dibujar gráficos. Es la que vamos a utilizar hoy.

---

# Matplotlib

- Biblioteca para generar gráficos de distintos tipos
- Se integra con [numpy](https://numpy.org/) (librería de manejo de datos)
- Tipos básicos de gráfico:
![alt text](./img/tipos_de_grafico.png)
<!-- .element style="text-align:center" -->

---

# Preparación del entorno

- Necesita utilizar librerías, así que tenemos que preparar el entorno de trabajo
- Para simplificar, vamos a trabajar en un servidor de Jupyter Lab:<br/>
[https://becoming-formally-lab.ngrok-free.app](https://becoming-formally-lab.ngrok-free.app) (password: `patata`)
- Puedes lanzar tu propio servidor de Jupyter en casa con docker compose:
```sh
cd jupyter
docker compose up
```
- Puedes trabajar en local con entornos virtuales (mira el fichero README.md)

Notes:
`ngrok http 8888 --domain=becoming-formally-lab.ngrok-free.app`

---
# Ejemplo básico de gráfico

```python
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.plot(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Line Plot')
plt.grid(True)
plt.show()
```

- Se le pasan dos conjuntos de datos: "x" e "y"
- Dependiendo del conjunto de datos, significan una cosa u otra
- Lo complicado es preparar los datos
- Cada gráfico tiene muchas opciones, lo mejor es copiar/pegar o usar chatGPT

[Tutorial de Matplotlib](https://www2.eii.uva.es/fund_inf/python/notebooks/Bibliotecas/01_Introduccion_a_Matplotlib/Introduccion_a_Matplotlib.html)

---

# Forma de trabajo

Dos equipos:
- Nivel alto de programación: preparan el gráfico con una funcion distancia falsa
- Nivel bajo de preparación: preparan la función distancia

Luego los juntamos

---


# Función distancia

Función `distancia_ascensor` que tome dos puntos A, B y calcule la distancia ascensor.

- Cómo representar los puntos: tuplas `(1,2)` ("listas" inmutables)
- ¿Cómo vas a saber si la función va bien?
- Revisa casos límite: mismo punto, puntos en la vertical, puntos en diferentes cuadrantes...

---

# Preparar el gráfico

- ¿Qué tipo de gráfico vas a usar?
- ¿Cómo vas a calcular los puntos a pintar?
- Puedes utilizar [numpy](https://www.freecodecamp.org/espanol/news/la-guia-definitiva-del-paquete-numpy-para-computacion-cientifica-en-python/) para hacer cálculos. Por ejemplo:
```python
import numpy as np
lista_x = np.linspace(x_min, x_max, num_puntos)
```
- Utiliza la siguiente función, que debería mostrar un círculo de radio 1:

```python
import math
...
def distancia_ascensor(A,B):
    x1, y1 = A
    x2, y2 = B
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
```
