/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if (root && root.val){
        const _tmp = root.left
        root.left = root.right
        root.right = _tmp
        
        invertTree(root.left)
        invertTree(root.right)
        return root
    } else {
        return root
    }
};
