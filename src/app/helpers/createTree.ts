let count = 0;
const createTree = (arr: any[], parentId = null) => {
    const tree: any[] = [];
    arr.forEach((item) => {
        if (item.parent_id === parentId) {
            count++;
            const newItem = item;
            newItem.index = count;
            const children = createTree(arr, item.id);
            if (children.length > 0) {
                newItem.children = children;
                newItem.isExpand = false;
            }
            tree.push(newItem);
        }
    });
    return tree;
}

export const tree = (arr: any[], parentId = null) => {
    count = 0;
    const tree = createTree(arr, parentId = null);
    return tree;
}