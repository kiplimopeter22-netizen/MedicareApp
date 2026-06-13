from fastapi import FastAPI
from .database import Base, engine


app = FastAPI(title="Medicare App API", version="0.1.0")



@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)



@app.get("/", tags=["root"])
async def read_root():
    return {"app": "Medicare App", "message": "Welcome to Medicare App API"}


@app.get("/api/v1/info", tags=["info"])
async def info():
    return {
        "name": "Medicare App",
        "services": ["Emergency", "Outpatient", "Inpatient"],
    }
