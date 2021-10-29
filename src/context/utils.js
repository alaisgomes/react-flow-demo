export const deepClone = (x) => JSON.parse(JSON.stringify(x));

export const findTargetNode = (root, key='customid', value=1) => {
  return root[key] === value
    ? root
    : root.children?.reduce(
        (result, n) => result || findTargetNode(n, key, value),
        undefined
      );
};

export const findMaxId = (root) => {
  const curId = root.customid;

  return root.children
    ? Math.max(...[curId, ...root.children.map(findMaxId)])
    : curId;
};

export const addNode = (root, node, parentId = null) => {
  const newState = deepClone(root);
  const newId = findMaxId(newState) + 1;
  const parentNode = findTargetNode(newState, 'customid', parentId || root.customid);
  parentNode?.children.push({
    ...deepClone(node),
    customid: newId,
    key: newId,
    title: `${node.component} ${newId}`,
  });
  return newState;
};

export const setAllNodesSelected = (node, value=false) => {
  node.selected = value
  if (node.children) {
    node.children.map(child => setAllNodesSelected(child, value))
  }
  return node
}

export const selectNode = (root, id) => {
  let newState = deepClone(root)
  newState = setAllNodesSelected(newState, false)
  let node = findTargetNode(newState, 'customid', id)
  if (node)
    node.selected =  !node.selected
  return newState;
};
