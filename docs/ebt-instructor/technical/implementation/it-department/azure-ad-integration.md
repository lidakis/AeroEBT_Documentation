---
sidebar_position: 2
---

# Azure AD Integration

This guide provides step-by-step instructions for integrating EBT Instructor with Azure AD for authentication.

## Overview

Azure Active Directory (Azure AD) integration enables single sign-on (SSO) for EBT Instructor users. This allows users to authenticate using their existing Azure AD credentials.

## Prerequisites

- Azure AD tenant with appropriate licenses
- Global Administrator or Application Administrator permissions
- Network connectivity between your infrastructure and Azure AD
- EBT Instructor application credentials

## Integration Steps

### Step 1: Register Application in Azure AD

1. **Navigate to Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with Global Administrator account

2. **Azure Active Directory**
   - Navigate to **Azure Active Directory** → **App registrations**
   - Click **New registration**

3. **Configure Application**
   - **Name**: EBT Instructor
   - **Supported account types**: Choose based on your organization
   - **Redirect URI**: 
     - Type: Web
     - URI: `https://your-ebt-instructor-domain.com/auth/callback`

4. **Register Application**
   - Click **Register**
   - Note the **Application (client) ID** and **Directory (tenant) ID**

### Step 2: Configure Authentication

1. **Configure Redirect URIs**
   - In your app registration, go to **Authentication**
   - Add redirect URIs:
     - `https://your-ebt-instructor-domain.com/auth/callback`
     - Additional URIs as needed

2. **Configure Implicit Grant**
   - Enable **ID tokens** if using implicit flow
   - Enable **Access tokens** if needed

3. **Configure Logout URL**
   - Set logout URL: `https://your-ebt-instructor-domain.com/logout`

### Step 3: Create Client Secret

1. **Certificates & secrets**
   - Navigate to **Certificates & secrets**
   - Click **New client secret**
   - Description: EBT Instructor Integration
   - Expires: Set appropriate expiration
   - Click **Add**

2. **Copy Secret Value**
   - **IMPORTANT**: Copy the secret value immediately (it won't be shown again)
   - Store securely (use password manager or secure vault)

### Step 4: Configure API Permissions

1. **API Permissions**
   - Navigate to **API permissions**
   - Click **Add a permission**
   - Select **Microsoft Graph**
   - Choose **Delegated permissions**
   - Add required permissions:
     - `User.Read` (to read user profile)
     - `openid` (for OpenID Connect)
     - `profile` (for user profile)
     - `email` (for user email)

2. **Grant Admin Consent**
   - Click **Grant admin consent for [Your Organization]**
   - Confirm the consent

### Step 5: Configure EBT Instructor

1. **Access EBT Instructor Admin Panel**
   - Log in to EBT Instructor admin portal
   - Navigate to **Settings** → **Authentication** → **Azure AD**

2. **Enter Azure AD Configuration**
   - **Tenant ID**: Directory (tenant) ID from Step 1
   - **Client ID**: Application (client) ID from Step 1
   - **Client Secret**: Secret value from Step 3
   - **Authority URL**: `https://login.microsoftonline.com/{tenant-id}`

3. **Configure Additional Settings**
   - **User Provisioning**: Configure automatic user creation
   - **Role Mapping**: Map Azure AD groups to EBT Instructor roles
   - **Attribute Mapping**: Map user attributes (email, name, etc.)

### Step 6: Test Integration

1. **Test SSO Login**
   - Log out of EBT Instructor
   - Attempt to log in
   - Should redirect to Azure AD login page
   - After authentication, should redirect back to EBT Instructor

2. **Verify User Attributes**
   - Check that user profile is correctly populated
   - Verify role assignments
   - Test user permissions

3. **Test Logout**
   - Log out of EBT Instructor
   - Verify session is terminated
   - Test single logout if configured

## User Provisioning

### Automatic Provisioning

EBT Instructor can automatically create users from Azure AD:

1. **Enable Automatic Provisioning**
   - In EBT Instructor admin, enable automatic user provisioning
   - Configure user attribute mappings

2. **Role Assignment**
   - Map Azure AD security groups to EBT Instructor roles
   - Users inherit roles from their Azure AD group membership

### Manual Provisioning

If automatic provisioning is disabled:
- Admins must manually create users in EBT Instructor
- Users are linked to Azure AD accounts via email

## Troubleshooting

### Common Issues

**Issue**: Users cannot authenticate
- **Solution**: Verify redirect URI matches exactly
- Check application registration is correct
- Verify client secret is valid

**Issue**: Users are created but roles not assigned
- **Solution**: Check role mapping configuration
- Verify Azure AD group membership
- Check group-to-role mappings

**Issue**: Logout not working correctly
- **Solution**: Verify logout URL configuration
- Check session management settings

### Support Resources

- Azure AD documentation
- EBT Instructor technical support
- Implementation team assistance

## Security Considerations

- **Secret Management**: Store client secrets securely, never commit to version control
- **Token Expiration**: Configure appropriate token lifetimes
- **Conditional Access**: Configure Azure AD Conditional Access policies
- **Multi-Factor Authentication**: Enable MFA for additional security

## Next Steps

- Configure additional [IT Integrations](./integrations)
- Set up [Infrastructure](../infrastructure) monitoring
- Review security configuration

---

*For additional support, contact your implementation team or Azure AD support*



