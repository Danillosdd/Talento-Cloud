# -*- coding: utf-8 -*-
"""tratamento_de_excecoes.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1_cy1HZQUNKUmY90C6GMQtE3q0gAyQPAd

Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
"""

nome = input("Informe seu Nome Completo: ")

ano_valido = False

while(ano_valido == False):
  try:

    ano_nascimento = int(input("Informe o ano do seu nascimento(Entre 1922 e 2021): "))


    if(ano_nascimento >= 1922) and (ano_nascimento <= 2021):
      print("\nO nome do usuário é: " + nome)
      print("Neste ano de 2022 sua idade que completou, ou completará é de: " + str((2022  - ano_nascimento)))
      ano_valido = True
    else:
      print("\nAno de nascimento precisa estar entre 1922 e 2021!")

  except:
    print("\nAno de nascimento inválido!")