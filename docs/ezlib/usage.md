---
sidebar_position: 2
title: Usage
description: How to use Ezlib
---

:::info

Ezlib uses a gradle-like dependency format to load them.

:::

## Basic

Ezlib provides an easy method to load all needed dependencies at runtime into class loaders.

Here is an example to load dependencies into a child class loader.

```java
// Create ezlib with default "libs" folder
Ezlib ezlib = new Ezlib();
// Or specify a folder
Ezlib ezlib = new Ezlib(new File("folder/path"));

// Load from maven repository (default)
ezlib.load("commons-io:commons-io:2.11.0");

// Load from specified repository
ezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/");

// You can change default repository
ezlib.setDefaultRepository("repo URL");
```

## Parent ClassLoader

Ezlib allows you to append dependencies into the parent class loader by just setting "true" at the end of the load method.

```java
Ezlib ezlib = new Ezlib();

// Load from maven repository (default)
ezlib.load("commons-io:commons-io:2.11.0", true);

// Load from specified repository
ezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/", true);
```

## Relocation

Ezlib uses [jar-relocator](https://github.com/lucko/jar-relocator), so you can load dependencies with package relocation.

Here an example with Redis library and all the needed dependencies.

```java
Map<String, String> relocations = new HashMap();
relocations.put("com.google.gson", "myproject.path.libs.gson");
relocations.put("org.apache.commons.pool2", "myproject.path.libs.pool2");
relocations.put("org.json", "myproject.path.libs.json");
relocations.put("org.slf4j", "myproject.path.libs.slf4j");
relocations.put("redis.clients.jedis", "myproject.path.libs.jedis");

Ezlib ezlib = new Ezlib();

// Load all the needed dependencies first
ezlib.load("com.google.gson:gson:2.8.9", relocations, true);
ezlib.load("org.apache.commons:commons-pool2:2.11.1", relocations, true);
ezlib.load("org.json:json:20211205", relocations, true);
ezlib.load("org.slf4j:slf4j-api:1.7.32", relocations, true);

// Then load redis dependency
ezlib.load("redis.clients:jedis:4.2.2", relocations, true);
```

:::warning

Make sure to relocate the imports during compile time, while excluding the class that you use to load the dependencies because the strings will be relocated too.

:::