---
sidebar_position: 6
title: Examples
description: How to use Rtag
---

Here you can see different ways to use Rtag.

:::tip

For better understand about some objects tags, is suggested to visit their pages on Minecraft wiki:
*  [Entity](https://minecraft.fandom.com/wiki/Entity_format)
*  [Item](https://minecraft.fandom.com/wiki/Player.dat_format#Item_structure)
*  [Block](https://minecraft.fandom.com/wiki/Chunk_format#Block_entity_format)

:::

## ObjectTag

The simplest way to understand Rtag is learning about the use of RtagEditor instances, which have methods to edit in an easy way objects like items, entities and blocks.

```java
// -- Create RtagEditor

// Using Item
RtagItem tag = new RtagItem(item);
// Using Entity
RtagEntity tag = new RtagEntity(entity);
// Using block
RtagBlock tag = new RtagBlock(block);


// -- Edit object tag

// - Put values
// value = "Custom Value"
// path = "deep" -> "path"
tag.set("Custom Value", "deep", "path");
tag.set(40, "somekey");
tag.set("Item name!", "display", "name");

// You can add lists
tag.set(new ArrayList(), "list", "path");
// And add values into list
tag.add((short) 3, "list", "path");
// Or replace the values of existing list
tag.set((short) 5, "list", "path", 0); // index 0

// - Get values
// Value from path "deep" -> "path"
String value = tag.get("deep", "path");
String name = tag.get("display", "name");

// Safe value get
// Value from path "somekey", or -1 by default
int intValue = tag.getOptional("somekey").or(-1);

// Get lists
List<Short> list = tag.get("list", "path");
// Get list value from index
short listValue = tag.get("list", "path", 0);

// Get the entire object tag as Map
Map<String, Object> map = tag.get();


// -- Load changes into object

// Load into original object
tag.load();

// RtagItem as the option to load an object copy with changes loaded
ItemStack item = tag.loadCopy();
```

## Item

Here an example to change item name and make it unbreakable.

```java
RtagItem tag = new RtagItem(new ItemStack(Material.DIAMOND_SWORD));

// Value = "Custom item name!"
// Path = "display" -> "name"
tag.set("Custom item name!", "display", "name");

// Make it unbreakable
tag.set(true, "Unbreakable");

// Load the changes
tag.load();
```

## Entity

Here an example to give glowing effect and levitation to entities using Rtag.

```java
RtagEntity tag = new RtagEntity(entity);

// Make it glow
tag.set(true, "Glowing");

// In case the entity its a mob or player
// it can receive potion effects
Map<String, Object> effect = Map.of(
	"Ambient", false,
	"Amplifier", false,
	"Duration", 200, // 10 seconds = 200 ticks
	"Id", (byte) 25,
	"ShowIcon", false,
	"ShowParticles", true,
	);
tag.add(effect, "ActiveEffects");

// Load the changes
tag.load();
```

## Block

Here an example to add a custom name and open restriction to chest.

```java
RtagBlock tag = new RtagBlock(block);

// Custom name
tag.set("Custom name for chest", "CustomName");
// The chest only be oppened if the player as a item that
// name contains "key 123"
tag.set("key 123", "Lock");

// Load the changes
tag.load();
```