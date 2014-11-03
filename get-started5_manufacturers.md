/images/---
layout: page
permalink: /get-started/manufacturers/
title: Are you a device manufacturer wanting to become PowerMatcher Ready?
titleGreen: PowerMatcher Ready?
description: "How to get started with the PowerMatcher"
parent: get-started
summary: Making your smart appliance PowerMatcher Ready is relatively simple!
tags: [Jekyll, theme, responsive]
image:
  feature: /images/site/Get Started_website.jpg
  thumbnail: /images/site/Get Started_website.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

All you need to do for your company to be able to leverage the PowerMatcher technology is to make your appliance capable of talking PowerMatcher language. It needs a device driver and possibly a device agent. 

The device driver entails the physical connection and mapping of the device control space to the FPAI control space. A device driver is manufacturer, type and model specific.  The benefit of developing a device driver is that in the future any Energy App like the PowerMatcher that interfaces with the FPAI platform can control your appliance.

The device agent contains logic to use the FPAI control space and construct bids for the PowerMatcher market. FPAI defines four abstraction categories (See FPAI): Uncontrolled, Time Shifter, Buffer/Storage, Unconstrained, therefore at least four types of agents are necessary. For each of these categories simple agents are already available open source and can be customized to your liking. You could add additional business rules or make the agent even smarter by including optimization techniques.

Check out our list of ready available drivers and agents or follow this tutorial that instructs your developers to build a driver or agent quickly and easily.