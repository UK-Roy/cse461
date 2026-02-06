# Chapter 2 – Basics of Robotics Kinematics

Kinematics comes from two Greek roots:

- **Kine** → motion 
- **Matics** → related to study or analysis 

So, *kinematics* literally means **the study of motion**.

In robotics, kinematics answers a very specific and practical question:

> How does the motion of joints translate into the motion of the robot’s end-effector?

It deals only with **geometry and motion**:
- positions 
- orientations 
- angles 
- velocities 

It does **not** consider:
- forces 
- torques 
- masses 
- energy 

That part belongs to *dynamics*.

In this chapter, we focus purely on kinematics.
We learn how joint angles and link lengths determine where a robot’s hand (end-effector) appears in space, and how to compute those angles back from a desired position.

This is the mathematical backbone of:
- robot arms
- manipulators
- pick-and-place systems
- surgical robots 
- industrial automation

In this chapter we study how a robot arm moves in space and how joint angles relate to the position of the end-effector.

We will build everything using **pure trigonometry** before moving to the DH-parameter method in the next section.

This chapter is divided into three parts:

1. Forward Kinematics using Trigonometry.
2. Inverse Kinematics using Trigonometry.
3. Forward Kinematics using DH Parameters.

---

## Part 1 – Forward Kinematics using Trigonometry

We begin with a **3R planar robot**: three revolute joints operating in a plane.

The goal of *forward kinematics* is:

> Given joint angles $ \theta_1, \theta_2, \theta_3 $, find the position of the end-effector $ P(x, y) $.

---

### Basic Idea

For a single rigid link of length $L$ at an angle $\theta$ with respect to the x-axis, its endpoint lies at:

$$
x = L \cos \theta, \quad y = L \sin \theta
$$

This is simple trigonometry.

However, in a real robot, **joint angles are not measured from the global x-axis**.  
Each joint angle is measured **with respect to the previous link**.

So, to compute the actual $(x, y)$ position of the end-effector, we must reconstruct the *absolute orientation* of each link using geometry.

---

### Two-Link Planar Arm

For a 2-link arm with lengths $L_1, L_2$ and joint angles $\theta_1, \theta_2$:

$$
x = L_1 \cos \theta_1 + L_2 \cos \theta_2'
$$

$$
y = L_1 \sin \theta_1 + L_2 \sin \theta_2'
$$

From the geometry of the arm, the effective angle of the second link with respect to the x-axis is:

$$
\theta_2' = -180^\circ + \theta_1 + \theta_2
$$

Substituting:

$$
x = L_1 \cos \theta_1 + L_2 \cos(-180^\circ + \theta_1 + \theta_2)
$$

$$
y = L_1 \sin \theta_1 + L_2 \sin(-180^\circ + \theta_1 + \theta_2)
$$

---

### Three-Link Planar Arm (3R)

When the third joint is added, the end-effector position becomes:

$$
x = L_1 \cos \theta_1
  + L_2 \cos(-180^\circ + \theta_1 + \theta_2)
  + L_3 \cos(-360^\circ + \theta_1 + \theta_2 + \theta_3)
$$

$$
y = L_1 \sin \theta_1
  + L_2 \sin(-180^\circ + \theta_1 + \theta_2)
  + L_3 \sin(-360^\circ + \theta_1 + \theta_2 + \theta_3)
$$

These equations give the **end-effector position directly from the joint angles**.

---

> This method works, but it becomes messy as the number of joints increases.  
> Each new joint introduces more angle bookkeeping and geometric reasoning.

This is exactly why we later move to a **systematic and scalable method**:

> **Forward Kinematics using DH Parameters**

---

## Part 2 – Inverse Kinematics using Trigonometry

Inverse kinematics answers the opposite question of forward kinematics:

> Given a target point $P(x, y, z)$, find the joint angles  
> $ (\theta_1, \theta_2, \theta_3) $

For a 3R robot in 3D, we cannot solve this using a single triangle.  
We must decompose the problem into **two geometric views**:

1. **Top View** → determines $\theta_1$  
2. **Side View** → determines $\theta_2$ and $\theta_3$

This two-view idea is the core trick of trigonometric inverse kinematics.

---

### Step 1 – Top View (Finding $\theta_1$)

Project the point $P(x, y, z)$ onto the $XY$ plane.

From the top view:

$$
\tan \theta_1 = \frac{y}{x}
\quad \Rightarrow \quad
\theta_1 = \tan^{-1}\!\left(\frac{y}{x}\right)
$$

We also compute the radial distance:

$$
r = \sqrt{x^2 + y^2}
$$

This $r$ is the horizontal distance from the base to the projection of the end-effector.  
It becomes the “$x$-axis” for the side-view problem.

---

### Step 2 – Side View (Finding $\theta_2$ and $\theta_3$)

Now work in the $r$–$z$ plane.

Let the base height be $h$.  
The effective vertical displacement is:

$$
z' = z - h
$$

Form a triangle from the base to point $P(r, z)$:

$$
AP = \sqrt{r^2 + (z-h)^2}
$$

We split $\theta_2$ into two parts:

$$
\theta_2 = \theta_2' + \theta_2''
$$

The first part comes from simple trigonometry:

$$
\theta_2' = \tan^{-1}\!\left(\frac{z-h}{r}\right)
$$

The second part comes from the **cosine rule**, because this is not a right triangle:

$$
\cos \theta_2'' =
\frac{L_2^2 + AP^2 - L_3^2}{2 L_2 \cdot AP}
$$

So,

$$
\theta_2 =
\tan^{-1}\!\left(\frac{z-h}{r}\right)
+
\cos^{-1}\!\left(
\frac{L_2^2 + AP^2 - L_3^2}{2 L_2 \cdot AP}
\right)
$$

For the third joint angle:

$$
\theta_3 =
\cos^{-1}\!\left(
\frac{L_2^2 + L_3^2 - AP^2}{2 L_2 L_3}
\right)
$$

Finally, from the top view:

$$
\theta_1 = \tan^{-1}\!\left(\frac{y}{x}\right)
$$

---

## Final Inverse Kinematics Solution

Given a target point $P(x, y, z)$:

$$
\theta_1 = \tan^{-1}\!\left(\frac{y}{x}\right)
$$

$$
r = \sqrt{x^2 + y^2}
$$

$$
AP = \sqrt{r^2 + (z-h)^2}
$$

$$
\theta_2 =
\tan^{-1}\!\left(\frac{z-h}{r}\right)
+
\cos^{-1}\!\left(
\frac{L_2^2 + AP^2 - L_3^2}{2 L_2 \cdot AP}
\right)
$$

$$
\theta_3 =
\cos^{-1}\!\left(
\frac{L_2^2 + L_3^2 - AP^2}{2 L_2 L_3}
\right)
$$

These three equations give the complete inverse kinematics solution for the 3R robot.

---

### Key Takeaways

- Inverse kinematics maps **position → angles**

- A 3D problem becomes simple when split into:
  - Top view (rotation about base)
  - Side view (planar geometry)

- We use:
  - Projection
  - Right-triangle trigonometry
  - Cosine rule

This method is intuitive and geometric, but it becomes hard to scale.

That is why, in the next section, we move to a **systematic and general method**:

---

In the next part, we will replace this manual geometry with a clean, repeatable framework:

> **Forward Kinematics using DH Parameters**

