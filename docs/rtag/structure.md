---
sidebar_position: 3
title: Structure
description: Information about Rtag structure
---

Rtag is made of multiple classes that work together to handle NBT.

![Rtag Instances](/img/rtag/rtag-instances.png)

## TagObject

Rtag contains multiple classes to handle NBT objects maintaining a cross-version compatibility, including the conversion of respective object to Java and vice versa:

*  **TagCompound:** To handle NBTTagCompound.
*  **TagList:** To handle NBTTagList.
*  **TagBase:** To handle every other NBT class not mentioned before.

## RtagMirror

It's the main instance of Rtag to convert every normal Java object (String, Integer, List, Map) into NBT and vice versa in a simple way without using TagObject classes.

## Rtag

It's the Rtag itself, with this instance you can edit the NBTTagCompound and NBTTagList in the most simple way, you can add and remove objects using a tree-like path format.

Including compatibility with custom objects by registering an object (de)serializer, for more information visit the [custom object](feature/custom-objects.md) feature page.

## RtagEditor

Abstract class with options to edit in a safe way the NBT inside objects.

### RtagItem

Allow you to edit any ItemStack tag, every non-vanilla tag will be saved after load the changes.

To load the changes inside ItemStack it is possible to create a copy with the changes, or implement it directly using the original ItemStack object.

```java
ItemStack item = new ItemStack(Material.DIAMOND_SWORD);

RtagItem rtag = new RtagItem(item);
// Value = "Text 123"
// Path = "deep" -> "path"
rtag.set("Text 123", "deep", "path");

// You can load the changes into original ItemStack
rtag.load();
// Or load them into a copy of original ItemStack
ItemStack newItem = rtag.loadCopy();
```

### RtagEntity

Allow you to edit an entity NBTTagCompound, without entity id because it can't be changed, if you try to change it the entity will still be the same.

The non-vanilla tags will be deleted after load changes into Entity.

It's not possible to load changes as a copy of the original Entity.

```java
Entity entity = // Entity from anywhere;

RtagEntity rtag = new RtagEntity(entity);
// Edit vanilla tags
rtag.set(true, "Glowing");
// Value = "1"
// Path = "HasVisualFire"
rtag.set(true, "HasVisualFire");

// Load the changes
rtag.load();
```

### RtagBlock

Allow you to edit an block NBTTagCompound, the blocks with NBT data are tiles (chest, enchanting table... etc).

The non-vanilla tags will be deleted after load changes into Block.

It's not possible to load changes as a copy of the original Block.

```java
Block block = // Block from anywhere;

RtagBlock rtag = new RtagBlock(block);
// Assuming the block is a chest, you can edit the title when you open it
rtag.set("{\"color\":\"dark_purple\",\"text\":\"Chest custom title\"}", "CustomName");

// Load the changes
rtag.load();
```

:::tip

If you want to add non-vanilla tags to entities & blocks, you can use the "[persistent data container](https://www.spigotmc.org/threads/guide.371200/)" that was added in MC 1.14.

For now Rtag does not offer a "safe way" to save non-vanilla tags in old Bukkit versions.

:::
