---
layout: page
permalink: /get-started/manufacturers/
title: Are you a device manufacturer wanting to become PowerMatcher Ready?
titleGreen: PowerMatcher Ready?
description: "How to get started with the PowerMatcher"
parent: get-started
summary: Making your smart appliance PowerMatcher Ready is relatively simple!
tags: [device, manufacturer, PowerMatcher, EF-Pi]
image:
  feature: /images/site/get_started_main.jpg
  thumbnail: /images/site/manufacturer.jpg
---

All you need to do for your company to be able to leverage the PowerMatcher technology is to make your appliance capable of talking PowerMatcher language. It needs a [device driver](https://github.com/flexiblepower/fpai-core/wiki/ResourceDriver) for EF-Pi and a [device agent](https://fan-ci.sensorlab.tno.nl/builds/powermatcher-documentation/master/html/CreateADeviceAgent.html) for PowerMatcher. 

The device driver entails the physical connection and mapping of the device control space to the EF-Pi control space. A device driver is manufacturer, type and model specific.  The benefit of developing a device driver is that in the future any Energy App like the PowerMatcher that interfaces with the EF-Pi platform can control your appliance.

The device agent contains logic to use the EF-Pi control space and construct bids for the PowerMatcher market. EF-Pi defines four abstraction categories (See EF-Pi): Uncontrolled, Time Shifter, Buffer/Storage, Unconstrained, therefore at least four types of agents are necessary. For each of these categories simple agents are already available [open source](https://github.com/flexiblepower/EF-Pi-apps) and can be customized to your liking. You could add additional business rules or make the agent even smarter by including optimization techniques.

Check out our [list](http://flexiblepower.github.io/cases/driver-list/) of ready available drivers and agents or follow this tutorial that instructs your developers to build a [driver](https://github.com/flexiblepower/fpai-core/wiki/ResourceDriver) or [agent](https://fan-ci.sensorlab.tno.nl/builds/powermatcher-documentation/master/html/CreationOfDeviceAgent.html) quickly and easily.
