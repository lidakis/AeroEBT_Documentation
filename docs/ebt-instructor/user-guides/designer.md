---
sidebar_position: 5
---

# Designer Guide

The Designer role in EBT Instructor provides comprehensive tools for creating and managing training scenarios. Designers have exclusive access to scenario editing capabilities, allowing them to configure all aspects of training scenarios according to company requirements.

## Overview

As a Designer, you can create, edit, and manage training scenarios that will be used by Instructors and Trainees. The scenario editing interface is organized in a convenient, step-by-step workflow that follows your company's specific instructions and requirements.

## Scenario Creation Workflow

The scenario creation process is divided into four main steps:

### Step 1: General Information

Configure the basic scenario parameters:

- **Scenario Name**: Unique identifier for the scenario
- **Scenario Type**: Select from available types (e.g., "SBT - Scenario Based Phase")
- **Duration**: Set the total scenario duration using the slider (e.g., 02:00)
- **Session Periods**: Configure the number of session periods (adjustable with +/- buttons)
- **Session Parts**: Set the number of session parts (adjustable with +/- buttons)
- **Validity Period**: Select the validity period (e.g., 2026) and period segment (A, B, C)
- **EBT Compliant**: Toggle to mark scenario as EBT compliant
- **Aircraft Information**: Select aircraft type and variant (e.g., A320, A32nx)
- **Flight Data**: Enter flight identifier (e.g., AEE101)

![Step 1: General Information](./designer-step1.png)

### Step 2: Initial Simulation Setup

Configure the initial simulation parameters:

- **V-Speeds**: Set V1, VR, and V2 speeds
- **Weather Information**: 
  - Initial weather METAR
  - Area weather forecasts (SIGMET/PIREP)
- **MEL (Minimum Equipment List)**: Enter MEL items
- **NOTAMs**: Add relevant NOTAMs
- **ATC Clearance**: Enter ATC clearance instructions
- **General Notes**: Additional initialization notes

![Step 2: Initial Simulation Setup](./designer-step2.png)

### Step 3: Flight Phases

Define flight phases and their configurations:

- **Phase Selection**: Select flight phase (e.g., GND - Ground)
- **Duration**: Set phase duration using slider (e.g., 00:55)
- **Test Information**: Enter test identifier
- **Test Remarks**: Add remarks for the phase
- **Content**: 
  - Filter by content type: All, Abnormal, Normal, Supplementary
  - Add scenario content and descriptions
  - Include specific flight events and procedures
- **Observable Items**: 
  - Define checklist observations
  - Add competency markers (e.g., EDA, CAM)

![Step 3: Flight Phases](./designer-step3.png)

### Step 4: Description

Add detailed scenario descriptions:

- **Sections**: Create multiple description sections
- **Section Content**: Add training notes and instructions for instructors
- **Section Management**: Add or delete sections as needed

![Step 4: Description](./designer-step4.png)

## Advanced Features

### Auto-Suggest and Auto-Complete

All input fields in the scenario editing interface feature intelligent auto-suggest and auto-complete functionality:

- **Flight Phases**: Auto-suggestions based on standard phase definitions
- **Flight Plans**: Auto-complete for waypoints, routes, and navigation data
- **Airports**: Auto-suggestions for ICAO/IATA codes and airport information
- **Routes**: Auto-complete for standard routes and airways
- **Systems**: Auto-suggestions for aircraft systems and components
- **Competencies**: Auto-complete for competency codes and descriptions
- **Procedures**: Auto-suggestions for standard operating procedures

This feature significantly speeds up scenario creation and ensures consistency with company standards and aviation databases.

### Scenario View and Management

The main scenario view provides comprehensive access to all scenario components:

#### Left Panel - Scenario Details

- **Init Sim Tab**: View and edit initial simulation parameters
- **Scenario Tab**: Access flight phase timeline and content
- **Flight Plan Tab**: View and edit flight plan details
- **Description Tab**: Access scenario descriptions

#### Right Panel - Additional Information

- **General Tab**: 
  - Briefing items
  - Competencies
  - Systems
  - Tasks
  - Procedures
- **Airports Tab**: 
  - Departure airport details
  - Arrival airport details
  - Take-off alternates
  - Area weather information
