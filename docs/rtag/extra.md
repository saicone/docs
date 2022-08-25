---
sidebar_position: 5
title: Extras
description: Rtag extra utilities
---

Rtag contains extra utilities which will be seen below.

## Textured Heads

With the SkullTexture class you can get textures heads from [base64](https://en.wikipedia.org/wiki/Base64), url, texture ID, player name or UUID.

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

With the ChatComponent class you can convert (json) strings into chat components!

```java
Object component = ChatComponent.fromJson("{\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"dark_purple\",\"text\":\"Colored text!\"}");

Object sameComponent = ChatComponent.fromString("§5§lColored text!");
```
