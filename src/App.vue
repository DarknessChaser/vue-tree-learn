<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TreeView from '@grapoza/vue-tree';

const treeConfig = {
  model: [
    {
      id: 1,
      name: 'root',
      alias: 'Root',
      isWorkspace: false,
      parentId: 0,
      children: [{
        id: 2,
        name: 'default',
        alias: 'Default',
        isWorkspace: true,
        parentId: 1,
        children: [],
      }, {
        id: 25,
        name: 'f1',
        alias: 'f1',
        isWorkspace: false,
        parentId: 1,
        children: [{
          id: 30,
          name: 'f1-1',
          alias: 'f1-1',
          isWorkspace: false,
          parentId: 25,
          children: [{
            id: 37,
            name: 'ws1-1',
            alias: 'WS1-1',
            isWorkspace: true,
            parentId: 30,
            children: [],
          }],
        }, {
          id: 35,
          name: 'ws1',
          alias: 'WS1',
          isWorkspace: true,
          parentId: 25,
          children: [],
        }, {
          id: 36,
          name: 'ws2',
          alias: 'WS2',
          isWorkspace: true,
          parentId: 25,
          children: [],
        }],
      }, {
        id: 26,
        name: 'f2',
        alias: 'f2',
        isWorkspace: false,
        parentId: 1,
        children: [{
          id: 31,
          name: 'f2-1',
          alias: 'f2-1',
          isWorkspace: false,
          parentId: 26,
          children: [{
            id: 34,
            name: 'f2-1-1',
            alias: 'f2-1-1',
            isWorkspace: false,
            parentId: 31,
            children: [],
          }],
        }, {
          id: 32,
          name: 'f3-1',
          alias: 'f3-1',
          isWorkspace: false,
          parentId: 26,
          children: [],
        }],
      }, {
        id: 27,
        name: 'f3',
        alias: 'f3',
        isWorkspace: false,
        parentId: 1,
        children: [],
      }, {
        id: 28,
        name: 'f4',
        alias: 'f4',
        isWorkspace: false,
        parentId: 1,
        children: [{
          id: 33,
          name: 'f4-1',
          alias: 'f4-1',
          isWorkspace: false,
          parentId: 28,
          children: [{
            id: 39,
            name: 'ws4-11',
            alias: 'WS4-11',
            isWorkspace: true,
            parentId: 33,
            children: [],
          }],
        }, {
          id: 38,
          name: 'ws4-1',
          alias: 'WS4-1',
          isWorkspace: true,
          parentId: 28,
          children: [],
        }],
      }, {
        id: 29,
        name: 'f5',
        alias: 'f5',
        isWorkspace: false,
        parentId: 1,
        children: [],
      }],
      treeNodeSpec: { deletable: false },
    },
  ],
  modelDefaults: {
    labelProperty: 'name',
    selectable: true,
    deletable: true,
  },
  selectionMode: 'selectionFollowsFocus',
};
</script>

<template>
  <tree-view
    :initial-model="treeConfig.model"
    :model-defaults="treeConfig.modelDefaults"
    :selection-mode="treeConfig.selectionMode"
  >
    <template #text="{ model }">
      {{ `${model.name} (${model.alias})` }}
    </template>
  </tree-view>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  min-height: 100%;
}

/* stylelint-disable-next-line selector-max-id */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
