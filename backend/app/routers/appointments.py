from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Appointment])
def list_appointments(db: Session = Depends(get_db)):
    return db.query(models.Appointment).all()

@router.post("/", response_model=schemas.Appointment)
def create_appointment(payload: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    appt = models.Appointment(**payload.dict())
    db.add(appt)
    db.commit()
    db.refresh(appt)
    return appt
