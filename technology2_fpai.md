---
layout: page
permalink: /technology/fpai/
title: The Flexible Power Application Infrastructure
titleGreen: Flexible Power Application Infrastructure
modified: 29-9-2014
tagline: PowerMatcher Technology
tags: [FPAI, Smart Appliances, Operating System, Standard, Interface]
parent: technology
summary: A more detailed explanation on the Flexible Power Application Infrastructure; an operating system and platform for easily connecting a multitide of devices and apps.
image:
  feature: /images/site/banner_inner.jpg
  thumbnail: /images/site/technology_fpai.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

The Flexible Power Application Infrastructure (FPAI) provides a runtime environment that makes it possible to quickly design and implement new energy services and smart appliances. FPAI enables easy deployment and configuration of ‘Energy Apps’ and device drivers, and provides easy interaction through the Energy Flexibility Interface. Now device manufacturers can write generic device drivers for their appliances that can be used by any Energy App that runs on FPAI. Also any Energy App that is developed on FPAI can make use of all available drivers. 

# The Energy Flexibility Interface

The Energy Flexibility Interface defines a standard set of control spaces for four type of devices. It is not the device that is modelled but rather its energy flexibility. Four control spaces are sufficient to cover all device types. In essence, a control space is a way to put the information that is contained within a device into a generic structure, such that Energy Apps are able to understand that device from a generic energy model. A Control Space defines the freedom in which the appliance can be started, and how much energy is consumed or produced when started. The appliance driver is a specific mapping of the specific control space of a particular appliance to the standardised Energy Flexibility Interface.

The appliance driver uses a communication protocol to communicate with the appliance. At the physical level, this could be Zigbee, Z-Wave, PLC, WIFI, Ethernet, propriety, etc. This is often provided by the manufacturer of the appliance.

<img src="/images/site/fpai.png">


Using the Control Space of a device, Energy Apps can determine the usage profile of the devices, i.e. when a device should start or stop etc. The Energy App sends a control signal, or Allocation to the device based on certain events. In case of the PowerMatcher a control signal to the device would be the result of receiving a new market price. 

The appliance driver receives the Allocation and based on this it decides the optimal way to control the device. At this point the user preferences are also taken into account. Where Control Spaces form an abstract representation of a device, Allocations are used to express what a device is requested to do. For each Control Space, there is also one Allocation type.

Control Spaces:

 * Uncontrollable.	Has no flexibility, is measureable and may provide forecast.	Examples are Photo voltaic panels, Wind   Turbines, TV, indoor lighting, etc.

* Time Shiftable.	Operations can be shifted in time,  but it has a deadline. Examples are	a Washing machine, Dishwasher, etc.

* Buffer/Storage.	Flexible in operation for either production or consumption however operation is bound by a buffer. Examples are a	Freezer, Heat Pump, CHP, Batteries, EV, etc.

* Unconstrained.	Flexible in operation for production. The operation is not bound by a buffer.	Examples are Gas Generators, Diesel Generator, etc.

# Other Interfaces

The App Store is an online store that houses all Energy Apps and appliance drivers. A person can easily browse and install new applications on their FPAI hub. 

The Remote Management Interface allows for remote management of multiple FPAI nodes. This makes it possible to do remote updating of the software or remotely troubleshooting a customer.

# FPAI user interface

The owner of a FPAI hub can open a dashboard or Graphical User Interface (GUI) in his browser that shows controls and information about his FPAI hub and the current state of his appliances in the form of Widgets. Each Widget shows information about an appliance. It is possible to have multiple Widgets per appliance. 

<img src="/images/site/gui.png">




