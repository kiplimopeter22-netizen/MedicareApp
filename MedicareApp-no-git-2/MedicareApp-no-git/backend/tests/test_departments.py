import pytest
from httpx import AsyncClient

from backend.main import app


@pytest.mark.asyncio
async def test_get_departments():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        resp = await ac.get("/departments")
    assert resp.status_code == 200
    data = resp.json()
    assert isinstance(data, list)
    assert len(data) >= 8
