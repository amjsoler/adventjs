import {test, expect} from 'vitest'

const checkIsSameTree = (treeA, treeB) => {
  let sameTree = true

  if(treeA.value !== treeB.value){
    sameTree = false
  }

  if(treeA.left && treeB.left){
    if(!checkIsSameTree(treeA.left, treeB.left)){
      sameTree = false
    }
  }

  if(treeA.right && treeB.right){
    if(!checkIsSameTree(treeA.right, treeB.right)) {
      sameTree = false
    }
  }

  return sameTree
} 


const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const treeB = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}


test("tree = tree _> true", () => {
  expect(checkIsSameTree(tree, tree)).toBe(true)
})

test("tree == treeB _> false", () => {
  expect(checkIsSameTree(tree, treeB)).toBe(false)
})

test("treeB = treeB _> true", () => {
  expect(checkIsSameTree(treeB, treeB)).toBe(true)
})