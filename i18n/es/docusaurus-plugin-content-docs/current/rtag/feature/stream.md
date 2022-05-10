---
sidebar_position: 2
title: Tag Stream
description: Convierte NBTTagCompound en otros tipos de datos
---

## Información

Rtag tiene la opción de guardar los NBTTagCompound en otras formas de almacenamiento:

*  Archivos
*  [Base64](https://en.wikipedia.org/wiki/Base64)
*  Bytes

Incluyendo compatibilidad con objetos serializables en NBTTagCompound.

## TagCompound Data

El class TagCompound incluido en Rtag contiene una forma fácil para convertir y obtener cualquier NBTTagCompound desde las formas de almacenamiento adicionales.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="file" label="Archivo" default>

```java
Object compound = // Un NBTTagCompound de alguna parte;

// Convertirlo a un archivo
File file TagCompound.DATA.toFile(compound, new File("archivo.nbt"));

// Obtener el compound desde un archivo
Object tagCompound = TagCompound.DATA.fromFile(file);
```

</TabItem>
<TabItem value="base64" label="Base64">

```java
Object compound = // Un NBTTagCompound de alguna parte;

// Convertirlo a Base64
String base64 = TagCompound.DATA.toBase64(compound);

// Obtener el compound desde Base64
Object tagCompound = TagCompound.DATA.fromBase64(base64)[0]; // Devuelve un array
```

</TabItem>
<TabItem value="bytes" label="Bytes">

```java
Object compound = // Un NBTTagCompound de alguna parte;

// Convertirlo a un array de bytes
byte[] bytes = TagCompound.DATA.toBytes(compound);

// Obtener el compound desde el array de bytes
Object tagCompound = TagCompound.DATA.fromBytes(bytes);
```

</TabItem>
</Tabs>

## ItemTagStream

Rtag incluye compatibilidad para convertir los ItemStack en las formas adicionales de almacenamiento, esto es realmente útil si quieres **guardar items en bases de datos**.

<Tabs>
<TabItem value="file" label="Archivo" default>

```java
ItemStack item = // Item de alguna parte;

// Convertirlo a un archivo
File file = ItemTagStream.INSTANCE.toFile(item, new File("archivo.nbt"));

// Obtener el item desde un archivo
ItemStack sameItem = ItemTagStream.INSTANCE.fromFile(file);
```

</TabItem>
<TabItem value="base64" label="Base64">

```java
ItemStack item = // Item de alguna parte;

// Convertirlo a Base64
String base64 = ItemTagStream.INSTANCE.toBase64(item);

// Obtener el item desde Base64
ItemStack sameItem = ItemTagStream.INSTANCE.fromBase64(base64)[0]; // Devuelve un array


List<ItemStack> items = // Lista de items;

// Convertirlo a Base64
String base64 = ItemTagStream.INSTANCE.toBase64(items);

// Obtener la lista desde Base64
List<ItemStack> sameItems = ItemTagStream.INSTANCE.listFromBase64(base64);
```

</TabItem>
<TabItem value="bytes" label="Bytes">

```java
ItemStack item = // Item de alguna parte;

// Convertirlo a un array de bytes
byte[] bytes = ItemTagStream.INSTANCE.toBytes(item);

// Obtener el item desde el array de bytes
ItemStack sameItem = ItemTagStream.INSTANCE.fromBytes(bytes);
```

</TabItem>
</Tabs>

ItemTagStream incluye **compatibilidad con múltiples versiones**, puedes convertir cualquier item para luego obtenerlo en cualquier versión, esto es algo que ni siquiera Bukkit tiene ya que es excluyente con las versiones viejas.

:::info

En la instancia por defecto de ItemTagStream, su conversión de ítems entre versiones es **únicamente compatible con Bukkit**.

Si tu servidor tiene Forge se sugiere crear tu propia instancia compatible con Forge.

:::