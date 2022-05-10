---
sidebar_position: 1
title: Rtag
description: La librería de "leer NBTTagCompound" en una forma fácil.
---

Bienvenid@ a la wiki de Rtag, aquí encontrarás información sobre como utilizar Rtag además de sus posibilidades dentro de la "customización" de un servidor de Minecraft.

## Introducción

Rtag es una librería cuya idea fue planteada en 2020, pero su desarrollo empezó hasta 2022 debido a limitaciones comerciales con respecto al apego hacia sistemas viejos por parte de la mayoría de desarrolladores.

Esta librería fue creada con el fin de resolver la necesidad de desarrollar un servidor de Minecraft con gran variedad de cosas y al mismo tiempo mantener muchos jugadores sin que el rendimiento se vea afectado, usando así un sistema moderno y amigable para el usuario.

Sin la necesidad de conocer a fondo los NBT, con Rtag es posible manejarlos mediante métodos simples como get() y set().

## Requisitos

*  Mínimo **Minecraft 1.8.8:** Rtag ofrece soporte a versiones bastante viejas por razones comerciales, pero en un principio está diseñado para usarse con mayor eficiencia en las últimas versiones de Minecraft.
*  Mínimo **Java 11**

## Dependencia

![version](https://img.shields.io/github/v/tag/saicone/rtag?label=versión%20actual&style=for-the-badge)

Para utilizar Rtag en tu proyecto se debe agregar como una dependencia, además que es completamente compatible como una implementación dentro de tu proyecto o bien lo puedes utilizar y decirle a los usuarios de tu plugin/proyecto que descarguen la versión de Rtag como plugin desde su [página de Spigot](https://www.spigotmc.org/resources/rtag.100694/).

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
