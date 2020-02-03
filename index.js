var recipes = {cake: 'eggs'}

function updateObjectWithKeyAndValue(object, a, b) {
  object[a] = b; 
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; 
}
