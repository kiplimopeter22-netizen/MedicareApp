from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_login_success():
    response = client.post('/login', json={'email': 'user@example.com', 'password': 'SecurePass123'})
    assert response.status_code == 200
    assert response.json()['message'] == 'Login successful'
    assert response.json()['token'] == 'fake-jwt-token'


def test_login_failure():
    response = client.post('/login', json={'email': 'wrong@example.com', 'password': 'wrongpass'})
    assert response.status_code == 401
    assert response.json()['detail'] == 'Invalid email or password'
