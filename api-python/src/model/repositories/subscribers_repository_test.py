import pytest
from .subscribers_repository import SubscribersRepository

@pytest.mark.skip("Insert in DB")
def test_inset():
  subscriber_info = {
    "name": "Teste",
    "email": "Kt0oP@example.com",
    "event_id": 1
  }

  subscriber_repo = SubscribersRepository()
  subscriber_repo.insert(subscriber_info)

@pytest.mark.skip("Select in DB")
def test_select_subscribers():
  email = "email@email.com"
  subscriber_repo = SubscribersRepository()
  resp = subscriber_repo.select_subscribers(email, 1)
  print(resp)