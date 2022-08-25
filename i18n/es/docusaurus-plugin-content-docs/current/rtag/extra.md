---
sidebar_position: 5
title: Extra
description: Utilidades adicionales de Rtag
---

Rtag contiene utilidades extra, aparte de manejar los NBTTagCompound también es posible realizar otras cosas usando Rtag las cuales se verán a continuación.

## Cabezas con textura

Mediante el uso del class SkullTexture puedes obtener el ItemStack de una cabeza con textura, ya sea introduciendo la skin en [base64](https://en.wikipedia.org/wiki/Base64), url, ID de textura, nombre de jugador o UUID.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="base64" label="Base64" default>

```java
ItemStack head = SkullTexture.getTexturedHead("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmVkZmEyZTBmZGVhMGMwNDIzODA0Y2RiNWI2MmFkMDVhNmU5MTRjMDQ2YzRhM2I3ZTM1NWJmODEyNjkxMjVmZCJ9fQ==");
```

</TabItem>
<TabItem value="url" label="URL">

```java
ItemStack head = SkullTexture.getTexturedHead("http://textures.minecraft.net/texture/fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd");
```

</TabItem>
<TabItem value="texture" label="Texture ID">

```java
ItemStack head = SkullTexture.getTexturedHead("fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd");
```

</TabItem>
<TabItem value="name" label="Name">

```java
ItemStack head = SkullTexture.getTexturedHead("Rubenicos");
```

</TabItem>
<TabItem value="uuid" label="UUID">

```java
ItemStack head = SkullTexture.getTexturedHead("7ca003dc-175f-4f1f-b490-5651045311ad");
```

</TabItem>
</Tabs>

## ChatComponent

En las versiones nuevas de Minecraft se indrodujo por completo el guardado de textos con color en forma de componentes JSON.

Rtag contiene el class ChatComponent para convertir cualquier String en un ChatComponent y viceversa.

```java
Object component = ChatComponent.fromJson("{\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"dark_purple\",\"text\":\"Colored text!\"}");

Object sameComponent = ChatComponent.fromString("§5§lColored text!");
```
