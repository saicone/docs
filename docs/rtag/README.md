---
sidebar_position: 1
title: Rtag
description: The "readable tag" library, an easy way to handle NBTTagCompounds.
---

Welcome to Rtag wiki, here you find information about Rtag usage, including the usages with Minecraft server customization.

## Introduction

Rtag is a library whose idea was planned around 2020, but the development starts in 2022 due to commercial limitations about attachment to old systems by most developers.

This library was created to solve the need to develop a Minecraft server with a wide variety of custom things avoiding a bad performance impact on big servers, using a "easy to understand" way to handle NBT.

You don't need to be an expert with NBT tags, just with simple methods you can set and get normal Java objects.

## Requirements

*  At least **Minecraft 1.8.8:** Rtag is made to be used in latest Minecraft versions, old versions support is only for commercial purposes.
*  Minimum **Java 11**

## Dependency

![version](https://img.shields.io/github/v/tag/saicone/rtag?label=current%20version&style=for-the-badge)

To use Rtag in your project you need to add first as a dependency, so it's completely shadeable, you can implement rtag directly in your plugin, or simply use a dependency and tell your users to download Rtag from their [Spigot page](https://www.spigotmc.org/resources/rtag.100694/).

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="groovy" label="build.gradle" default>

```groovy
repositories {
    maven { url 'https://jitpack.io' }
}
dependencies {
    compileOnly 'com.saicone.rtag:rtag:VERSION'
    // Other modules
    compileOnly 'com.saicone.rtag:rtag-block:VERSION'
    compileOnly 'com.saicone.rtag:rtag-entity:VERSION'
    compileOnly 'com.saicone.rtag:rtag-item:VERSION'
}
```

</TabItem>
<TabItem value="kotlin" label="build.gradle.kts">

```kotlin
repositories {
    maven("https://jitpack.io")
}
dependencies {
    compileOnly("com.saicone.rtag:rtag:VERSION")
    // Other modules
    compileOnly("com.saicone.rtag:rtag-block:VERSION")
    compileOnly("com.saicone.rtag:rtag-entity:VERSION")
    compileOnly("com.saicone.rtag:rtag-item:VERSION")
}
```

</TabItem>
<TabItem value="maven" label="pom.xml">

```xml
<repositories>
    <repository>
        <id>Jitpack</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
  
<dependencies>
    <dependency>
        <groupId>com.saicone.rtag</groupId>
        <artifactId>rtag</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
    <!-- Other modules -->
    <dependency>
        <groupId>com.saicone.rtag</groupId>
        <artifactId>rtag-block</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.saicone.rtag</groupId>
        <artifactId>rtag-entity</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.saicone.rtag</groupId>
        <artifactId>rtag-item</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

</TabItem>
</Tabs>
