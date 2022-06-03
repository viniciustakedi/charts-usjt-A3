import qrcode
img = qrcode.make("https://previsaocombustivel.herokuapp.com/")
img.save("qrcode.png")