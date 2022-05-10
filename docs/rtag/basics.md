---
sidebar_position: 2
title: Basics
description: Basic information about NBT tags
---

:::info

If you already know themes like NBT and NMS, be free to skip this page of the wiki because it only shows very basic information about these themes.

:::

To start using Rtag one needs to know a bit the function of Minecraft servers, and in this way have a clear idea of how to edit some things.

## NMS

The "NMS" means "net.minecraft.server", it's a package on old Bukkit versions which contains all classes from the original Minecraft server distributed by Mojang, Bukkit uses it to work properly.

Most recent versions of Bukkit have different paths for Minecraft server classes, for example "net.minecraft.world.level.World".

The NMS is usually known by using it with [reflection](https://www.oracle.com/technical-resources/articles/java/javareflection.html) because Mojang constantly changes the methods names and uses [obfuscators](https://www.javatpoint.com/java-obfuscator) in his code.

## NBT

The Named Binary Tag (NBT) format is a tree data structure used by Minecraft to save data in different formats starting with bytes, an NBT is just a simple Java object (String, Integer, List.. etc) defined with a key.

The NBT format is commonly used to save Minecraft objects like Worlds, Items, Entities... etc.

The NBT classes are inside the NMS and reference the common Java objects: NBTTagString, NBTTagInt, NBTTagLong, NBTTagList... etc. The main NBT class would be **NBTTagCompound** which refers to a Java Map and is the basic object for storing the NBTs associated with their respective key (as a map made up of keys and values where values are other NBTs).

:::tip

Isn't necessary to know the NBT completely because Rtag converts every NBT into a normal object (String, Integer, List... etc) and vice versa, the only important thing would be the use of "paths" to get NBT objects inside NBT compounds.

:::
