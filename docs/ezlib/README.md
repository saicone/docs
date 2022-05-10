---
sidebar_position: 1
title: Ezlib
description: Runtime library/dependency loader & relocator for Java in a single class
---

Welcome to Ezlib wiki, here you will find information about the use of this lightweight library.

## Introduction

Ezib is a library created to provide an easy way to load dependencies of Java projects at runtime, including support for package relocation.

## Requirements

*  Minimum **Java 8**

## Dependency

![version](https://img.shields.io/github/v/tag/saicone/ezlib?label=current%20version&style=for-the-badge)

Ezlib it's completely shadeable in your project.

So you can copy the [Ezlib class](https://github.com/saicone/ezlib/blob/master/src/main/java/com/saicone/ezlib/Ezlib.java) or add it as implementación.

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
