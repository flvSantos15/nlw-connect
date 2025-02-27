import pytest # type: ignore
from eventos_link_repository import EventosLinkRepository

@pytest.mark.skip("Insert in DB")
def test_insert():
  event_id = 1
  subscriber_id = 1
  
  repository = EventosLinkRepository()
  
  link = repository.insert(event_id, subscriber_id)
