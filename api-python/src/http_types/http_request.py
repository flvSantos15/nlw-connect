class HttpRequest:
  def __init__(self, body: dict = None, param: dict = None):
    self.body = body
    self.param = param