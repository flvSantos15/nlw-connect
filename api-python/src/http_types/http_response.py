class HttpResponse:
  def __init__(sef, body: dict, status_code: int) -> None:
    self.body = body
    self.status_code = status_code