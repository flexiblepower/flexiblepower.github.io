---
layout: page
permalink: /technology/
title: Powermatcher
title-green: technology
modified: 29-9-2014
tagline: PowerMatcher Technology
tags: [PowerMatcher, Technology, Transactive Energy, how it works]
image:
  feature: site/banner_inner.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

The PowerMatcher Suite is a ‘demand response’ technology that balances all smart devices, from low voltage to high voltage, in a virtual market. The PowerMatcher could also be herded among the recently coined term transactive energy.

“Transactive energy (TE) is a new hot topic in the energy industry, but what exactly is it? Frankly, it is a concept so new that it does not yet have a formal definition. Carl Imhoff, manager of electricity infrastructure for the Pacific Northwest National Laboratory summed it up by saying, “Transactive energy is a means of using economic signals or incentives to engage all the intelligent devices in the power grid—from the consumer to the transmission system—to get a more optimal allocation of resources and engage demand in ways we haven’t been able to before.” 

The PowerMatcher concept is based on the micro-economic principle of demand and supply. Supply and demand is one of the most fundamental concepts of economics and it is the backbone of a market economy. Demand refers to how much (quantity) of a product or service is desired by buyers. The quantity demanded is the amount of a product people are willing to buy at a certain price; the relationship between price and quantity demanded is known as the demand relationship. Supply represents how much the market can offer. The quantity supplied refers to the amount of a certain good producers are willing to supply when receiving a certain price. The correlation between price and how much of a good or service is supplied to the market is known as the supply relationship. Price expresses the willingness to pay for supply and demand. The relationship between demand and supply underlie the forces behind the allocation of resources. In market economy theories, demand and supply theory will allocate resources in the most efficient way possible.

When supply and demand are equal (i.e. when the supply function and demand function intersect) the economy is said to be at equilibrium. The same mechanism is used in PowerMatcher. PowerMatcher core application provides the marketing mechanism for the determination of the equilibrium, while the agents work as actors representing demand and/or supply.

#Agent Technology
The technology differentiates from other demand response technologies due to its multi agent based decentralized approach.
The PowerMatcher consists of various agents that communicate via the PowerMatcher protocol. These agents are the:

*	Device agent 				[plaatjes]
*	Concentrator agent
*	Auctioneer agent
*	Objective agent

#The Device Agent
In the PowerMatcher framework a smart device is represented by a device agent. The device agent contains logic to operate the process associated with the device in an economical optimal way.  It translates the state of a smart device (battery charge is low or CHP output is 1500W and gas consumption is 0,61 Euro/m3) to a bid on the PowerMatcher market (see Protocol section). 
The device agent could also contain logic to make the device “smart” by including end user wishes as well external input such as  weather or energy price forecasts. By taking into account this extra information the device can determine for itself what would be the best time to consume…. or produce energy.

To steer  and read out the machine, a “physical” connection has to be made with the device. This could be done by mapping the agent directly to the IO of the device or perhaps a web service as delivered by the device manufacturer. Instead we have chosen to run PowerMatcher on the FPAI technology as an intermediate layer;  this only requires a connection of the device agent to the abstraction layer of FPAI. FPAI takes care of the actual physical connection with the device (see FPAI section). As a result the PowerMatcher device agent does not have to think about the type of machine, brand, or model number. The reader is referred to the FPAI section for a more detailed explanation of FPAI technology.

#The Concentrator Agent
The concentrator agent performs three functions. The first function of the concentrator is the bundling of messages received from child agents. Children could be other concentrator agents or other device agents. The concentrator concentrates, or aggregates,  all these messages and publishes a single message upward in the hierarchy. 
The second function entails the virtual representation of concepts or physical entities in the real world. A concentrator can bundle every smart device in a single household and therefore represent this household. A concentrator can also represent an electric cable, transformer or for instance a neighborhood.
Lastly, the concentrator can be used to manipulate the children agents that are present in a sub cluster. Affecting a single concentrator allows for localized manipulation. The first idea of local manipulation that has been implemented in the PowerMatcher is the capability of local congestion management; by making the concentrator more intelligent it can peak shave loads and make sure that the net output of sub cluster stays within certain power limits.

#The Auctioneer Agent
The auctioneer  always stands on top of the hierarchy and bundles all messages received from child agents. The auctioneer determines the optimal set point (see Optimization Techniques) of the cluster and returns this set point to each child agent; each child node will receive this set point and forward it to his children….and so forth.

#The Objective Agent
The objective agent gives a cluster its purpose. The objective agent interfaces to the business logic behind the specific application. The objective agent can be connected to the auctioneer or a concentrator agent. The objective agent  can send external incentives to manipulate the other agent by means of the general PowerMatcher protocol (See Protocol section). 
When the objective agent is absent, the goal of the cluster is to balance itself, i.e., it strives for an equal supply and demand within the cluster itself. Depending on the specific application, the goal of the cluster might be different. If the cluster has to operate as a virtual power plant, for example, it needs to follow a certain externally provided setpoint schedule. Such an externally imposed objective can be realized by implementing an objective agent.  Other couplings could be with the energy trading market, external optimization algorithms etc.

#Distributed nature and a message bus.

The PowerMatcher is distributed in nature, however every agent can also run on a central server (Want to see how this works, follow the Get Started guide to setup your own PowerMatcher!). We hold the vision that in the future device agent logic will be implemented in physical smart appliances. 

The best solution presently is the use of FPAI that functions as a gateway operating system (a gateway can be compared to your router for connecting to the internet, like your laptop with Windows the gateway also needs an operating system) and unburdens the PowerMatcher from the connectivity and interoperability with physical appliances (see FPAI). 
Because of the distributed nature of the PowerMatcher the concept is extremely scalable. You can implement it on household level and have an auctioneer optimize your house. It can also be implemented by an energy collective or aggregator to optimize over a large system.

