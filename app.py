import eel


@eel.expose
def hello_world():
    print("Hello from python")


@eel.expose
def get_greeting(string):
    return f"hello {string}"


eel.init("web")
eel.start("index.html")
