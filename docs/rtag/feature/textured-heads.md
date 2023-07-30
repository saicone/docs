---
sidebar_position: 5
title: Textured Heads
description: How to get textured heads with Rtag
---

With the `SkullTexture` class you can get textured heads from [base64](https://en.wikipedia.org/wiki/Base64), url, texture ID, player name or UUID.

## Example

Get the following texture as `ItemStack` head using all the different methods.

![](http://textures.minecraft.net/texture/fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd)

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