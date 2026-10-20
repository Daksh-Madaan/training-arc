# Learning FastAPI 
*_dakshmadaan*

## Introduction and Minimal app
- Performance on par with NodeJS and Go
- Reasons for Performance: Starlette and Pydantic
    - Pydantic is used for Data Validation
    - Starlette - Asynchronous Server Gateway Interface
- Builds documentation as you build your API (Swagger UI & ReDoc)

```
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

```

Or you can use `async def`

the syntax is very similar to that of Flask, 
1. `Import` 
2. `Create an Object`
3. `app.get()/app.route()/app.api_route()`
4. `Give in a Function (via decorator)`

### What is Async and Await?
So far I know Async is something that lets you run functions in *concurrency* i.e you don't have to wait for a function to complete its execution in a call sequence. 

`async` is used at function declaration, indicates that this function can be paused & `await` is actually the one pausing the execution till the mentioned task finishes.

> Concurrency is different from Parallelism

Coroutine is just like a function but it can be paused from inside
FastAPI claims to handle and perform with normal functions (def defined) as well as it does with async def ones, Normal `def` functions run in the external threadpool.

### Type Hints in Python
```
def add(a,b):
    return a + b

def add(a: int,b: int)
    return a + b

from typing import Any
def add(a: Any,b: Any):
    return a + b
```
Some other complex types which consist of more data types internally, can declare them too - `list[str], tuple[int,str,int], set[bytes], dict[int,str]`, These are called **Type Parameters**.

You can also "list" down possible types if not one like `a: int | str, a: None | int`

User-defined classes can also be type hinted `s: Student`


### OpenAPI
it dictates hoe to define a schema of your API, you can pass them as parameters to your FastAPI Object constructor.
go to `127.0.0.1:8000/openapi.json` for parameters

```
FastAPI(
    title = "My Fist API",
    version = "0.1",
    summary = "I am learning FastAPI",
    description = "Here's a success message"
)

```
## Path Parameters
Like in flask 
```
@app.route('/<int:name>')
def showName(name):
    return f"<h1>{name}</h1>"
```

in FastAPI we have,
``` 
@app.get('/{name}')
async def showName(name):
    return {'name': name}

# With Type
async def showName(name: str):
```
With declared types, it automatically converts all valid conversions like "1" will be converted to 1 but "str" can be converted to a number

Conflicts between hardcoded and variable paths may occur like,
```
@app.get('/{age}')
async def showAge(age: int):
    return {'age': age,"message": "a string would throw a HTTP Error"}

@app.get('/19')
async def conflict():
    return {
        "Message":"You Will Never See This",
        "Fix": "Declare this prior to parameter one"
    }
```

### Options or Predefined Values
1. Import Enum
2. Create a class inheriting Enum
3. Define all options or predefined values in it
4. Type define in your Function
```
from enum import Enum

class default(str,Enum):
    dm = "Daksh"
    gs = "Gunvir"

def info(name : default):
    if name is default.dm: return {"name": f"{name} taken from default"}
    if name.value == "Gunvir": return {"name": f"{name} taken from default"}
    return {"name": "can't be the input"}

```
Even API Docs will reflect this by offering a select input rather than a text input field

### Special Case of Path
If your Path Parameter is itself a path, OpenAPI doesn't support this declaration but can nevertheless be done in FastAPI (due to Starlette) using `:path` hinting in the path decorator.

## Query Parameters
Parameters that are not declared in the path but are still passed to the associated function, they can be passed through the path though after the `?`.

they can have default values and set default to `None ` if you want them to be optional.

But if you dont declare a default value for them, they become **Required**

for `bool` : `True`,`true`,`on`,`yes` all work the same.
```
@app.get("/queryParameter/")
def queryParameter(upper:bool = False):
    if(upper): return {"NAME":"DAKSH"}
    return {"name":"daksh"}
```
## Request Body
it is the data sent by the client to your API [PUT,POST,DELETE,PATCH]. Similarly, **Response Body** is the data sent by your API to the client which almost always has to be sent. [GET]

```
@app.put("/hooman/update/{optional}")
async def updateHooman(info: User,optional2:int = None ,optional:int = None):
    return {'optional': optional, 'optional2':optional2, **info.model_dump()}
```

## Query Parameters and String Validations

`sample: str | None = None` is the same thing as 
```
from typing import Annotated
...
sample : Annotated[str | None] = None
```

now you can `Query` (for Query Parameters, Similarly `Path` for Path Parameters) to it from `fastapi` which offers additional validation.

```
from typing import Annotated
from fastapi import FastAPI, Query, Path

app = FastAPI()

@app.get("/moreValidation/{b}")
def home(b: Annotated[str | None, Path(max_length=5,min_length=3)],a: Annotated[str | None, Query()]=None):
    return {"a":a,"b":b}
```

