---
layout: page
permalink: /Technology/fpai/
title: The
titleGreen: Flexible Power Application Infrastructure
modified: 29-9-2014
tagline: PowerMatcher Technology
tags: [FPAI, Smart Appliances, Operating System, Standard, Interface]
parent: why
image:
  feature: site/banner_inner.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

The Flexible Power Application Infrastructure (FPAI) provides a runtime environment that makes it possible to quickly design and implement new transactive energy services and devices. FPAI enables easy deployment and configuration of ‘Energy Apps’ and device drivers, and provides easy interaction through the energy flexibility interface. Now device manufacturers can write generic device drivers for their appliances that can be used by any control algorithm that runs on FPAI. Also any control algorithm that is developed on FPAI can make use of all available drivers. Since all of platform development is done in open source (see http://github.com/flexiblepower), anyone can contribute to this framework and no vendor lock-in is possible.

A dashboard can show controls and information to the end user about the current state of your appliances in the form of Widgets. Each Widget shows information for an appliance. It is possible to have multiple Widgets per appliance.
[plaatje dashboard]

Drivers and Energy Apps communicate with one another via the abstraction layer. FPAI defines four categories under which all devices can be herded:

1. Uncontrollable. These appliances are not controllable when they consume or produce energy. An example is a solar panel.
2. Time shiftable. These apliiances are capable of shifting their supply or demand in time, however constrained within a limit. An example is a washing machine that needs to be ready before the break of dawn.
3. Buffer/Storage. These devices are flexible in energy production. In addition they are coupled to a buffer such as a battery. An example is a heatpump or electric vehicle.
4. Unconstrained. These devices are flexible in production and/or consumption, there is however no buffer or storage. An example is a generator.
