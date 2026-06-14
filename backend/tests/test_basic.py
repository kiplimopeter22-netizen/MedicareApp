from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root_docs():
    resp = client.get('/docs')
    assert resp.status_code in (200, 307)

def test_create_and_list_doctor():
    resp = client.post('/doctors/', json={"name": "Dr Test", "specialty": "Gen"})
    assert resp.status_code == 200
    data = resp.json()
    assert data['name'] == 'Dr Test'
