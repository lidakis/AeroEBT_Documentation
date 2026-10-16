---
sidebar_position: 4
title: "Feature Access: roles that add up and iPad switches"
description: "How a person's roles combine, how to hide an iPad profile tab or Company Settings section for a role, and the roles a new flight school starts with."
---

# Feature Access: roles that add up and iPad switches

**Applies to:** web admin 1.2.3 and later. Roles adding up works with every iPad version; the profile tab and Company Settings switches need Instructor 1.47 on the iPad.

## Who this is for

Organisation administrators who decide what each role sees on the web admin and on the iPad.

## Before you start

- You need the administrator role, or a role with **Feature Access** in your menu.
- Switches for the whole organisation are set by your platform administrator (**Super Admin**). On **Feature Access** you change them for one role at a time, under **Per-Role Overrides**.
- Changes reach an iPad when the person signs in again, or opens the app after it has been in the background for more than five minutes. A person who is offline keeps the access their iPad last received.

## A person's roles now add up

A person has one **App Role** and can hold more roles, for example under **Fleet Roles** (TRI, SFI, CCI) or **Flight School Role**. Since 16 October 2026 every role a person holds counts:

- A feature is **on** for the person when **any** of their roles turns it on.
- Each role is read as before: what the role switches off or on in **Per-Role Overrides** comes first, then the organisation's setting, then the feature's default.
- An extra role counts only when it has its own settings in **Per-Role Overrides**. A role nobody has set up adds nothing.
- People with one role see no change.

Example: a trainee who is also a CCI now gets what the CCI role allows, such as creating and editing scenarios, on the web admin and on the iPad.

To give a person less, remove the extra role in **People** → **Roles**, or switch the feature off for that extra role too.

## Hide an iPad profile tab or Company Settings section for a role

Instructor 1.47 can hide single tabs of a pilot profile and single sections of **Company Settings**. The **General** profile tab always shows.

| Group in Feature Access | Switch | Hides on the iPad |
|---|---|---|
| **Pilots & Wallet** | **Profile: Progress** | Progress tab of a pilot profile |
| **Pilots & Wallet** | **Profile: Stats** | Stats tab |
| **Pilots & Wallet** | **Profile: Assignments** | Assignments tab |
| **Pilots & Wallet** | **Profile: Certificates** | Certificates tab |
| **Pilots & Wallet** | **Profile: Expiries** | Expiries tab |
| **Pilots & Wallet** | **Profile: Grading Reports** | Grading Reports tab |
| **Admin** | **Company Settings: Structure** | Company Structure section |
| **Admin** | **Company Settings: Roles** | Roles section |
| **Admin** | **Company Settings: Grading Scale** | Grading Scale section |
| **Admin** | **Company Settings: Company Info** | Company Info section |
| **Admin** | **Company Settings: Aerobrain** | Aerobrain section |
| **Admin** | **Company Settings: Dashboard Layout** | Dashboard Layout section |

All twelve switches are on for every organisation. Who sees a tab or section is still decided by the role first (for example, only managers see **Company Settings**); a switch can only take it away.

1. Open **Feature Access** in the menu.
2. Select **Per-Role Overrides**.
3. In **Select a role...**, choose the role.
4. Open the group **Pilots & Wallet** for profile tabs, or **Admin** for Company Settings sections.
5. Turn off the switch, for example **Profile: Stats**.
6. Select **Save Role Feature Policy**.
7. On the iPad, the person signs out and in again, or leaves the app in the background for more than five minutes and opens it again.

To show the tab or section again, turn the switch back on and select **Save Role Feature Policy**.

## Roles a new flight school starts with

A new organisation of the flight school type now starts with five flight school roles and their settings in **Per-Role Overrides**: **Head of Training (HT)**, **Chief Flight Instructor (CFI)**, **Flight Instructor (FI)**, **Operations Officer** and **Safety Manager**. An organisation that becomes a flight school later gets them at that moment.

- Roles and settings your organisation already has are never overwritten.
- Change the settings per role in **Per-Role Overrides** as usual.
- Maintenance (Technik) features are off in all five.

## Billing for flight school managers

**Head of Training (HT)**, **Training Manager** and **Operations Officer** can now open **Billing** in a flight school, as administrators can.

## If something goes wrong

- **A person still sees a tab you switched off:** their iPad has older access. Ask them to sign out and in again. iPads before Instructor 1.47 do not read these switches and keep today's tabs.
- **A person sees more than you expected:** check every role they hold in **People** → **Roles**. One extra role that allows a feature is enough to turn it on. Remove the role or switch the feature off for it.
- **A person lost a feature:** the switch is off for every role they hold. Turn it on for one of their roles and select **Save Role Feature Policy**.
- **Working offline:** the iPad keeps the last access it received, so a change made while it is offline applies after it reconnects. Nothing is lost on the iPad when a tab is hidden; the data shows again when the switch is turned back on.
- **The new flight school roles are missing:** check that the organisation type is flight school. If it is and the roles are still missing, contact support; an administrator can also add the roles by hand in **Roles**.