- **Map Tab**: Visual representation of flight route
- **Files Tab**: Attached files and documents

![Scenario View](./designer-scenario-view.png)

### Flight Plan Configuration

Configure detailed flight plan information:

- **Flight Plan**: Enter complete flight plan with waypoints
- **Route**: Define route segments and airways
- **Initial Position**: Set starting position (e.g., RWY27 HOLDING POINT)
- **Aircraft Initialization**: 
  - Zero Fuel Weight (ZFW)
  - Fuel On Board (FOB)
  - Configuration
  - Flex temperature
  - V-speeds

![Flight Plan View](./designer-flight-plan.png)

### Airport Information

Access comprehensive airport data:

- **Search**: Filter airports by ICAO or IATA codes
- **Departure Airport**: 
  - Runway information
  - Airport details
  - Weather conditions
- **Arrival Airport**: 
  - Runway information
  - Approach categories
  - Airport details
- **Take-Off Alternates**: Configure alternate airports

![Airports View](./designer-airports.png)

### Map Visualization

Visual representation of the flight route:

- **Geographic Map**: Interactive map showing flight path
- **Airport Markers**: Visual indicators for departure and arrival airports
- **Route Visualization**: Green line connecting origin and destination
- **Geographic Features**: Labels for relevant geographic areas

![Map View](./designer-map.png)

## Synchronization and Collaboration

### Online Synchronization

When you save changes to a scenario:

1. **Immediate Sync**: Changes are synchronized to the online database immediately if an internet connection is available
2. **User Visibility**: Instructors and Trainees can see the changes as soon as they are saved and synchronized
3. **Real-Time Updates**: All users with access to the scenario will see updates in real-time

### Offline Mode

If no internet connection is available:

1. **Local Storage**: Changes are saved locally on your device
2. **Automatic Sync**: When an internet connection is restored, all pending changes are automatically synchronized
3. **Conflict Resolution**: The system uses "last edit wins" strategy for conflict resolution

### Multi-Designer Collaboration

When multiple designers are designated in your company:

- **Concurrent Editing**: Multiple designers can work on different scenarios simultaneously
- **Same Scenario Editing**: If multiple designers edit the same scenario:
  - Changes are synchronized in real-time when possible
  - **Last Edit Wins**: The most recent save takes precedence
  - System notifications alert you if another designer has made changes
- **Best Practice**: Coordinate with other designers or use scenario locking features when available

## Scenario Organization

Scenarios are organized according to your company's specific instructions:

- **Grouping**: Scenarios are grouped by validity period (e.g., 2026)
- **Categorization**: Scenarios are categorized by period segments (A, B, C)
- **Naming Convention**: Follow company naming standards (e.g., "Demo 2026-1", "Test scenario 2")
- **Access Control**: Scenarios are assigned to appropriate instructors and trainees based on company policies

![Scenarios List](./designer-scenarios-list.png)

## Best Practices

1. **Plan Before Creating**: Review company requirements and standards before creating scenarios
2. **Use Auto-Complete**: Leverage auto-suggest features to ensure consistency
3. **Verify Information**: Double-check all flight data, routes, and procedures
4. **Test Scenarios**: Review scenarios in preview mode before publishing
5. **Coordinate with Team**: Communicate with other designers when working on shared scenarios
6. **Save Frequently**: Save your work regularly to avoid data loss
7. **Check Sync Status**: Verify synchronization status, especially after offline work
8. **Follow Company Standards**: Adhere to your company's scenario organization and naming conventions

## Troubleshooting

### Sync Issues

- **Check Connection**: Verify internet connectivity
- **Manual Sync**: Use the sync button to manually trigger synchronization
- **Conflict Resolution**: Review conflict notifications and resolve as needed

### Auto-Complete Not Working

- **Check Database**: Ensure aviation databases are up to date
- **Clear Cache**: Clear application cache if suggestions are outdated
- **Contact Support**: Report persistent issues to system administrator

### Access Issues

- **Verify Role**: Confirm you have Designer role permissions
- **Check Assignment**: Ensure you are assigned to the appropriate scenarios
- **Contact Administrator**: Request access if needed

---

*For additional support or questions about the Designer role, contact your system administrator or refer to the [Technical Documentation](../technical/technologies).*
