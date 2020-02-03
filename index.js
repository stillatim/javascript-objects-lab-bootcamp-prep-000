var recipes = {cake: 'eggs'}

function updateObjectWithKeyAndValue(recipes, a, b) {
  return recipes.assign({}, recipes, {[a] : b})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, a, b) {
  object[a] = b
  return object
}
