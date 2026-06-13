from fastapi import FastAPI

app = FastAPI(title="MedicareApp Backend")

departments = [
    {"id": "cardiology", "name": "Cardiology", "desc": "Heart and vascular diseases, advanced interventions."},
    {"id": "neurology", "name": "Neurology", "desc": "Stroke, epilepsy, migraine, and Parkinson's care."},
    {"id": "orthopedics", "name": "Orthopedics", "desc": "Joint replacement, sports injuries, and spine surgery."},
    {"id": "pediatrics", "name": "Pediatrics", "desc": "Child health, vaccinations, and developmental care."},
    {"id": "dermatology", "name": "Dermatology", "desc": "Skin disorders, laser treatments, and acne care."},
    {"id": "gynecology", "name": "Gynecology", "desc": "Women's health, maternity, and fertility services."},
    {"id": "dentist", "name": "Dentist", "desc": "Dental implants, braces, root canals, and oral hygiene."},
    {"id": "eye", "name": "Eye Center", "desc": "Cataract surgery, LASIK, glaucoma treatment, and vision therapy."},
]


@app.get("/")
async def root():
    return {"status": "ok"}


@app.get("/departments")
async def get_departments():
    return departments
