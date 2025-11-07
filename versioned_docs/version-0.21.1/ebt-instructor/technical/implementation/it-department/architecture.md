---
sidebar_position: 2
---

import ArchitectureDiagram from './architecture-data-flow.svg';

# IT Technical Architecture

This report provides IT stakeholders with a consolidated view of how the `EBT Instructor` iOS application connects to enterprise services, external data providers, and secure data platforms. It highlights mandatory integrations, configurable options, and the controls that enforce ISO/IEC 27001-aligned security.

<ArchitectureDiagram role="img" aria-label="EBT Instructor data flow architecture" />

## Architecture Summary

- **Core application**: `EBT Instructor` native iOS client acting as the secure presentation layer for instructors.
- **Access control**: Enterprise single sign-on (SSO) via Azure AD, Google Workspace, or Sign in with Apple, federated through centralized identity governance.
- **Data enablement options**: Either integrate with certified aeronautical data providers (Jeppesen, Lido, etc.) or manage curated data internally when 3rd-party data is not approved.
- **Data storage**: Couchbase cluster for EBT scenario content, supplemented by SkyDynamics managed services or customer-hosted infrastructure.
- **Protection & compliance**: Transport security, hardened endpoints, and operational controls mapped to ISO/IEC 27001 Annex A.

## Integration Touchpoints

### Identity and Access Management

| Touchpoint | Purpose | Notes |
| --- | --- | --- |
| Azure Active Directory | Primary SSO, conditional access, SCIM provisioning | See [Azure AD Integration](./azure-ad-integration) |
| Google Workspace | OAuth 2.0/OIDC sign-in for airlines using Google identity | Supports domain-restricted access |
| Apple Sign-In | Consumer-style Sign in with Apple for BYOD instructors | Enforce managed Apple IDs where possible |

**Key design considerations**

- Enforce modern OpenID Connect / SAML flows with MFA and conditional access policies.
- Use SCIM/Graph API automation for least-privilege role assignment within EBT Instructor.
- Maintain centralized audit logs for identity events in the SIEM platform.

### Aeronautical Data Supply

| Option | Description | Governance |
| --- | --- | --- |
| Option A: Certified provider | Integrate via provider APIs (e.g., Jeppesen, Lido). Access secured through provider-issued API keys stored in enterprise secrets management (Azure Key Vault, HashiCorp Vault). | Contracts managed by flight operations; IT oversees key rotation and monitoring. |
| Option B: Curated internal data | Department-owned data uploaded through administrator console or secure SFTP drops. Validated by airworthiness & training teams before publication. | Change control maintained through revision logs and dual-approval workflows. |

### Data Storage & Exchange

- **Couchbase Cluster**: Authoritative store for scenario definitions, instructor notes, and assessment metadata. Deploy in HA configuration with node-level encryption-at-rest and TLS 1.2+.
- **SkyDynamics Managed Platform**: Certified ISO/IEC 27001, SOC 2, and GDPR compliant hosting. Includes managed patching, DDoS protection, and 24/7 monitoring.
- **Self-Hosted Alternative** *(Option B)*: Airline-operated data center or private cloud. Requires adherence to Aero EBT hardening guidelines, network segmentation, and documented DR plan.
- **Secure Data Exchange**: All inter-system traffic routed through a TLS-terminated API gateway with WAF protection. Batch transfers use SFTP with FIPS 140-2 validated ciphers.

## API Key & Credential Management

- Register all external API keys in enterprise secrets vaults with automated rotation policies.
- Restrict API access through IP allow lists, client certificates, or mTLS where supported.
- Monitor usage via API gateway analytics; alert on anomalous call volumes or unauthorized endpoints.
- Maintain quarterly access reviews and revoke unused credentials within 30 days.

## Security and Compliance Controls

| Control Area | Implementation Details |
| --- | --- |
| Data in transit | TLS 1.2+/1.3 enforced across mobile, API gateway, and database tiers (ISO 27001 A.10.1). |
| Data at rest | AES-256 encryption via provider-managed or customer-managed keys (CMKs). |
| Access control | Role-based access control (RBAC) mapped to instructor, supervisor, and admin roles with separation of duties (A.9). |
| Logging & monitoring | Centralized log aggregation, tamper-evident storage, SIEM alerting, and quarterly review (A.12, A.16). |
| Incident response | 24/7 contact matrix, runbooks, and escalation path aligned with Safety & IT policies (A.16). |
| Supplier management | Due diligence and SLA monitoring for SkyDynamics, data providers, and identity platforms (A.15). |

## Operational Considerations

- **Environment segregation**: Maintain isolated dev, staging, and production stacks with CI/CD promotion gates.
- **Mobile device posture**: Enforce MDM compliance (device encryption, passcode policy, jailbreak detection) before granting access to production APIs.
- **Business continuity**: Target RPO ≤ 4 hours and RTO ≤ 12 hours with cross-region replication or secondary data center strategy.
- **Documentation alignment**: Sync architecture updates with [Infrastructure Setup](../infrastructure) and department-specific runbooks.

## Next Steps for IT

- Validate selected data provider option with Compliance & Flight Ops.
- Confirm hosting model (SkyDynamics managed vs. self-hosted) and initiate procurement or provisioning.
- Configure SSO federation and SCIM provisioning in the test environment before onboarding instructors.
- Schedule a security review covering API gateways, secrets management, and monitoring integrations.

---

*For implementation assistance, coordinate with the Aero EBT technical success team.*


