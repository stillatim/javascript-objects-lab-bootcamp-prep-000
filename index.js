var recipes = {cake: 'eggs'}

function updateObjectWithKeyAndValue(object, a, b) {
  return object.assign({}, object, {()})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, a, b) {
  object[a] = b
  return object
}
