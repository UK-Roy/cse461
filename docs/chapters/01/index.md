# 📘 Chapter 1: Introduction to Robotics 

<span style="color:blue">Lecture *One*</span>
---

# 1. What is a Robot?

A **robot** is:

> An embodied, programmable agent that can sense, decide, and act in the physical world.

This definition has several important parts. Let’s understand each.

---

# 1.1 Embodied (Has a Physical Body)

A robot must exist in the **physical world**.

It has a body made of mechanical and electronic parts.

### Example
A robotic arm in a factory.

### ✔ Why this fits
- It has a physical structure  
- It occupies space  
- It moves real objects  

### Counter-example
ChatGPT or Google Assistant.

### ✖ Why not
They are intelligent software but have **no body**.  
They cannot physically act on the world.

---

# 1.2 Agent (Sense → Think → Act)

An agent is something that:
1. Observes environment  
2. Makes decisions  
3. Performs actions  

### Example
A robot vacuum cleaner.

### ✔ Why this fits
- Senses walls using sensors  
- Decides direction  
- Moves and cleans  

This completes the perception-action loop.

---

# 1.3 Programmable

Robots can change behavior via software.

### Example
A robotic arm that welds today and paints tomorrow.

### ✔ Why this fits
Hardware stays the same.  
Only the program changes.

This shows flexibility.

---

# 1.4 Physical Tasks

Robots interact with real-world objects.

### Examples
- Picking items in a warehouse  
- Assisting in surgery  
- Exploring Mars  

### ✔ Why these fit
Each task requires:
- Physical movement  
- Real-world interaction  
- Sensing and control  

---

# 2. Basic Components of a Robot

Every robot has four core parts.

---

# 2.1 Sensors (Perception)

Sensors allow robots to gather information.

### Examples
- Camera → sees objects  
- LIDAR → measures distance  
- IMU → measures orientation  
- GPS → location  

### Example Scenario
Self-driving car.

### ✔ Why this fits
It uses:
- Cameras for lanes  
- LIDAR for obstacles  
- GPS for navigation  

Without sensors, the robot is "blind."

---

# 2.2 Actuators (Action)

Actuators create movement.

### Examples
- Motors  
- Hydraulic pistons  
- Servos  

### Example
A robotic arm motor rotating.

### ✔ Why this fits
Electric signal → motor rotation → arm moves.  
This is action.

---

# 2.3 Controller (Brain)

The controller decides what to do.

### Examples
- Arduino  
- Raspberry Pi  
- NVIDIA Jetson  

### Example
Drone flight controller.

### ✔ Why this fits
It:
- Reads sensors  
- Calculates stability  
- Adjusts motors  

It is the decision-maker.

---

# 2.4 Environment

Robots always operate somewhere.

### Examples
- Homes  
- Hospitals  
- Factories  
- Space  

### ✔ Why environment matters
A robot must adapt to:
- Lighting  
- Obstacles  
- Noise  
- Terrain  

Environment affects design.

---

# 3. Different Definitions of Robots

There is no single definition.

---

## Industrial Definition

Focus: manufacturing.

### Example
Car assembly robot.

### ✔ Why this fits
It manipulates tools and materials.

---

## Human-like Definition

Focus: replacing humans.

### Example
Humanoid robot serving food.

### ✔ Why this fits
Performs human tasks.

---

## Modern Definition

Focus: intelligence.

### Example
Autonomous drone.

### ✔ Why this fits
It makes decisions itself.

---

# 4. Degrees of Roboticity

Some machines are more "robotic" than others.

---

### Low Roboticity Example
Dishwasher.

✔ Fixed behavior  
✔ No intelligence  

---

### High Roboticity Example
Self-driving car.

✔ Makes decisions  
✔ Adapts to traffic  
✔ Learns from data  

---

# 5. Robotics vs AI

---

## Robotics
- Has body  
- Physical actions  
- Sensors + motors  

### Example
Robot dog.

✔ Moves and interacts physically.

---

## Artificial Intelligence
- Can be software only  
- No physical presence required  

### Example
Chess AI.

✔ Smart but not physical.

---

### Key Idea
Robotics = Body + Intelligence  
AI = Intelligence only

---

# 6. Why Do We Use Robots? (The 4 D's)

---

## Dirty

### Example
Sewer inspection robots.

✔ Humans avoid unsafe environments.

---

## Dull

### Example
Assembly line robots.

✔ Repetitive work  
✔ No fatigue  

---

## Dangerous

### Example
Bomb disposal robots.

✔ Keeps humans safe.

---

## Difficult

### Example
Space exploration robots.

✔ Extreme environments.

---

# 7. Challenges in Robotics

---

## 7.1 Sensing

Sensors are noisy.

### Example
Camera fails in fog.

✔ Real-world uncertainty.

---

## 7.2 Computation

Robots must think fast.

### Example
Self-driving car braking instantly.

✔ Delay can cause accidents.

---

## 7.3 Actuation

Robots lack human dexterity.

### Example
Robot hand vs human hand.

✔ Human hands are more flexible.

---

## 7.4 Localization

Robot must know location.

### Example
Warehouse robot.

✔ Needs accurate position.

---

## 7.5 Path Planning

Robot must avoid obstacles.

### Example
Delivery robot in crowd.

✔ Needs safe navigation.

---

# 8. Ethics in Robotics

Robots affect society.

---

### Issues
- Job replacement  
- Privacy concerns  
- Safety risks  

---

### Example
Facial recognition robot.

✔ Raises privacy concerns.

---

# 9. Types of Robots

---

## Ground Robots

Example: Mars rover  
✔ Moves on land.

---

## Aerial Robots

Example: Drone  
✔ Flies in air.

---

## Underwater Robots

Example: Subsea explorer  
✔ Operates underwater.

---

## Space Robots

Example: ISS robotic arm  
✔ Works in zero gravity.

---

# Final Key Takeaways

- Robots sense, think, and act  
- Sensors + actuators are essential  
- Robotics blends mechanics, electronics, and AI  
- Robots help in dangerous and difficult tasks  
- Ethical design is important

---

# Self-Check Questions

1. Why is a chess AI not a robot?  
2. Give two examples of sensors.  
3. What are the 4 D’s?  
4. Why is a self-driving car high roboticity?

---

<span style="color:blue">Lecture *Two*</span>

---

<span style="color:blue">Lecture *Three*</span>
