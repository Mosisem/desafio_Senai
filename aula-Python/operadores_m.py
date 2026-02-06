valor_n1 = int( input("digite o primeiro numero:[] "))
valor_n2 = int(input("digite o segundo numero:[] "))
print("<========= [+] ========>")
print("somar digite       [ S ]")
print("subitrair digite   [ ST ]")
print("dividir digite     [ D ]")
print("multiplicar digite [ M ]")
print("<======= [+] ==========>")
operacao_ =input("operação: ")

if (operacao_ == "S"):
    resultado = int(valor_n1 + valor_n2)
    print(f"o primeiro numero:[{valor_n1}]")
    print("[ + ]")
    print(f"o segundo numero:[{valor_n2}]")
    print(f"Resultado: {resultado}")

elif (operacao_ == "ST"):
    resultado = int(valor_n1 - valor_n2)
    print(f"o primeiro numero:[{valor_n1}]")
    print("[ - ]")
    print(f"o segundo numero:[{valor_n2}]")
    print(f"Resultado: {resultado}")

elif (operacao_ == "D"):
    resultado = int(valor_n1 / valor_n2)
    print(f"o primeiro numero:[{valor_n1}]")
    print("[ / ]")
    print(f"o segundo numero:[{valor_n2}]")
    print(f"Resultado: {resultado}")

elif (operacao_ == "M"):
    resultado = int(valor_n1 * valor_n2)
    print(f"o primeiro numero:[{valor_n1}]")
    print("[ x ]")
    print(f"o segundo numero:[{valor_n2}]")
    print(f"Resultado: {resultado}")