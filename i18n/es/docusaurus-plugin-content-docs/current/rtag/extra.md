---
sidebar_position: 5
title: Extra
description: Utilidades adicionales de Rtag
---

Rtag contiene utilidades extra, aparte de manejar los NBTTagCompound también es posible realizar otras cosas usando Rtag las cuales se verán a continuación.

## Cabezas con textura

Mediante el uso del class SkullTexture puedes obtener el ItemStack de una cabeza con textura, ya sea introduciendo la skin en [base64](https://en.wikipedia.org/wiki/Base64), url o ID.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="base64" label="Base64" default>

```java
ItemStack head = SkullTexture.getTextureHead("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTRlMGFlZWNhZTZkNGVlZTZmYTQwYTFmZGQ2MzQ2MzM1MzNiMTZjZmYyMTZmNDA5ZTc0MGQ3NGZlZDg3MGEwZCJ9fX0=");
```

</TabItem>
<TabItem value="url" label="URL">

```java
ItemStack head = SkullTexture.getTextureHead("https://textures.minecraft.net/texture/e4e0aeecae6d4eee6fa40a1fdd634633533b16cff216f409e740d74fed870a0d");
```

</TabItem>
<TabItem value="texture" label="Texture ID">

```java
ItemStack head = SkullTexture.getTextureHead("e4e0aeecae6d4eee6fa40a1fdd634633533b16cff216f409e740d74fed870a0d");
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
