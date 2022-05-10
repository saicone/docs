---
sidebar_position: 1
title: Objectos custom
description: Guarda y obtén objetos custom con Rtag
---

## Información

Rtag por defecto solo soporta objetos normales de Java (String, Integer, List... etc), pero también tiene la opción de registrar serializadores de objetos haciendo posible su almacenamiento en un NBTTagCompound.

### RtagSerializer

Es la instancia que funciona para convertir tu objeto custom en un Map, en otras palabras, designar cada field del objeto como un value con su respectiva key.

### RtagDeserializer

Es la instancia para convertir un Map en tu objeto custom, suponiendo que este fue serializado en un Map, ahora hay que revertir ese proceso.

## Ejemplo

Primeramente, supongamos que tienes este objeto custom para guardar data adicional en los items:

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

Ahora debes crear un class que funcione como serializador y deserializador:

```java
package my.plugin;

import java.util.HashMap;
import java.util.Map;

public class CustomDataSerializer implements RtagSerializer<CustomData>, RtagDeserializer<CustomData> {
    
    // ID usado para convertir el objeto custom en un Map
    // CustomData -> Map
    @Override
    public String getInID() {
        // Se sugiere usar un ID con el formado de <plugin>:<objeto> para evitar
        // incompatibilidad con otros plugins
        return "myplugin:CustomData";
    }
    
    // ID usado para convertir un Map en un objeto custom
    // Map -> CustomData
    @Override
    public String getOutID() {
    	// Mismo ID que el de arriba
        return "myplugin:CustomData";
    }

    // Convertir el objeto de CustomData en un Map
    @Override
    public Map<String, Object> serialize(CustomData data) {
        Map<String, Object> map = new HashMap();
        map.put("type", data.getType());
        map.put("level", data.getLevel());
        map.put("broken", data.isBroken());
        return map;
    }
    
    // Convertir el Map en un objeto de CustomData
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

Luego debes registrar el class en la instancia de Rtag que estás utilizando:

```java
Rtag rtag = // Instancia de Rtag de alguna parte;
CustomDataSerializer serializer = new CustomDataSerializer();

rtag.putSerializer(CustomData.class, serializer);
rtag.putDeserializer(serializer);
```

Ahora al utilizar la instancia de Rtag donde registraste el CustomDataSerializer podrás guardar y almacenar el objeto de CustomData.

En este ejemplo se usará un RtagItem con la instancia de Rtag que tiene registrado el CustomDataSerializer:

```java
ItemStack item = // Item de alguna parte;
Rtag rtag = // Instancia de Rtag con el CustomDataSerializer;

RtagItem rtagItem = new RtagItem(rtag, item);

// -- Guardar la data custom en el item

// Data custom para el item
CustomData data = new CustomData("EPIC", 30, false);
// Se guardará en la ruta "custom" -> "data"
rtagItem.set(data, "custom", "data");

// Se cargan los cambios en el item original
rtagItem.load();


// -- Obtener la data custom del item

// Se obtiene desde la ruta guardada "custom" -> "data"
CustomData itemData = rtagItem.get("custom", "data");
// Se compara si la data es igual
System.out.println(data.equals(itemData));
```