The central server of the PowerMatcher that receives all incoming messages from child agents has implemented a message bus. A message bus is a common solution for “Internet of things” implementations. For a more detailed explanation the reader is referred to the specification section.

#PowerMatcher protocol
Every agent in the PowerMatcher framework communicates via a standardized protocol. This protocol defines two way communication where the upward message in the hierarchy is different from the downward or returning message.  
The upward message consists of a bid curve. A bid curve describes the relation between “Power” and “willingness to consume or produce power”. This willingness is expressed as a price/kW.  The downward message is the market price that balances the system.

A small thought exercise, imagine a battery or cooler:

[plaatje]

When his state of charge is almost full a battery is only willing to charge at low prices, vice versa an empty battery is willing to pay a higher price to recharge. Likewise a cooler is willing to cool at a higher price, only when it reaches critical inside temperature  and the tomatoes are about to go bad. A device agent generates new bid curves, or events, that represent his current state and willingness to pay for power and also the amount of power needed/produced.

The returning message is the internal PowerMatcher price. This price is the set point that optimizes the entire cluster and was determined by the auctioneer (see Optimization techniques). The price message flows through every branch and to every endpoint, the device agent. The device agent maps this price to his prior published bid curve and determines its consumption or production set point, indeed that is the amount of power the device was willing to acquire or produce for that price. 
This power set point is communicated to the appliance by the device agent through the FPAI abstraction layer (see Device Agent and FPAI).

#Optimization techniques and the PowerMatcher optimization
At the moment we distinguish at least three types of optimization system approaches:

1.	Centralized optimization (e.g. Simplex method)
2.	Decentralized optimization (part of the objective function is calculated locally)
3.	Agent technology
In a centralized optimization system a control signal is often centrally imposed meaning a control center determines whether your air-condition should be turned on or off. A centralized optimization can also become very processing-intensive with increasing amount of connected devices and parameters.

A decentralized optimization is already more in line with PowerMatcher ideology, yet we feel that the solution would still be too complex. 

In the PowerMatcher framework we relied on agent technology. Your appliance and agent will act autonomously based on your predefined settings (most cost efficient, most green energy etc.) and settings are never imposed. In other words, you still get to decide at any moment whether you want to turn your airco on or off.  The PowerMatcher ensures that the end user retains full control but its energy consumption or production will be optimized autonomously as set by end user’s desired constraints.

The optimization of the PowerMatcher is based on the micro-economic principle of demand and supply. When supply and demand are equal (i.e. when the supply function and demand function intersect) the economy is said to be at equilibrium. PowerMatcher core application provides the marketing mechanism which is embedded in the communication protocol for the determination of the equilibrium, while the agents work as actors representing demand and/or supply.

#Bid curve aggregation and determining the optimal set point
As bid curves are send higher up the hierarchy they are received by the parent agent. A parent agent is always a concentrator or auctioneer agent. Both agents aggregate the received bid curves and compose a new single bid curve. Aggregation means as much as adding bid curves; bid curves that represent generation of energy, produce ‘negative power’ or ‘negative supply’ and are therefore subtracted. 

[plaatje]

This is possible because apparently, within that sub cluster, there are two devices that cancel each other out at a particular price level. The refrigerator was willing to consume 500W at a price of 0,30 cents/kW and the battery was willing to discharge at 500W at a price of 0,30 cents/kW.

After aggregation of all child agent bid curves a new aggregated bid curve is composed that resembles the net powerdemand as a function of the price. 

The auctioneer performs one extra action after aggregation to determine the optimal point of the system. Since the final aggregated bid curve represents the net power demand as a function of the price, the price where the net demand equals zero is the point where the systems supplies as much power as is demanded. This is the internal price where the system is in balance. Consequently this price is communicated down the hierarchy, each individual device will start consuming or producing energy as ‘promised’ by its bid curve.

#Optimization of current state and events
The PowerMatcher always optimizes the current state. The state of the system changes due to events. So as soon as the internal temperature of a refrigerator changes it sends out a new bid curve, or event. This event is then dealt with within the PowerMatcher possibly causing a chain of events  if the implications of the bid curve caused a significant change in the system.

#Flexible Power Application Infrastructure

The Flexible Power Application Infrastructure (FPAI) provides a runtime environment that makes it possible to quickly design and implement new transactive energy services and devices. FPAI enables easy deployment and configuration of ‘Energy Apps’ and device drivers, and provides easy interaction through the energy flexibility interface. Now device manufacturers can write generic device drivers for their appliances that can be used by any control algorithm that runs on FPAI. Also any control algorithm that is developed on FPAI can make use of all available drivers. Since all of platform development is done in open source (see http://github.com/flexiblepower), anyone can contribute to this framework and no vendor lock-in is possible.

A dashboard can show controls and information to the end user about the current state of your appliances in the form of Widgets. Each Widget shows information for an appliance. It is possible to have multiple Widgets per appliance.
[plaatje dashboard]

Drivers and Energy Apps communicate with one another via the abstraction layer. FPAI defines four categories under which all devices can be herded:

1. Uncontrollable. These appliances are not controllable when they consume or produce energy. An example is a solar panel.
2. Time shiftable. These apliiances are capable of shifting their supply or demand in time, however constrained within a limit. An example is a washing machine that needs to be ready before the break of dawn.
3. Buffer/Storage. These devices are flexible in energy production. In addition they are coupled to a buffer such as a battery. An example is a heatpump or electric vehicle.
4. Unconstrained. These devices are flexible in production and/or consumption, there is however no buffer or storage. An example is a generator.