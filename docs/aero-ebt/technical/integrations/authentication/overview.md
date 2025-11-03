---
sidebar_position: 1
---

# Authentication Integrations

---

AeroEBT supports multiple authentication methods to provide secure and flexible access control for your organization. This section covers both enterprise Single Sign-On (SSO) solutions and OAuth providers for individual authentication.

## Overview

Authentication integrations enable your users to sign in to AeroEBT using existing credentials from your identity provider or OAuth services. This provides a seamless user experience while maintaining security and compliance with your organization's policies.

## Single Sign-On (SSO)

Enterprise SSO solutions allow your organization to centralize authentication management and provide seamless access to AeroEBT for all authorized users.

### Benefits of SSO

- **Centralized Management**: Manage user access from a single identity provider
- **Enhanced Security**: Leverage your organization's security policies and multi-factor authentication
- **User Experience**: Single sign-on experience across all applications
- **Compliance**: Meet organizational security and compliance requirements
- **Automated Provisioning**: Automatic user provisioning and deprovisioning

### Supported SSO Providers

#### Azure AD

Microsoft Azure Active Directory SSO integration for organizations using Microsoft 365 or Azure AD.

**Features:**
- SAML 2.0 protocol support
- Automatic user provisioning
- Multi-factor authentication support
- Group-based access control
- Conditional access policies

For detailed setup instructions, see [SSO with Azure AD](./sso/azure-ad.md).

#### Google Workspace

Google Workspace SSO integration for organizations using Google Workspace (formerly G Suite).

**Features:**
- SAML 2.0 protocol support
- Domain-based user management
- Organizational unit control
- Integration with Google Workspace security features

For detailed setup instructions, see [SSO with Google Workspace](./sso/google-workspace.md).

#### Okta

Okta SSO integration for organizations using Okta as their identity provider.

**Features:**
- SAML 2.0 protocol support
- Universal Directory integration
- Adaptive multi-factor authentication
- Policy-based access control

For detailed setup instructions, see [SSO with Okta](./sso/okta.md).

### SSO Configuration Overview

All SSO integrations follow a similar configuration process:

1. **Configure Identity Provider**: Set up the SAML application in your identity provider
2. **Configure AeroEBT**: Enable SSO and enter configuration details
3. **Domain Configuration**: Specify authorized email domains
4. **Attribute Mapping**: Map SAML attributes to user fields
5. **Testing**: Verify SSO functionality with test users

For specific configuration steps, refer to the individual SSO provider documentation.

## OAuth Providers

OAuth providers enable individual users to sign in using their personal accounts from popular services.

### Supported OAuth Providers

#### Google

Google OAuth integration for individual Google account authentication.

**Use cases:**
- Personal account access
- Development and testing
- Organizations without enterprise SSO

For detailed setup instructions, see [Google OAuth Integration](./oauth/google.md).

#### GitHub

GitHub OAuth integration for developers and technical teams.

**Use cases:**
- Developer account access
- Technical team authentication
- GitHub ecosystem integration

For detailed setup instructions, see [GitHub OAuth Integration](./oauth/github.md).

#### Apple

Sign in with Apple integration for iOS, macOS, and web applications.

**Use cases:**
- iOS/macOS app integration
- Privacy-focused authentication
- Apple ecosystem integration

For detailed setup instructions, see [Apple Sign-In Integration](./oauth/apple.md).

### OAuth Configuration Overview

OAuth provider setup typically involves:

1. **Create OAuth Application**: Register application in provider's developer console
2. **Obtain Credentials**: Get Client ID and Client Secret
3. **Configure AeroEBT**: Enter credentials in AeroEBT dashboard
4. **Testing**: Verify OAuth sign-in functionality

For specific configuration steps, refer to the individual OAuth provider documentation.

## Choosing the Right Authentication Method

### When to Use SSO

Choose SSO if:
- Your organization has an identity provider (Azure AD, Google Workspace, Okta)
- You need centralized user management
- You require enterprise security features (MFA, conditional access)
- You want automatic user provisioning/deprovisioning
- Compliance requires centralized authentication

### When to Use OAuth

Choose OAuth if:
- You don't have enterprise identity provider
- Individual users need personal account access
- Development and testing environments
- You want to minimize setup complexity
- Integration with specific ecosystems (GitHub, Apple)

## Security Best Practices

### General Security

- **Strong Credentials**: Use strong, unique credentials for all authentication services
- **Credential Rotation**: Regularly rotate API keys and secrets
- **Multi-Factor Authentication**: Enable MFA whenever possible
- **Access Monitoring**: Monitor authentication logs for suspicious activity
- **Least Privilege**: Grant minimum necessary access permissions

### SSO Security

- **Certificate Management**: Monitor and renew SAML certificates before expiration
- **Domain Validation**: Ensure only authorized domains can access
- **Attribute Mapping**: Verify correct attribute mapping for security
- **Audit Logging**: Enable comprehensive audit logging

### OAuth Security

- **Client Secret Protection**: Never expose client secrets
- **Redirect URI Validation**: Ensure redirect URIs are correctly configured
- **Scope Limitation**: Request only necessary OAuth scopes
- **Token Management**: Properly handle and store OAuth tokens

## Multi-Authentication Support

AeroEBT supports configuring multiple authentication methods simultaneously:

- **Primary Method**: Set SSO as primary for enterprise users
- **Fallback Methods**: Enable OAuth as fallback for specific use cases
- **Domain Routing**: Automatically route users to appropriate authentication method based on email domain
- **User Choice**: Allow users to choose authentication method where appropriate

## User Provisioning

### Automatic Provisioning

With SSO enabled:
- Users can be automatically added to your organization
- Default roles can be assigned automatically
- User information is synchronized from identity provider

### Manual Provisioning

When automatic provisioning is disabled:
- Users must be manually added to the organization
- Administrators control user access
- More granular access control

## Troubleshooting

### Common Authentication Issues

**Users cannot sign in**
- Verify authentication provider configuration
- Check domain configuration matches user email domains
- Ensure users have been granted access in identity provider
- Review authentication logs for specific errors

**SSO redirect errors**
- Verify SAML metadata URL is correct and accessible
- Check certificate expiration dates
- Ensure redirect URIs are correctly configured
- Review SAML response for errors

**OAuth authentication failures**
- Verify Client ID and Client Secret are correct
- Check redirect URI configuration
- Ensure OAuth application is active
- Review OAuth provider logs

For detailed troubleshooting steps, refer to individual provider documentation.

## Support

For additional assistance with authentication integrations:

- **Documentation**: Comprehensive guides for each authentication method
- **Configuration Support**: Assistance with authentication setup
- **Support Team**: Contact support@skydynamics.aero
- **SSO Provider Guides**: See individual SSO provider documentation
- **OAuth Provider Guides**: See individual OAuth provider documentation

## Related Documentation

### SSO Providers
- [SSO with Azure AD](./sso/azure-ad.md)
- [SSO with Google Workspace](./sso/google-workspace.md)
- [SSO with Okta](./sso/okta.md)

### OAuth Providers
- [Google OAuth Integration](./oauth/google.md)
- [GitHub OAuth Integration](./oauth/github.md)
- [Apple Sign-In Integration](./oauth/apple.md)

