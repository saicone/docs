---
sidebar_position: 2
title: Info Básica
description: Información básica para entender Rtag
---

:::info

Si ya conoces conceptos como NBT y NMS te puedes saltar esta parte de la documentación, ya que solo muestra información básica sobre estas cosas.

:::

Para empezar a usar Rtag es debido conocer un poco sobre como funciona Minecraft y de esta manera tener una idea clara de como editar algunas cosas.

## NMS

El acronimo "NMS" hace referencia a un package en el código de las versiones viejas de Bukkit, el cual estaba designado como "net.minecraft.server" seguido por la versión actual del juego, dentro de esta ruta se encontraban las classes que trae el servidor de Minecraft original programado por los desarrolladores de Mojang, el cual Bukkit utiliza para funcionar.

Las versiones más recientes de Bukkit tienen cada una de las classes del servidor de Minecraft original en rutas respectivas según su funcionamiento, por ejemplo "net.minecraft.world.level.World". Esto quiere decir que "NMS" perdió su significado, pero se sigue usando popularmente para referirse al lugar donde están las classes del servidor de Minecraft original.

El NMS es conocido popularmente por usarse mediante [reflection](https://www.oracle.com/technical-resources/articles/java/javareflection.html), ya que Mojang cambia constantemente los nombres de los methods además de usar [ofuscadores](https://www.javatpoint.com/java-obfuscator), así que si desarrollas un plugin compatible con múltiples versiones, al querer usar cosas del servidor de minecraft original deberás preparte con el uso de reflection.

## NBT

Conocido por sus siglas en inglés "Named Binary Tag", su traducción directa al español sería "Etiqueta Binaria Denominada", lo cual no significa mucho. Visto desde una manera simple el NBT se refiere a una forma de guardar datos (String, Integer, List.. etc) en objetos denominados por una key, estos objetos tienen la opción de convertir los datos en bytes, por ejemplo un NBT simple sería un String "hola" guardado con la key "dato1", así que luego para obtener ese dato solamente debes buscarlo por su key.

El NBT es tan simple como un objeto común en Java, solo que trae opciones adicionales para el almacenamiento de datos complejos (Mundos, Items, Entidades).

Las classes de NBT se encuentran dentro del NMS y hacen referencia a los objetos comunes de Java: NBTTagString, NBTTagInt, NBTTagLong, NBTTagList... etc. Cada .class haciendo referencia al tipo de dato que puede almacenar, pero el principal sería **NBTTagCompound** el cual hace referencia a un Map de Java y es la base para almacenar los NBT asociados con su respectiva key (como un map conformado por keys y values donde los values son otros NBT).

Para facilitar el entendimiento de los NBTTagCompound, se sugiera pensar en estos como si fueran un archivo .yml donde cada cosa tiene su ubicación. Por ejemplo pensando que un NBTTagCompound es un Map y los datos que tiene almacenados también son objetos normales quedaría un archivo YAML así:

```yaml
# Esto sería un Map o NBTTagCompound el cual tiene valores dentro
path:
  # Esto sería un String o NBTTagString.
  # La key sería "asd" mientras que la ruta completa sería "path" -> "asd"
  asd: "Texto guardado"
  # Integer o NBTTagInteger
  numb: 123
  # Inclusive otro Map o NBTTagCompound dentro
  otherpath:
  	# La key es "deep" y se encuentra dentro del compound designado por la key "other path"
  	# La ruta entera de este objeto sería "path" -> "otherpath" -> "deep"
  	deep: "Otro texto"
```

:::tip

No es necesario conocer el funcionamiento del NBT a fondo ya que Rtag se encarga de convertir los NBT en datos normales (String, Integer, List.. etc) y viceversa, lo único importante sería el tema de las rutas para guardar y obtener datos.

:::

:::note

Básicamente todas las cosas de Minecraft que son almacenadas, son manejadas como un NBTTagCompound. Esto incluye mundos, ítems, entidades y hasta la propia data del jugador.

:::
