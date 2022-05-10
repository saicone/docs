---
sidebar_position: 1
title: Ezlib
description: Cargador de librerías/dependencias en un solo class de Java
---

Bienvenid@ a la wiki de Ezlib, en esta encontrarás información de como utilizar esta compacta librería.

## Introducción

Ezib es una librería creada con el fin de ofrecer una forma fácil para cargar dependencias de proyectos programados en Java mientras están siendo ejecutados, incluyendo compatibilidad con la recolocación de packages.

## Requisitos

*  Mínimo **Java 8**

## Dependencia

![version](https://img.shields.io/github/v/tag/saicone/ezlib?label=versión%20actual&style=for-the-badge)

Ezlib es completamente compatible como una implementación dentro de tu proyecto.

Puedes copiar y pegar el [class principal de Ezlib](https://github.com/saicone/ezlib/blob/master/src/main/java/com/saicone/ezlib/Ezlib.java) para usarlo, o bien puedes agregarlo como una implementación en tu proyecto.

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
    implementation 'com.saicone.ezlib:ezlib:VERSION'
}
```

</TabItem>
<TabItem value="kotlin" label="build.gradle.kts">

```kotlin
repositories {
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.saicone.ezlib:ezlib:VERSION")
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
        <groupId>com.saicone.ezlib</groupId>
        <artifactId>ezlib</artifactId>
        <version>VERSION</version>
        <scope>compile</scope>
    </dependency>
</dependencies>
```

</TabItem>
</Tabs>
