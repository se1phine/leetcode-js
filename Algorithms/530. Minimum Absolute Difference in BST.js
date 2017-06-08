/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function(root) {
    let orderArr = []
    let calArr = []
    addToArr(root)
    
    for (let i = 0; i < orderArr.length - 1; i++){
        calArr.push(orderArr[i + 1] - orderArr[i])
    }
    return calArr.sort((a, b) => a - b)[0]
    
    function addToArr(treeNode) {
        if (!treeNode) return
        
        addToArr(treeNode.left)
        orderArr.push(treeNode.val)
        addToArr(treeNode.right)
    }
};
