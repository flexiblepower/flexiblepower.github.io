---
layout: page
permalink: /why/fpai/
title: Why 
titleGreen: Flexible Power Application Infrastructure
tagline: Operating System, Abstraction Layer
tags: [Operating System, Abstraction Layer, Standard, Interface]
modified: 8-8-2014
comments: true
parent: why
summary: An introduction into the world of FPAI, a platform that removes silo thinking for smart appliance connectivity.
image:
  feature: /images/site/banner_inner.jpg
  thumbnail: /images/site/banner_inner.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

Over the years a lot of different Demand Side Management (DSM) approaches have been developed. Unfortunately these DSM approaches are not interoperable. A similar issue can be identified on the appliance level. Appliances provide the flexibility that is being exploited by DSM. To begin with there a lot of different appliances (washing machines, Combined Heat Power Systems, PV panels, fridges, etc.). They also use different protocols for communication (Zigbee, Z-wave, WiFi, PLC, etc.).

All this variety on both the DSM and appliance level presents Energy Management Systems (EMS) with a big challenge. This challenge is depicted below.

[plaatje]

Nowadays most EMS’es are tightly coupled to a particular DSM approach. This results in a vendor lock-in for consumers. A switch to another DSM approach/service almost always requires the installation of another EMS (hardware box).

The FlexiblePower Application Infrastructure (FPAI) is a runtime environment where on one side smart grid applications can be deployed and on the other side appliances can be connected. The FPAI provides interfaces to interact with the environment,such as a User Interface, and connect devices and smart grid apps. Part of the interface definitions are the Control Spaces and Allocations.

FPAI aims to create an interoperable platform that is able to connect to a variety of appliances and support a variety of DSM approaches. 

  * This way the EMS hardware does not need to be changed when a consumers switches from one service to another. 

  * At the same time the FlexiblePower Application Infrastructure makes it easier for service providers to introduce new services, since they do not have to provide the EMS hardware to their consumers to go with it.

  * Developers of services do not have to deal with a new specific interface for every type, brand and model of a device. They only have to communicate with the standard Energy Flexibility Interface as specified by FPAI.

  * Lastly smart appliance manufacturers only have to provide a single driver in order for their device to be interoperable with a variety of services.


