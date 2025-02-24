from .subscribers_repository import SubscribersRepository

# Parei em 12:50 da aula 2

def test_inset():
  subscriber_info = {
    "name": "Teste",
    "email": "Kt0oP@example.com",
    "event_id": 1
  }

  subscriber_repo = SubscribersRepository()
  subscriber_repo.insert(subscriber_info)