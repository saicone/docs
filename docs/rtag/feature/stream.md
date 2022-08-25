---
sidebar_position: 2
title: Tag Stream
description: Convert NBT compounds into different types of data
---

## Information

Rtag has the option to save any NBTTagCompound into different ways:

*  File
*  [Base64](https://en.wikipedia.org/wiki/Base64)
*  Bytes

Including compatibility with serializable objects.

## TagCompound Data

The TagCompound class includes the "DATA" interface, an easy way to convert any NBTTagCompound into File, Base64 or Bytes.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="file" label="File" default>

```java
Object compound = // NBTTagCompound from anywhere;

// Convert into File
File file TagCompound.DATA.toFile(compound, new File("file.nbt"));

// Get from file
Object tagCompound = TagCompound.DATA.fromFile(file);
```

</TabItem>
<TabItem value="base64" label="Base64">

```java
Object compound = // NBTTagCompound from anywhere;

// Convert into Base64
String base64 = TagCompound.DATA.toBase64(compound);

// Get from Base64
Object tagCompound = TagCompound.DATA.fromBase64(base64)[0]; // Return array
```

</TabItem>
<TabItem value="bytes" label="Bytes">

```java
Object compound = // NBTTagCompound from anywhere;

// Convert into bytes
byte[] bytes = TagCompound.DATA.toBytes(compound);

// Get from bytes
Object tagCompound = TagCompound.DATA.fromBytes(bytes);
```

</TabItem>
</Tabs>

## ItemTagStream

Rtag includes an easy way to convert any ItemStack into File, Base64 or bytes, useful to **save items in a database**.

<Tabs>
<TabItem value="file" label="File" default>

```java
ItemStack item = // ItemStack from anywhere;

// Conver into File
File file = ItemTagStream.INSTANCE.toFile(item, new File("archivo.nbt"));

// Get from File
ItemStack sameItem = ItemTagStream.INSTANCE.fromFile(file);
```

</TabItem>
<TabItem value="base64" label="Base64">

```java
ItemStack item = // ItemStack from anywhere;

// Convert into Base64
String base64 = ItemTagStream.INSTANCE.toBase64(item);

// Get from Base64
ItemStack sameItem = ItemTagStream.INSTANCE.fromBase64(base64)[0]; // Return array


List<ItemStack> items = // List of items;

// Convert into Base64
String base64 = ItemTagStream.INSTANCE.toBase64(items);

// Get from Base64
List<ItemStack> sameItems = ItemTagStream.INSTANCE.listFromBase64(base64);
```

</TabItem>
<TabItem value="bytes" label="Bytes">

```java
ItemStack item = // ItemStack from anywhere;

// Convert into bytes
byte[] bytes = ItemTagStream.INSTANCE.toBytes(item);

// Get from bytes
ItemStack sameItem = ItemTagStream.INSTANCE.fromBytes(bytes);
```

</TabItem>
</Tabs>

Including cross-version support! Save an item on any version and get on any version without compatibility problems. Materials, enchantments, potions... etc, all will be converted!

:::info

The default ItemTagStream instance it's **only compatible** with Bukkit items, if your server uses Forge it is suggested to use your own instance with Forge compatibility.

:::