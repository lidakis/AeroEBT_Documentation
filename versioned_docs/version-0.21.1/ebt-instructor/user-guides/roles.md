---
sidebar_position: 1
---

# User Roles in EBT Instructor

EBT Instructor supports three distinct user roles, each with specific permissions and capabilities tailored to their responsibilities in the training workflow.

## Roles Overview

### Designer

**Purpose**: Create, edit, and manage training scenarios and configurations.

**Key Responsibilities**:
- Create and edit training scenarios
- Configure flight phases, flight plans, and routes
- Set up airport information and weather data
- Define competencies, systems, and procedures
- Manage scenario content and descriptions
- Organize scenarios according to company requirements

**Access Level**: Full editing capabilities for scenario creation and modification.

### Instructor

**Purpose**: Conduct training sessions and assess trainee performance.

**Key Responsibilities**:
- View and access assigned scenarios
- Conduct training sessions with trainees
- Monitor trainee performance in real-time
- Record observations and evidence
- Complete assessments and evaluations
- Provide feedback to trainees

**Access Level**: Read access to scenarios, full access to session management and assessment tools.

### Trainee

**Purpose**: Participate in training sessions and view assigned scenarios.

**Key Responsibilities**:
- View assigned training scenarios
- Participate in training sessions
- Access session feedback and assessments
- Review training history and progress

**Access Level**: Read-only access to assigned scenarios and personal training records.

## Role Permissions Summary

| Feature | Designer | Instructor | Trainee |
|---------|----------|------------|---------|
| Create/Edit Scenarios | ✅ | ❌ | ❌ |
| View Scenarios | ✅ | ✅ | ✅ (Assigned only) |
| Conduct Sessions | ❌ | ✅ | ❌ |
| Participate in Sessions | ❌ | ❌ | ✅ |
| Create Assessments | ❌ | ✅ | ❌ |
| View Assessments | ✅ | ✅ | ✅ (Own only) |
| Manage Flight Plans | ✅ | ❌ | ❌ |
| Configure Competencies | ✅ | ❌ | ❌ |

## Role Selection

Your role is assigned by your organization's administrator based on your position and responsibilities. You cannot change your role independently.

---

*For more information about specific role capabilities, see the [Designer Guide](./designer), [Instructor Guide](./user-guide), or contact your administrator.*

## If you hold more than one role

Since 16 October 2026 a person's roles add up. If you hold more than one role (for example an instructor role and a CCI or SFI role), you get every feature that any of your roles allows, on the iPad and on the web admin. People with one role see no change.

From Instructor 1.47 your organisation can also hide single pilot profile tabs (Progress, Stats, Assignments, Certificates, Expiries, Grading Reports) and single Company Settings sections for a role. The General tab always shows. If a tab or section you need is missing, ask your organisation administrator to check **Feature Access** in the web admin.

See [Feature Access: roles that add up and iPad switches](../../aero-ebt/user-guides/feature-access-and-roles.md) for the details.
