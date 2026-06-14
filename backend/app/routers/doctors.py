from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Doctor])
def list_doctors(db: Session = Depends(get_db)):
    return db.query(models.Doctor).all()

@router.post("/", response_model=schemas.Doctor)
def create_doctor(payload: schemas.DoctorCreate, db: Session = Depends(get_db)):
    doc = models.Doctor(**payload.dict())
    db.add(doc)
    db.commit()
    db.refresh(doc)
    return doc
