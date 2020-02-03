var recipes = {cake: 'eggs'}

function updateObjectWithKeyAndValue(recipes, a, b) {
  return Object.assign({}, recipes, {[a] : b})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, a, b) {
  object[a] = b
  return object
}

function deleteFromObjectByKey(recipes, key) {
  delete recipes.key; 
  return recipes
}