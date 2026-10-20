from fastapi import FastAPI
from enum import Enum

class default(str,Enum):
    dm = "Daksh"
    gs = "Gunvir"

#app = FastAPI()
app = FastAPI(
    title = "My Fist API",
    version = "0.1",
    summary = "I am learning FastAPI",
    description = "Description of the API",
)

@app.get("/")
async def first():
    return {"message":"This is one of many"}

@app.get('/age/{age}')
async def showAge(age: int):
    return {'age': age,"message": "a string would throw a HTTP Error"}

@app.get('/age/19')
async def conflict():
    return {
        "Message":"You Will Never See This",
        "Fix": "Declare this prior to parameter one"
    }

@app.get('/info/{name}')
async def info(name : default):
    if name is default.dm: return {"name": f"{default.dm.value} taken from default"}
    if name.value == "Gunvir": return {"name": f"{name.value} taken from default"}
    return {"name": "can't be the input"}

@app.get("/files/{filePath:path}")
async def filePath(filePath: str):
    return{"filepath": filePath}

@app.get("/queryParameter")
async def queryParameter(upper:bool):
    if(upper): return {"NAME":"DAKSH"}
    return {"name":"daksh"}