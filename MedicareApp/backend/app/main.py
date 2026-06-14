from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

app = FastAPI(
    title="Medicare Auth API",
    description="Login endpoint for Medicare application",
    version="0.1.0"
)

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    message: str
    token: str | None = None

@app.post('/login', response_model=LoginResponse)
async def login(request: LoginRequest):
    if request.email != 'user@example.com' or request.password != 'SecurePass123':
        raise HTTPException(status_code=401, detail='Invalid email or password')

    return LoginResponse(message='Login successful', token='fake-jwt-token')
