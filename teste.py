
"""""rodas = int(input("Informe a quantidade de rodas do veículo: "))

peso = int(input("Informe o peso bruto em quilogramas: "))

pessoas = int(input("Informe a quantidade de pessoas no veículo: "))

if (rodas == 2) or (rodas == 3):
    print("A Melhor Categoria de habilitação para este veículo é: A ")
elif (rodas == 4) and (pessoas <= 8) and (peso <= 3500):
    print("A Melhor Categoria de habilitação para este veículo é: B ")
elif (rodas >= 4) and (peso > 3500) and (peso <= 6000):
    print("A Melhor Categoria de habilitação para este veículo é: C ")
elif (rodas >= 4) and (pessoas <= 8): 
    print("A Melhor Categoria de habilitação para este veículo é: D ")
elif (rodas >= 4) and (peso > 6000):
    print("A Melhor Categoria de habilitação para este veículo é: E ")
"""


#for i in range(1,10,2):
#    print(i)
"""
import random

numero = random.randint(1,10)

while(numero != 5):
    print(numero)
    numero = random.randint(1,10)
"""


i = 0
while(i < 10):
    print(i)
    i = i + 1

