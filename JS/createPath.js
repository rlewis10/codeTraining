let folders =[
    {id: 'food', parent: null},
    {id: 'fruit', parent: 'food'},
    {id: 'veg', parent: 'food'},
    {id: 'diary', parent: 'food'},
    {id: 'apple', parent: 'fruit'},
    {id: 'pear', parent: 'fruit'},
    {id: 'potato', parent: 'veg'},
    {id: 'jacket potato', parent: 'potato'},   
    {id: 'tomato', parent: 'veg'},
    {id: 'milk', parent: 'diary'},
    {id: 'cheese', parent: 'diary'}
  ]

let buildPaths = (folders) => {
  folders.forEach((element, index, folders) => {
    element['path'] = [element.parent, element.id]
    element.path.unshift(...makePathArray(folders, element['parent']))
  })
}

let makePathArray = (folders, fileParent) => {
  if(fileParent === null){return []}
  let filteredFolders = folders.filter((f) => {return f.id === fileParent})
  let path = makePathArray(folders, filteredFolders[0]['parent'])
  path.push(filteredFolders[0]['parent'])
  return path
}

buildPaths(folders)
console.log(folders)