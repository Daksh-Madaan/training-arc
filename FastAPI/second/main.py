from typing import Annotated
from fastapi import FastAPI, Query, Path
from pydantic import BaseModel

class User(BaseModel):
    name: str 
    age: int
    country: str
    status: bool | None

app = FastAPI()

@app.get('/')
async def second():
    return {"message":"this is the second dev folder for learning FastAPI"}


@app.post("/hooman/create")
async def createHooman(info: User):
    details = info.model_dump()
    if(info.age > 30): details.update({'status': None})
    return details


@app.put("/hooman/update/{optional}")
async def updateHooman(info: User,optional2:int = None ,optional:int = None):
    return {'optional': optional, 'optional2':optional2, **info.model_dump()}


@app.get("/moreValidation/{b}")
def home(b: Annotated[str | None, Path(max_length=5,min_length=3,include_in_schema=False)],a: Annotated[list[str] | None, Query(max_length=50,alias="A",title="List of D & M", description="both are lowercase btw")]=["d","m"]):
    return {"a":a,"b":b}