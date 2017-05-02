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
const findTilt = function(root) {
    let tilt = 0

    const calcTilt = (node) => {
        if (!node) return 0
        const leftTilt = calcTilt(node.left)
        const rightTilt = calcTilt(node.right)
        tilt += Math.abs(leftTilt - rightTilt)
        return leftTilt + rightTilt + node.val
    }

    calcTilt(root)
    return tilt
};
