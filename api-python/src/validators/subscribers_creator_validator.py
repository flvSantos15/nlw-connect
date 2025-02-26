from cerberus import Validator # type: ignore

def subscribers_creator_validator(request: any):
  body_validator = Validator({
    "data": {
      "type": "dict",
      "schema": {
        "name": { "type": "string", "required": True, "empty": False },
        "email": { "type": "string", "required": True, "empty": False },
        "link": { "type": "string", "required": False, "empty": False },
        "event_id": { "type": "integer", "required": True, "empty": False }
      }
    }
  })

  response = body_validator.validate(request.json)

  if (response is False):
    raise Exception(body_validator.errors)