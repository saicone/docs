---
sidebar_position: 1
title: Custom Objects
description: Save and get custom objects in Rtag
---

## Information

Rtag by default only has support for normal Java objects (String, Integer, List... etc), if you want to set and get custom objects you need to register a (de)serializer into Rtag instance.

### RtagSerializer

Instance to convert a custom object into Map.

### RtagDeserializer

Instance to convert a Map into a custom object.

## Example

Suppose you have this custom object to save additional data in your items:

```java
package my.plugin;

public class CustomData {

    private final String type;
    private int level;
    private boolean broken;

    public CustomData(String type, int level, boolean broken) {
        this.type = type;
        this.level = level;
        this.broken = broken;
    }

    public String getType() {
        return type;
    }

    public int getLevel() {
    	return level;
    }

    public boolean isBroken() {
    	return broken;
    }

    public void setLevel(int level) {
    	this.level = level;
    }

    public void setBroken(boolean broken) {
    	this.broken = broken;
    }

    public boolean equals(Object object) {
    	if (object instanceof CustomData) {
    		CustomData data = (CustomData) object;
    		return data.getType().equals(type) && data.getLevel == level && data.isBroken == broken;
    	}
    	return false;
    }
}
```

So you need to create a (de)serializer for it:

```java
package my.plugin;

import java.util.HashMap;
import java.util.Map;

public class CustomDataSerializer implements RtagSerializer<CustomData>, RtagDeserializer<CustomData> {
    
    // ID used when the object will be converted into Map.
    // CustomData -> Map
    @Override
    public String getInID() {
        // It's suggested to use an ID with the format <plugin>:<object> to avoid
        // incompatibility issues with other plugins 
        return "myplugin:CustomData";
    }
    
    // ID used when an Map will be converted into the object.
    // Map -> CustomData
    @Override
    public String getOutID() {
    	// Same ID from above
        return "myplugin:CustomData";
    }

    // Convert the CustomData into Map
    @Override
    public Map<String, Object> serialize(CustomData data) {
        Map<String, Object> map = new HashMap();
        map.put("type", data.getType());
        map.put("level", data.getLevel());
        map.put("broken", data.isBroken());
        return map;
    }
    
    // Convert the Map into CustomData
    @Override
    public CustomData deserialize(Map<String, Object> map) {
        String type = map.get("type");
        Integer level = map.get("level");
        Boolean broken = map.get("broken");

        if (type == null || level == null || broken == null) {
        	return null;
        } else {
        	return new CustomData(type, level, broken);
        }
    }
}
```

The you need to register the (de)serializer into Rtag instance that are you using:

```java
Rtag rtag = // Intance from anywhere;
CustomDataSerializer serializer = new CustomDataSerializer();

rtag.putSerializer(CustomData.class, serializer);
rtag.putDeserializer(serializer);
```

Now when you use the Rtag instance with registered CustomDataSerializer, you can set and get the CustomData with simple methods.

In this example will be used an RtagItem with Rtag that have the CustomDataSerializer:

```java
ItemStack item = // Item from anywhere;
Rtag rtag = // Instancia with CustomDataSerializer;

RtagItem rtagItem = new RtagItem(rtag, item);

// -- Save custom data into ItemStack

// Data for the item
CustomData data = new CustomData("EPIC", 30, false);
// Will be saved at path "custom" -> "data"
rtagItem.set(data, "custom", "data");

// The changes will be loaded into original item
rtagItem.load();


// -- Get custom data from ItemStack

// The data will be retrieved from "custom" -> "data"
CustomData itemData = rtagItem.get("custom", "data");
// Check if it equals
System.out.println(data.equals(itemData));
```