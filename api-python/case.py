class MinhaClasse:
  def __enter__(self):
    print("Entrei!!!")

  def __exit__(self, exc_type, exc_value, traceback):
    print("Saindo!!!")

with MinhaClasse():
  print("Executando...")
