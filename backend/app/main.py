from fastapi import FastAPI
from .routers import doctors, appointments, patients
from .database import Base, engine

app = FastAPI(title="Medicare Backend")

app.include_router(doctors.router, prefix="/doctors", tags=["doctors"])
app.include_router(appointments.router, prefix="/appointments", tags=["appointments"])
app.include_router(patients.router, prefix="/patients", tags=["patients"])


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)
