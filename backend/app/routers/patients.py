from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models
from ..database import get_db

router = APIRouter()

@router.post("/", response_model=dict)
def create_patient(payload: dict, db: Session = Depends(get_db)):
    p = models.Patient(**payload)
    db.add(p)
    db.commit()
    db.refresh(p)
    return {"id": p.id, "name": p.name}
