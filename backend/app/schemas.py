from pydantic import BaseModel
from typing import Optional

class DoctorBase(BaseModel):
    name: str
    specialty: Optional[str] = None

class DoctorCreate(DoctorBase):
    pass

class Doctor(DoctorBase):
    id: int
    class Config:
        orm_mode = True

class AppointmentBase(BaseModel):
    patient_name: str
    date: str
    doctor_id: Optional[int] = None

class AppointmentCreate(AppointmentBase):
    pass

class Appointment(AppointmentBase):
    id: int
    class Config:
        orm_mode = True
