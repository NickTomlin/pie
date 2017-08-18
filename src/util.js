export function isComponentType (elem, klass) {
  if (elem.nodeName) {
    return elem.nodeName.name === klass.name
  } else {
    return elem.type === klass
  }
}

export function getProps (elem) {
  return elem.props || elem.attributes
}
