---
layout: page
permalink: /features/
title: PowerMatcher features
tagline: Features, PowerMatcher
tags: [PowerMatcher, Features,peakshaving,demand]
modified: 8-8-2014
comments: true
image:
  feature: texture-feature-02.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

<iframe width="560" height="315" src="//www.youtube.com/embed/Zz4OpVwYWYE" frameborder="0" allowfullscreen></iframe>

## A quick overview of the PowerMatcher technology ##
* The PowerMatcher is an open source information and communications technology (ICT) for coordination in a smart electricity grid. It is capable of optimizing over high numbers of small units: distributed generators, responsive demand and electricity storage. 
* The PowerMatcher is designed for scalability: in future power systems high numbers of smaller units, typically 100W to 5MW, will be involved in coordination tasks.
* The technology is using available open industry standards in both the ICT and energy sectors.
* Since its incarnation in 2004, the PowerMatcher has been implemented in three major software versions. In a spiral approach, each software version was implemented from scratch with the first two versions being tested in simulations and field experiments. The current, third, version is planned to be deployed in a number of field experiments and real-life demonstrations with a positive business case.

A changing electricity system

* Electricity grids are facing a continuous increase of fluctuating renewable power sources. This increase happens on a central level (off-shore wind, large-scale solar power plants) as well as on a distributed, decentralized level (micro-scale renewables and CHP). Increasing volumes of electricity from wind turbines, photovoltaic generators and others cause power fluctuations that require additional balancing effort.
* World-wide electricity use is ever-growing. The â€œelectrification of everythingâ€�, the growth in the number of devices that require electricity, is one of the main drivers. Over the course of the 20th century, electricity has made a transition from a novelty, to a convenience, to an advantage, and finally to an absolute necessity.

## key Features ##
The PowerMatcher can be used for:

* Peakshaving
* Balancing energy production and demand
 
## The PowerMatcher approach ##

## Basic Structure and Agent Roles ##
Within a PowerMatcher cluster the agents are organized into a logical tree. The leafs of this tree are a number of local device agents and, optionally, a unique  objective agent. The root of the tree is formed by the auctioneer agent, a unique agent that handles the price forming, i.e. the search for the equilibrium price. In order to obtain scalability, concentrator agents can be added to the structure as tree nodes.
A more detailed description of the agent roles is as follows:

 <img src="{{ site.url }}/images/PM_Overview_Diagram_Color_05_Agents.png">

* Local device agent: Representative of a DER device. A control agent which tries to operate the process associated with the device in an economical optimal way. This agent coordinates its actions with all other agents in the cluster by buying or selling the electricity consumed or produced by the device on an electronic market. In order to do so, the agent communicates its latest bid to the auctioneer and receives price updates from the auctioneer. Its own latest bid, together with the current price, determines the amount of power the agent is obliged to produce or consume. 
* Auctioneer agent: Agent that performs the price-forming process. The auctioneer concentrates the bids of all agents directly connected to it into one single bid, searches for the equilibrium price and communicates a price update back whenever there is a significant price change. 
* Concentrator agent: Representative of a sub-cluster of local device agents. It concentrates the market bids of the agents it represents into one bid and communicates this to the auctioneer. In the opposite direction, it passes price updates to the agents in its sub-cluster. This agent uses â€˜role playingâ€™. On the auctioneerâ€™s side it mimics a device agent: sending bid updates to the auctioneer whenever necessary and receiving price updates from the auctioneer. Towards the subcluster agents directly connected to it, it mimics the auctioneer: receiving bid updates and providing price updates.
* Objective agent: The objective agent gives a cluster its purpose. When the objective agent is absent, the goal of the cluster is to balance itself, i.e., it strives for an equal supply and demand within the cluster itself. Depending on the specific application, the goal of the cluster might be different. If the cluster has to operate as a virtual power plant, for example, it needs to follow a certain externally provided setpoint schedule. Such an externally imposed objective can be realized by implementing an objective agent. The objective agent interfaces to the business logic behind the specific application.
