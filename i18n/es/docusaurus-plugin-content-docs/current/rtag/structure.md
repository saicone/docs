---
sidebar_position: 3
title: Estructura
description: Información sobre la estructura de Rtag
---

Rtag está conformado por múltiples classes que funcionan en conjunto para llevar a cabo acciones, abajo se presenta un mapa conceptal que muestra su distribución.

![Rtag Instances](/img/rtag/rtag-instances.png)

## TagObject

Rtag contiene varias classes para ejecutar métodos de los objetos NBT manteniendo la compatibilidad entre versiones, incluyendo la conversión del respectivo NBT a un objeto normal de Java y viceversa:

*  **TagCompound:** Para ejecutar métodos de NBTTagCompound.
*  **TagList:** Para ejecutar métodos de NBTTagList.
*  **TagBase:** Para ejecutar métodos de cualquier otro class de NBT no mencionado anteriormente.


## RtagMirror

Es la instancia principal de Rtag para convertir cualquier objeto normal de Java (String, Integer, List, Map) en NBT y viceversa de manera simple sin necesidad de acceder a las classes de TagObject.

## Rtag

Es ni más ni menos que el mísmisimo Rtag, con esta instancia puedes editar los NBTTagCompound y NBTTagList de la mánera más simple, puedes añadir y remover objetos definidos por una ruta dentro de estos NBT.

Incluyendo compatibilidad con objetos custom, los cuales deben ser traducidos registrando un serializador y deserializador para cada respectivo objeto, para más información visita la página de la documentación referente a [objetos custom](feature/custom-objects.md).


## RtagEditor

Es el class abstracto con opciones para editar de manera simple el tag principal de un objeto.

### RtagItem

Permite editar el tag de un ItemStack además de añadirle data adicional, la cual será guardada al cargar los cambios.

Para cargar los cambios dentro del ItemStack es posible creando una copia con los cambios implementados o implementar directamente los cambios en el ItemStack original.

```java
ItemStack item = new ItemStack(Material.DIAMOND_SWORD);

RtagItem rtag = new RtagItem(item);
// Value = "Texto"
// Ruta = "ruta" -> "asd"
rtag.set("Texto 1", "ruta", "asd");

// Puedes cargar los cambios en el item original
rtag.load();
// O también puedes cargar una copia del item original con los cambios incluidos
ItemStack newItem = rtag.loadCopy();
```

### RtagEntity

Permite editar el NBTTagCompound de una entidad, sin incluir el id de la entidad debido a que estas funcionan de una manera excluyente, en otras palabras, si tratas de cambiar el id la entidad seguirá siendo la misma.

La data adicional que no tenga relación con la entidad, será eliminada al cargar los cambios.

No es posible cargar los cambios como una copia de la entidad.

```java
Entity entity = // Obtener una entidad de alguna parte;

RtagEntity rtag = new RtagEntity(entity);
// Aqui se editarán cosas que contienen las entidades en su NBTTagCompound
rtag.set(true, "Glowing");
// Value = "1"
// Ruta = "HasVisualFire"
rtag.set(true, "HasVisualFire");

// Cargar los cambios
rtag.load();
```

### RtagBlock

Permite editar el NBTTagCompound de un bloque, los bloques con data de este estilo son muy pocos (cofres, mesas de encantamiento... etc).

La data adicional que no tenga relación con el bloque, será eliminada al cargar los cambios.

No es posible cargar los cambios como una copia del bloque.

```java
Block block = // Obtener un bloque de alguna parte;

RtagBlock rtag = new RtagBlock(block);
// Supongamos que el bloque es un cofre,
// se puede editar el nombre que aparece al abrirlo
rtag.set("{\"color\":\"dark_purple\",\"text\":\"Nombre del cofre\"}", "CustomName");

// Cargar los cambios
rtag.load();
```

:::tip

Si quieres añadirle data que no se borre a las entidades y/o bloques, se sugiere usar el "[persistent data container](https://www.spigotmc.org/threads/guide.371200/)" que fue añadido en la 1.14.

Para versiones viejas, por ahora Rtag no ofrece una forma viable de guardar data adicional en las entidades y/o bloques.

:::
