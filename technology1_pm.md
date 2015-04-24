---
layout: page
permalink: /technology/powermatcher/
title: PowerMatcher under the Hood
titleGreen: under the Hood
tagline: Minimal Mistakes, a Jekyll Theme
tags: [PowerMatcher, Technology, Explained]
modified: 8-8-2014
comments: true
parent: technology
summary: Read up on the concept of PowerMatcher and see how PowerMatcher can change the world.
image:
  feature: /images/site/technology_pm.jpg
  thumbnail: /images/site/under_the_hood.jpg
---


The PowerMatcher is a ‘demand response’ technology that balances all smart devices, from low voltage to high voltage, in a virtual market. The PowerMatcher could also be herded among the recently coined term transactive energy.

#Transactive Energy
The PowerMatcher concept is based on the micro-economic principle of demand and supply. Supply and demand is one of the most fundamental concepts of economics and it is the backbone of a market economy.

The relationship between demand and supply is the underlying force behind the allocation of resources. In market economy theory, demand and supply theory will allocate resources in the most efficient way possible.
When supply and demand are equal (i.e. when the supply function and demand function intersect) the economy is said to be at equilibrium.

The same mechanism is used in the PowerMatcher. The PowerMatcher core application provides the market mechanism for the determination of the market equilibrium, while the devices work as actors for demand and/or supply. Each device, whether this is a washing maschine, windmill, or industrial turbine can express his willingness to consume or produce energy in the form of a bid (a demand or supply relationship). All bids come together in the market mechanism of the PowerMatcher and result in an equilibrium price.

#The PowerMatcher market
So how does the market work exactly? A simple thought exercise will make it very clear:

Try to picture a normal auction where a potential buyer would bid on an object e.g. someone bidding on a Van Gogh painting. This process would iterate a couple of times because the buyer does not want to 'show all his cards' in order to get the cheapest price possible. 

A PowerMatcher auction does NOT!! work that way... 

In the PowerMatcher protocol a bid describes the device's entire demand or supply relationship. The device agent lays out all his cards on the table on every bidding occasion and updates his demand or supply relationship based on the state of machine (e.g. low battery wants to charge). As a result the Auctioneer has all the demand and supply information in the market and requires zero! iterations to determine the market equilibrium.

<img src="/images/site/powermatcher.png">

#Agent Technology
The underlying structure of The PowerMatcher is Agent Technology. The devices are represented by Agents that work as actors of demand and/or supply on the PowerMatcher market...

By strictly defining the language or protocol Agents must talk to each other we can place a lot of smartness in each Agent and thereby creating an overall very complex system. Think for example of a flock of birds, they follow three simple rules:

* Separation - avoid crowding neighbors (short range repulsion)
* Alignment - steer towards average heading of neighbors
* Cohesion - steer towards average position of neighbors (long range attraction)

With these three simple rules that each agent must comply with to participate in the system, the flock moves in an extremely realistic way, creating complex motion and interaction that would be extremely hard to create otherwise.

Our rules for participating in the system are:

* communicate Bids
* communicate Prices

Each Agent can strive for different goals as long as they communicate the PowerMatcher language/protocol that defines our system.

##	Auctioneer agent    

<img src="/images/site/auca.png">

The Auctioneer always stands on top of the hierarchy and aggregates all bids received from "child" Agents. The Auctioneer determines the equilibrium of the cluster and returns the price to each Agent....this market price will be the incentive for devices to start producing or consuming....more...or...less! The price will balance the system so this is different for every device.

##	Concentrator agent  

<img src="/images/site/conb.png"> <img src="/images/site/conc.png">

The Concentrator concentrates, or aggregates, all bids and publishes a single bid upward in the hierarchy thereby reducing communications in the system, making it very scalable. 

For more information on the different functionalities please read the [detailed documentation on github](https://github.com/flexiblepower/powermatcher/wiki/Architecture-PowerMatcher#the-concentrator-agent).

##	Device agent 			

<img src="/images/site/deva.png"> <img src="/images/site/devb.png">

In the PowerMatcher a device (washing machine, windmill, battery etc...) is represented by a device agent. It is therefore connected to both the PowerMatcher and to the physical device. The device agent sends bids and receives prices from the PowerMatcher, by acting on the market it also influences the market. The device agent sends new setpoints (based on market prices) to the device and receives information on its current state (that can result in new bids).

Your appliance and agent will act autonomously based on your predefined settings (most cost efficient, most green energy etc.) and settings are never imposed. In other words, you still get to decide at any moment whether you want to turn your airco on or off.  The PowerMatcher ensures that the end user retains full control but its energy consumption or production will be optimized autonomously as set by end user’s desired constraints.

For more information on the different functionalities please read the [detailed documentation on github](https://github.com/flexiblepower/powermatcher/wiki/Architecture-PowerMatcher#the-device-agent).


##	Objective agent

The objective agent gives a cluster its purpose. The objective agent interfaces to the business logic behind the specific application. When the objective agent is absent, the goal of the cluster is to balance itself, i.e., it strives for an equal supply and demand within the cluster itself. Depending on the specific application, the goal of the cluster might be different. If the cluster has to operate as a virtual power plant, for example, it needs to follow a certain externally provided setpoint schedule. Such an externally imposed objective can be realized by implementing an objective agent. Other couplings could be with the energy trading market, external optimization algorithms etc.


# Read more
* [The PowerMatcher Smart Coordination for the Smart Electricity Grid - Koen Kok](http://dare.ubvu.vu.nl/bitstream/handle/1871/43567/dissertation.pdf?sequence=1)
* [Technical implementation details (Gitbook )](http://fpai-ci.sensorlab.tno.nl/builds/powermatcher-documentation/master/html)
