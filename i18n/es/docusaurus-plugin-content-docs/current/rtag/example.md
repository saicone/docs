---
sidebar_position: 6
title: Ejemplos
description: Como utilizar Rtag
---

Rtag se puede utilizar de diversas formas, en esta página verás algunas.

:::tip

Para entender de una manera más amplia los tags que contiene cada cosa dentro de Minecraft se sugiere visitar sus páginas respectivas en la wiki del juego, algunas como:
*  [Entidades](https://minecraft.fandom.com/wiki/Entity_format)
*  [Items](https://minecraft.fandom.com/wiki/Player.dat_format#Item_structure)
*  [Bloques](https://minecraft.fandom.com/wiki/Chunk_format#Block_entity_format)

:::

## ObjectTag

La forma más simple de conocer Rtag es aprendiendo a usar las instancias del RtagEditor, las cuales tienen métodos para editar de manera fácil y simple objetos como items, entidades y bloques.

```java
// -- Crear un editor de tag

// Con un item
RtagItem tag = new RtagItem(item);
// Con una entidad
RtagEntity tag = new RtagEntity(entity);
// Con un bloque
RtagBlock tag = new RtagBlock(block);


// -- Editar el tag del objeto

// - Introducir valores
// value = "Custom Value"
// ruta = "deep" -> "path"
tag.set("Custom Value", "deep", "path");
tag.set(40, "somekey");
tag.set("Item name!", "display", "name");

// Incluso puedes añadir listas
tag.set(new ArrayList(), "list", "path");
// Y añadir cosas dentro de las listas en la ruta designada
tag.add((short) 3, "list", "path");
// O reemplazar valores de una isla existente
tag.set((short) 5, "list", "path", 0); // index 0

// - Obtener valores
// Obtener el valor que está en la ruta "deep" -> "path"
String value = tag.get("deep", "path");
String name = tag.get("display", "name");

// Obtener un valor de manera segura
// Valor en la ruta "somekey", en caso de que no exista se obtendra -1
int intValue = tag.getOptional("somekey").or(-1);

// Obtener listas completas
List<Short> list = tag.get("list", "path");
// Obtener un valor de una isla en cierto index
short listValue = tag.get("list", "path", 0);

// Incluso puedes obtener el tag entero del objeto en forma de Map
Map<String, Object> map = tag.get();


// -- Cargar los cambios dentro del objeto

// Cargar los cambios en el objeto original
tag.load();

// El RtagItem tiene la opción de copiar el item y cargar los datos dentro de la copia
ItemStack item = tag.loadCopy();
```

## Item

Aquí verás un ejemplo de como darle un nombre custom a un item y hacerlo irrompible usando Rtag.

```java
RtagItem tag = new RtagItem(new ItemStack(Material.DIAMOND_SWORD));

// Value = "Nombre custom"
// Ruta = "display" -> "name"
tag.set("Nombre custom", "display", "name");

// Hacerlo irrompible
tag.set((byte) 1, "Unbreakable");

// Cargar los cambios
tag.load();
```

## Entity

Aquí verás un ejemplo de como darle el efecto de brillo y levitación a una entidad usando Rtag.

```java
RtagEntity tag = new RtagEntity(entity);

// Hacer que brille
tag.set((byte) 1, "Glowing");

// En caso de que sea un mob o jugador
// Darle le efecto de levitación
Map<String, Object> effect = Map.of(
	"Ambient", (byte) 0,
	"Amplifier", (byte) 0,
	"Duration", 200, // 10 segundos = 200 ticks
	"Id", (byte) 25,
	"ShowIcon", (byte) 0,
	"ShowParticles", (byte) 1,
	);
tag.add(effect, "ActiveEffects");

// Cargar los cambios
tag.load();
```

## Block

Aquí verás un ejemplo de como hacer que un cofre tenga un nombre custom además de una restricción al tratar de abrirlo.

```java
RtagBlock tag = new RtagBlock(block);

// Nombre custom
tag.set("Nombre custom al abrir el cofre", "CustomName");
// El cofre solo se abrirá si el jugador tiene en su mano
// un item que contenga en el nombre "llave 123"
tag.set("llave 123", "Lock");

// Cargar los cambios
tag.load();
```